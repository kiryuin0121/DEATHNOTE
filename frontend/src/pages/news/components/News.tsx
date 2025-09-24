import { useEffect, useState } from "react";
import axios from "axios";
import { NewsPost } from "../../../types/post";
import PostList from "./PostList";
import PagenationButton from "./pagenationButton";
import DetailPost from "./DetailPost";

const News = () => {
  //現在のページ番号
  const [page, setPage] = useState<number>(1);
  // 取得してきた記事一覧配列
  const [posts, setPosts] = useState<NewsPost[]>([]);
  // ページの総数
  const [totalPage, setTotalPage] = useState<number>(NaN);
  // 記事の総数
  const [totalPost, setTotalPost] = useState<number>(NaN);
  // 1ページあたりの記事件数
  const LIMIT = 6;
  // 詳細を表示する記事
  const [activePost, setActivePost] = useState<NewsPost | null>(null);
  // 外部から記事を直接参照しにきた場合の処理
  useEffect(() => {
    // ローディング画面を表示させるため意図的に遅延を設ける。
    const timer = setTimeout(() => {
      // urlに表示したい投稿のidをクエリパラメータとして含ませているのでそれを取得する。
      const postId = new URL(
        decodeURIComponent(document.location.href)
      ).searchParams.get("id");
      if (postId) {
        // expressサーバーからpostを取得し、詳細画面を表示する。
        (async () => {
          const res = await axios.get(
            `http://localhost:3000/api/news/${postId}`
          );
          setActivePost(res.data.post);
        })();
      }
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // page変更時に記事一覧を再取得
  useEffect(() => {
    (async () => {
      const res = await axios.get(" http://localhost:3000/api/news", {
        params: { page, limit: LIMIT },
      });
      setPosts(res.data.posts);
      setTotalPage(res.data.totalPage);
      setTotalPost(res.data.totalPost);
    })();
  }, [page]);
  return (
    <div className="w-full h-full mx-auto flex flex-col gap-y-[5vh] justify-center items-center">
      <PostList posts={posts} setActivePost={setActivePost} />
      <div>
        <p className="text-center">
          {page * LIMIT}/{totalPost}件
        </p>
        <div className="flex justify-between items-center gap-x-8">
          {Array.from({ length: totalPage }).map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <PagenationButton
                label={pageNum}
                onClick={() => setPage(pageNum)}
                isActive={page === pageNum}
              />
            );
          })}
        </div>
      </div>
      {activePost && (
        <DetailPost activePost={activePost} setActivePost={setActivePost} />
      )}
    </div>
  );
};

export default News;
