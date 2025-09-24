import { motion } from "motion/react";
/**
 *@returns ページ遷移アニメーション
 */
const PageTransition = () => {
  return (
    <>
      {/* 行きのあにめーしょん。ゆきめーしょん。 */}
      <motion.div
        className="fixed top-0 left-[100%] z-[2] w-screen h-screen bg-[#cfcfcf]"
        animate={{ x: ["-200%", "-100%", 0] }}
        transition={{ duration: 2 }}
      ></motion.div>
      {/* 帰り,, */}
      <motion.div
        className="fixed top-0 left-0 z-[2] w-screen h-screen bg-deathBlack"
        initial={{ x: "+100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[3] w-screen h-screen bg-[#cfcfcf]"
        initial={{ x: "100%" }}
        exit={{ x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      ></motion.div>
    </>
  );
};

export default PageTransition;
