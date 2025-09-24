import { motion, useAnimation } from "motion/react";

type Props = {
  activeTabIdx: number;
  handleContent: (idx: number) => void;
};
/**
 *@returns タブのヘッダー部分
 *@param activeTabIdx タブを識別する番号(0:アーティスト、1:歌詞)
 *@param handleContent コンテンツを表示するタブを切り替える関数
 */
const TabHeader = ({ activeTabIdx, handleContent }: Props) => {
  const variants = {
    artist: {
      x: "0%",
    },
    lyrics: {
      x: "100%",
    },
  };
  const animation = useAnimation();
  return (
    <h3 className="h-[7vh] w-full flex justify-center items-center relative">
      <button
        onClick={() => {
          handleContent(0);
          animation.start("artist");
        }}
        className={`h-[7vh]  w-full cursor-pointer text-center border-b-1 border-deathDarkGray   `}
      >
        <span className="block tracking-widest">Artist</span>
        <span className="block text-[9px] tracking-tighter ">アーティスト</span>
      </button>
      <button
        onClick={() => {
          handleContent(1);
          animation.start("lyrics");
        }}
        className={`h-[7vh]  w-full cursor-pointer text-center border-b-1 border-deathDarkGray   `}
      >
        <span className="block tracking-wide">Lyrics</span>
        <span className="block text-[9px] tracking-widest ">歌詞</span>
      </button>
      {/* アンダーバー */}
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-deathWhite"
        variants={variants}
        initial="artist"
        animate={animation} //変数を媒介してアニメーションオブジェクトを渡すことで実行するアニメーションを動的に切り替える
        transition={{ duration: 0.25 }}
      />
    </h3>
  );
};

export default TabHeader;
