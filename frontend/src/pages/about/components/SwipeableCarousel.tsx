import React, { useState } from "react";
import { Image } from "../../../types/characterCast";
import { motion, useMotionValue, useTransform } from "motion/react";

type Props = {
  images: Image[];
};
/**
 *@returns 画像をスワイプすることで切り替えられる
 *@params images:キャラクター一人分の画像集
 */
const SwipeableCarousel = ({ images }: Props) => {
  const [currentNo, setCurrentNo] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);

  const handleDragEnd = () => {
    if (x.get() > 50) {
      setDirection("right");
    } else if (x.get() < -50) {
      setDirection("left");
    } else {
      x.set(0); // 閾値以内なら戻す
    }
  };

  const handleAnimationComplete = () => {
    if (direction) {
      setCurrentNo((prev) => (prev + 1) % images.length);
      x.set(0); // 次のカードは中央に戻す
      setDirection(null);
    }
  };

  const currentImage = images[currentNo];
  const nextImage = images[(currentNo + 1) % images.length];

  return (
    <motion.figure
      className="relative w-[90%] h-[90%] flex justify-center items-center"
      initial={{ opacity: 0, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* 次のカード（控え） */}
      <img
        src={nextImage.url}
        className="absolute w-2/3  origin-bottom shadow-md z-[1] rotate-3 brightness-90"
      />

      {/* 一番上のカード（スワイプ可能） */}
      <motion.img
        key={currentImage.id}
        src={currentImage.url}
        className="absolute w-2/3 origin-bottom z-[2] cursor-grab active:cursor-grabbing"
        style={{ x, rotate }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={
          direction === "right"
            ? { x: 150, opacity: 0, rotate: 20 }
            : direction === "left"
            ? { x: -150, opacity: 0, rotate: -20 }
            : { x: 0, opacity: 1, rotate: 0 }
        }
        transition={{ duration: 0.1 }}
        onAnimationComplete={handleAnimationComplete}
      />
    </motion.figure>
  );
};

export default SwipeableCarousel;
