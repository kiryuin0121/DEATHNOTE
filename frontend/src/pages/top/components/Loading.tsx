import { AnimatePresence, motion } from "motion/react";
/**
 *@returns 予告動画のローディング画面
 */
const Loading = () => {
  return (
    <div className="absolute top-0 left-0 z-[1] w-full h-full">
      <img
        src="/images/top/noise.gif"
        alt="砂嵐"
        className="absolute top-0 left-0 z-[1] w-full h-full"
      />
      <motion.img
        src="/images/top/flash2.jpg"
        alt="Lのアイコン"
        className="absolute top-0 left-0 z-[2] w-full h-full opacity-70"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.07 }}
      />
    </div>
  );
};

export default Loading;
