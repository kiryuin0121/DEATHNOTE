import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  src: string;
  height: MotionValue<string>;
};
/**
 *@returns スクロールに応じて横にずれながら高さが伸縮する背景画像
 *@param src 背景に設定したい画像のパス
 *@param height 背景画像の縦の長さ(可変長)
 */
const ParallaxBg = ({ src, height }: Props) => {
  const targetRef = useRef(null); //motion.figure

  //targetに指定した要素がスクロールされた量
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  });

  // スクロール量に応じて背景画像のbackground-positionをx軸方向にずらす。
  const backgroundPosition = useTransform(scrollY, (scrollY) => {
    //起点(画面サイズに応じて変更)
    const base = window.innerWidth < 1024 ? 25 : 50;
    // 変位
    const displacement = scrollY / 35;

    return `calc(${base}% + ${displacement}px) center`;
  });

  return (
    <motion.figure
      ref={targetRef}
      className="mx-auto w-full  lg:bg-center bg-fixed bg-no-repeat bg-cover md:[background-size:100%_auto] will-change-[background-position,height] z-0"
      style={{
        backgroundPosition,
        backgroundImage: `url(${src})`,
        height,
      }}
    />
  );
};

export default ParallaxBg;
