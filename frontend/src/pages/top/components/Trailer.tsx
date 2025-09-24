import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../../../types/trailer";
import { motion } from "motion/react";
import Loading from "./Loading";
import MurderList from "./MurderList";
//💻TODO:ロードアニメーション挿入💻
/**
 *@returns ボタンをクリックすることで、予告動画を切り替えられるコンポーネント
 */
const Trailer = () => {
  // 動画一覧
  const [trailers, setTrailers] = useState<Movie[]>([]);
  // 再生したい動画のid
  const [activeTrailerId, setActiveTrailerId] = useState<string>();
  // 再生したい動画
  const [activeTrailer, setActiveTrailer] = useState<Movie>();
  // ロード中か否か
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // エラー
  const [hasError, setHasError] = useState<boolean>(false);

  // Expressサーバーから動画の一覧情報を取得し、trailers,activeTrailerを初期化する。
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/trailers");
        // 初期化処理
        setTrailers(res.data.trailers);
        setActiveTrailerId(res.data.trailers[0]?.id);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    })();
  }, []);

  // ユーザーが動画を切り替えようとした際に新しいものに差し替える。
  useEffect(() => {
    // 動画を差し替え
    if (!activeTrailerId) return;
    const newActiveTrailer = trailers.find(
      (trailer) => trailer.id === activeTrailerId
    );
    setActiveTrailer(newActiveTrailer);
    // ローディング
    setIsLoading(true);
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [activeTrailerId, trailers]);

  // error boundary
  if (hasError) {
    return (
      <div className="w-full h-full">
        <p>予告動画の取得に失敗しました(´・ω・｀)。</p>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-[90vh]">
      <MurderList />
      <div className="absolute top-0 left-0 z-[1] w-full flex flex-col items-center justify-center gap-y-8">
        {/* 動画 */}
        {activeTrailer && (
          <section className="flex flex-col gap-y-4">
            {/* 動画のタイトル */}
            <h3 className="text-center text-base lg:text-xl">
              {activeTrailer.title}
            </h3>
            {/* 再生画面(ローディング中はローディング画面を表示させる) */}
            <div className="relative w-[50vw] aspect-video mx-auto mb-4 ">
              <video
                src={activeTrailer.url}
                poster={activeTrailer.thumbnail}
                controls
                loop
                className="w-full h-full "
              />
              {isLoading && <Loading />}
            </div>
          </section>
        )}
        {/* コントローラー */}
        <ul className="w-[90vw] flex justify-center items-center flex-wrap gap-4">
          {trailers.map((trailer) => (
            <li key={trailer.id}>
              <button
                onClick={() => setActiveTrailerId(trailer.id)}
                className={`px-2 lg:px-4 py-1 lg:py-1.5 text-xs lg:text-sm block w-[content] border-1 cursor-pointer ${
                  trailer.id === activeTrailerId
                    ? "text-red-800 border-red-900"
                    : "text-silver border-deathDarkGray"
                }`}
              >
                {trailer.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trailer;
