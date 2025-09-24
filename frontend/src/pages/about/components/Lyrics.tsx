import { useEffect, useRef } from "react";
import { Lyric } from "../../../types/song";
import { motion } from "motion/react";
type Props = {
  lyrics: Lyric[];
  handleSeek: (seconds: number) => void;
  currentTime: number;
  name: string;
};
/**
 *@return 歌詞。再生中のフレーズが画面中央に表示される。フレーズをクリックするとその部分まで再生位置をスキップできる。
 *@param lyrics:歌詞(歌詞のフレーズとその再生位置を一要素とする配列)
 *@param handleSeek:再生位置を制御する関数
 *@param currentTime:現在の再生位置
 */
const Lyrics = ({ lyrics, handleSeek, currentTime, name }: Props) => {
  const lyricsRef = useRef<HTMLDivElement>(null);

  /**
   * 再生中のフレーズを特定する関数
   *@returns 再生中のフレーズの要素番号
   */
  const getActivePhraseIdx = (): number => {
    for (let idx = lyrics.length - 1; idx >= 0; idx--) {
      if (lyrics[idx].time <= currentTime) {
        return idx;
      }
    }
    return -1;
  };

  /**
   *再生中のフレーズの要素番号(pタグのkey属性の値に対応)
   */
  const activePhraseIdx = getActivePhraseIdx();

  //activePhraseが更新されるごとにフレーズを画面の中央へ自動スクロール。
  useEffect(() => {
    if (!lyricsRef.current || activePhraseIdx === -1) return;

    const phraseEl = lyricsRef.current.children[
      activePhraseIdx
    ] as HTMLParagraphElement;

    phraseEl.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, [activePhraseIdx]);

  return (
    <div className="w-[90%] h-[72vh] mx-auto overflow-hidden">
      <motion.div //lyricsRef
        ref={lyricsRef}
        className="overflow-y-scroll w-full h-screen no-scrollbar flex flex-col gap-y-4 scroll-snap-container py-[50vh]"
        initial={{ opacity: 0, x: "-10%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.25 }}
      >
        {lyrics.map((Lyric: Lyric, phraseIdx: number) => {
          const isActivePhrase = activePhraseIdx === phraseIdx;

          return (
            <p //phraseEl
              key={phraseIdx}
              onClick={() => handleSeek(Lyric.time)}
              className={`scroll-snap-item whitespace-pre-line leading-9 cursor-pointer text-center text-deathLightGray
                ${isActivePhrase && "text-white font-semibold scale-110"}
                `}
            >
              {Lyric.phrase}
            </p>
          );
        })}
        <p className="text-center text-sm text-deathLightGray">
          （作成：{name}）
        </p>
      </motion.div>
    </div>
  );
};

export default Lyrics;
