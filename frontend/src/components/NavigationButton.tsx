import { motion, useAnimation, useScroll, useTransform } from "motion/react";

type Props = {
  handleMenu: () => void;
};
/**
 *@returns スクロールに応じて回転、タップすると1回転
 *@params handleOpen メニュー開閉関数
 */
const NavigationButton = ({ handleMenu }: Props) => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const rotateZ = useTransform(scrollYProgress, (scrollYProgress) => {
    return scrollYProgress * 100;
  });
  const animation = useAnimation();
  const variants = {
    tap: {
      rotateZ: 360,
      transition: { duraiton: 0.2 },
    },
  };
  const handleRotate = () => {
    animation.start("tap");
  };

  return (
    <button
      className="fixed top-4 right-4 z-[21] cursor-pointer"
      onClick={() => {
        handleRotate();
        handleMenu();
      }}
    >
      <div className="relative">
        <img
          src="/images/global/nav-skull.png"
          className="absolute top-1/2 left-1/2 -translate-1/2 h-[38px]"
        />
        <motion.img
          src="/images/global/nav-ring.png"
          className="h-24 w-auto rounded-full opacity-90"
          style={{
            rotateZ,
          }}
          variants={variants}
          animate={animation}
        />
      </div>
    </button>
  );
};

export default NavigationButton;
