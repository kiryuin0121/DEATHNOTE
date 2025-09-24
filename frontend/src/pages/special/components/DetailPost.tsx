import React, { useEffect } from "react";
import { SpecialPost } from "../../../types/post";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Slider from "./Slider";
import { motion } from "motion/react";
type Props = {
  post: SpecialPost;
  setActivePost: React.Dispatch<React.SetStateAction<SpecialPost | null>>;
};
/**
 *@returns 記事の情報(マークダウン形式の文字列と画像のパス)を受け取り画面描画。urlも変わる。
 *@param post 記事一件分の情報
 *@param setActivePost 詳細情報の表示非表示を管理する(nullを入れるとアンマウントされる)
 */
const DetailPost = ({ post, setActivePost }: Props) => {
  const { images } = post;
  const handleClick = () => {
    history.replaceState(null, "", `/special`);
    setActivePost(null);
  };
  // urlを変更
  useEffect(() => {
    history.replaceState(null, "", `/special/${post.id}`);
    return () => {};
  }, []);
  // ブラウザバック
  useEffect(() => {
    const handlePopstate = () => {
      window.history.pushState(null, "", `/special/${post.id}`);
    };
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [setActivePost]);
  return (
    <motion.article
      className="fixed top-0 left-0 z-[2] w-screen h-screen bg-deathBlack flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <section className="mt-[10vh] w-[90vw] mx-auto overflow-y-scroll no-scrollbar">
        {/* マークダウン文字列を解釈して表示 */}
        <div className="prose prose-invert prose-h1:mb-0 prose-h1:text-[2rem] mx-auto whitespace-pre-line mb-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
        <Slider images={images} />
      </section>
      <button
        onClick={handleClick}
        className="absolute top-8 left-8 bg-deathWhite text-deathBlack px-4 py-2 cursor-pointer transition-all duration-100 hover:brightness-75"
      >
        トリビア一覧へ戻る
      </button>
    </motion.article>
  );
};

export default DetailPost;
