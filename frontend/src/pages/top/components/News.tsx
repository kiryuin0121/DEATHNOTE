import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { NewsPost } from "../../../types/post";
import { motion } from "motion/react";
/**
 *@returns 最新のニュース記事リスト
 */
const News = () => {
  // 記事一覧情報
  const [posts, setPosts] = useState<NewsPost[]>([]);
  // 何ページ目か(最新の記事が欲しいので1ページ目を取得)
  const PAGE = 1;
  // 取得記事件数
  const LIMIT = 3;
  // エラー
  const [hasError, setHasError] = useState<boolean>(false);
  // Expressサーバーから記事の情報を取得し、postsを初期化する。
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(" http://localhost:3000/api/news", {
          params: { page: PAGE, limit: LIMIT },
        });
        setPosts(res.data.posts as NewsPost[]);
      } catch (error) {
        setHasError(true);
        console.error(error);
      }
    })();
  }, []);

  // error boundary
  if (hasError) return <section>最新情報の取得に失敗しました。</section>;

  return (
    <section className="flex justify-center items-center w-[90vw] h-screen ">
      <ul className="flex flex-col justify-center items-center gap-y-4 w-[50vw] min-h-[50vh] px-8 py-8  bg-deathBlack/50 overflow-hidden">
        {posts.map((post, idx) => {
          return (
            <motion.li
              key={post.id}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.1 * idx }}
            >
              {/* ニュース記事 */}
              <a href={`/news?id=${post.id}`} target="_new">
                <article className="pb-1 lg:pb-2 border-b border-deathLightGray transition-colors duration-300 text-deathWhite hover:text-red-800 relative">
                  {/* 投稿日 */}
                  <div className="hidden lg:block text-sm pb-1">
                    {format(post.createdAt, "yyyy年MM月dd日")}
                  </div>
                  {/* タイトル */}
                  <h2 className="text-sm lg:text-base">{post.title}</h2>
                </article>
              </a>
            </motion.li>
          );
        })}
        <motion.button
          className=" text-sm lg:text-base transition-colors duration-300 text-deathWhite hover:text-red-800"
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <a href="/news">もっと見る</a>
        </motion.button>
      </ul>
    </section>
  );
};

export default News;
