import { format } from "date-fns";
import { NewsPost } from "../../../types/post";

type Props = {
  posts: NewsPost[];
  setActivePost: React.Dispatch<React.SetStateAction<NewsPost | null>>;
};
const PostList = ({ posts, setActivePost }: Props) => {
  const handleClick = (post: NewsPost) => {
    setActivePost(post);
    window.history.pushState(null, "", `/news/${post.id}`);
  };
  return (
    <>
      <ul className="w-[90%] border-b-1 border-deathDarkGray">
        {posts.map((post) => {
          return (
            <li key={post.id} onClick={() => handleClick(post)}>
              <article className="cursor-pointer border-t-1 border-deathDarkGray px-4 py-5 flex justify-start items-center gap-x-8">
                {/* Dateオブジェクトを「年-月-日」のフォーマットに変換 */}
                <p>{format(post.createdAt, "yyyy年MM月dd日")}</p>
                <h2>{post.title}</h2>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostList;
