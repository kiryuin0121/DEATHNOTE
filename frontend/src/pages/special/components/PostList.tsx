import { useEffect, useState } from "react";
import { SpecialPost } from "../../../types/post";
import { motion } from "motion/react";
type Props = {
  posts: SpecialPost[];
  setActivePost: React.Dispatch<React.SetStateAction<SpecialPost | null>>;
};

const PostList = ({ posts, setActivePost }: Props) => {
  // 上側の余白(上にあるテキストと重なるのを防止する)
  const [pt, setPt] = useState(0);
  // 上側の余白を計算
  useEffect(() => {
    const el = document.querySelector<HTMLDivElement>(".intro");
    if (el) {
      setPt(el.offsetHeight * 0.75);
    }
  }, []);

  return (
    <ul
      style={{ paddingTop: pt }}
      className="w-[80vw] mx-auto grid grid-cols-2 gap-8"
    >
      {posts.map((post, idx) => (
        <li key={post.id}>
          <article
            className="w-full flex justify-start items-center gap-x-4 cursor-pointer px-3 py-4 bg-[#cfcfcf] rounded-xs text-deathBlack border border-deathLightGray transition-all duration-400 hover:brightness-90"
            onClick={() => setActivePost(post)}
          >
            <figure>
              <img
                src={post.thumbnail}
                alt={post.title}
                className="h-16 aspect-video"
              />
            </figure>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
            >
              <span className="border rounded-full inline-block w-6 h-6 leading-6 text-center mr-2 ">
                {idx + 1}
              </span>
              <span className="text-base">{post.title}</span>
            </motion.h2>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
