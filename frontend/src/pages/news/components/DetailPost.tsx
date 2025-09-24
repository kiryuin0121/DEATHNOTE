import React, { useEffect } from "react";
import { NewsPost } from "../../../types/post";
import { format } from "date-fns";

type Props = {
  activePost: NewsPost;
  setActivePost: React.Dispatch<React.SetStateAction<NewsPost | null>>;
};
const DetailPost = ({ activePost, setActivePost }: Props) => {
  const handleClick = () => {
    setActivePost(null);
    window.history.pushState(null, "", "/news");
  };
  // ブラウザバック禁止
  useEffect(() => {
    const handlePopstate = () => {
      window.alert("urlがバグるからブラウザバックしないで");
      window.history.pushState(null, "", `/news/${activePost.id}`);
    };
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [setActivePost]);

  return (
    <article className="fixed top-0 left-0 z-[2] h-screen w-screen py-[5vh] bg-[url(/images/global/bg.jpg)]">
      <div className="w-[90vw] mx-auto">
        <h1 className="page-title">NEWS</h1>
        <section className="w-[90vw] min-h-[50vh]">
          <h2>{activePost.title}</h2>
          {/* Dateオブジェクトを「年-月-日」のフォーマットに変換 */}
          <p>{format(activePost.createdAt, "yyyy-MM-dd")}</p>
          <p>{activePost.content}</p>
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-white text-black"
          >
            記事一覧へ戻る
          </button>
        </section>
      </div>
    </article>
  );
};

export default DetailPost;
