import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import BannerSlider from "./BannerSlider";
import ParallaxBg from "./ParallaxBg";
import News from "./News";

//💻TODO:offsetを領域をカスタマイズ💻

/**
 *宣伝＆最新情報
 */
const Information = () => {
  const targetRef = useRef(null); //Newsを囲んでいるdiv

  // スクロールの進捗度(0~1)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });

  /**
   *上半分の背景画像の高さ(スクロールを進めると0vhに近づく)
   */
  const height1 = useTransform(scrollYProgress, (scrollYProgress) => {
    return `${90 - scrollYProgress * 90}vh`;
  });
  /**
   *下半分の,,(スクロールを進めると100vhに近づく)
   */
  const height2 = useTransform(scrollYProgress, (scrollYProgress) => {
    return `${10 + scrollYProgress * 90}vh`;
  });
  return (
    <>
      {/* 宣伝情報 */}
      <div className="w-screen h-[8vh] lg:h-[10vh] mb-[5vh]">
        <BannerSlider />
      </div>
      {/* 最新情報 */}
      <div className="w-[90vw] mx-auto h-screen relative">
        {/* 背景画像 */}
        <div className="w-full h-full absolute top-0 z-0">
          <ParallaxBg src="/images/top/bg1.jpg" height={height1} />
          <ParallaxBg src="/images/top/bg2.jpg" height={height2} />
        </div>
        {/* ニャース */}
        {/* スクロールを監視する用のdivとnewsを切り離せばnewsはfixedかけれる？ */}
        <div
          ref={targetRef}
          className="w-[90vw] h-screen absolute top-1/2 left-1/2 -translate-1/2 z-[1]"
        >
          <News />
        </div>
      </div>
    </>
  );
};

export default Information;
