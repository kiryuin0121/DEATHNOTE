import { useEffect, useState } from "react";
import axios from "axios";
import { SpecialPost } from "../../../types/post";
import PostList from "./PostList";
import DetailPost from "./DetailPost";
import { AnimatePresence } from "motion/react";
import PageTransition from "./PageTransition";
const Special = () => {
  // 記事一覧情報
  const [posts, setPosts] = useState<SpecialPost[]>([]);
  // 詳細を表示する記事
  const [activePost, setActivePost] = useState<SpecialPost | null>(null);

  // 記事一覧情報を取得
  useEffect(() => {
    (async () => {
      const res = await axios.get(" http://localhost:3000/api/specials");
      setPosts(res.data.posts);
    })();
  }, []);
  return (
    <>
      <PostList posts={posts} setActivePost={setActivePost} />
      <AnimatePresence>
        {activePost && (
          <>
            <DetailPost post={activePost} setActivePost={setActivePost} />
            <PageTransition />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Special;
