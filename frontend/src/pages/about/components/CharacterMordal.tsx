import { useEffect } from "react";
import { Person } from "../../../types/characterCast";
import SwipeableCarousel from "./SwipeableCarousel";
import { motion } from "motion/react";
type Props = {
  person: Person;
  handleClose: () => void;
  handlePrev: () => void;
  handleNext: () => void;
};
/**
 *@returns 登場人物と演者の詳細情報
 *@params handleClose:詳細情報を非表示にするロジック
 *@params handlePrev:一つ前の人物の詳細情報に切り替えるロジック
 *@params handleNext:一つ先の,,
 */
const CharacterMordal = ({
  person,
  handleClose,
  handlePrev,
  handleNext,
}: Props) => {
  const { character, cast } = person;
  const { images } = character;
  // 背面のスクロールを禁止
  useEffect(() => {
    const bodyEl = document.querySelector("body");
    if (bodyEl) {
      bodyEl.style.overflowY = "hidden";
    }
    return () => {
      if (bodyEl) bodyEl.style.overflowY = "visible";
    };
  }, []);

  const variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: [0.97, 1.05],
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="fixed top-0 left-0 z-20 h-screen w-screen bg-deathWhite/10 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-[80vw] h-[80vh]  bg-[url(/images/global/bg.jpg)]  border border-deathDarkGray p-[5%] flex "
      >
        {/* image */}
        <div className="relative w-1/2 h-full">
          <SwipeableCarousel key={character.id} images={images} />
        </div>
        {/* text */}
        {/* wrapper */}
        <div className="w-1/2 h-full overflow-hideen">
          {/* inner */}
          <section className="w-full h-full flex flex-col gap-y-6 overflow-y-scroll no-scrollbar">
            <div className="leading-7 pb-6 border-b border-deathDarkGray">
              <h3 className="mb-4 flex items-center gap-x-1 text-white">
                <div className="text-[28px]">{character.name}</div>
                <div className="text-base">({cast.name})</div>
              </h3>
              <p className="text-[15px] text-neutral-300">
                {character.description}
              </p>
            </div>
            <div>
              {cast.comment && (
                <h4 className="text-center text-lg tracking-wide mb-1 text-white">
                  &lt;Comment&gt;
                </h4>
              )}
              <p className="leading-7 text-[15px] text-neutral-300">
                {cast.comment}
              </p>
            </div>
            <div>
              <h4 className="text-center text-lg tracking-wide mb-1 text-white">
                &lt;Profile&gt;
              </h4>
              <p className="leading-7 text-[15px] text-neutral-300">
                {cast.profile}
              </p>
            </div>
          </section>
        </div>
        {/* 四つ角にある花の装飾 */}
        <div>
          <img
            src="/images/global/corner-flower.png"
            alt="corner-flower-top-left"
            className="w-16 opacity-40 absolute top-4 left-4 "
          />
        </div>
        <div>
          <img
            src="/images/global/corner-flower.png"
            alt="corner-flower-top-left"
            className="w-16 opacity-40 absolute top-4 right-4 rotate-90"
          />
        </div>
        <div>
          <img
            src="/images/global/corner-flower.png"
            alt="corner-flower-top-left"
            className="w-16 opacity-40 absolute bottom-4 right-4 rotate-180"
          />
        </div>
        <div>
          <img
            src="/images/global/corner-flower.png"
            alt="corner-flower-top-left"
            className="w-16 opacity-40 absolute bottom-4 left-4 rotate-270"
          />
        </div>
        <motion.button
          variants={variants}
          initial="initial"
          whileTap="tap"
          whileHover="hover"
          transition={{ ease: "linear" }}
          onClick={handleClose}
          className="absolute top-[5%] right-[2.5%] cursor-pointer font-deathNote text-[2.5rem] text-silver rotate-12 tracking-wide hover:brightness-200   "
        >
          Close
        </motion.button>
        <div className="absolute bottom-[2.5%] left-1/2 z-[3] -translate-x-1/2 flex justify-center items-center gap-x-24 ">
          <motion.button
            variants={variants}
            initial="initial"
            whileTap="tap"
            whileHover="hover"
            transition={{ ease: "linear" }}
            onClick={handlePrev}
            className="cursor-pointer font-deathNote text-[2rem] text-silver tracking-wider hover:brightness-200 "
          >
            Prev
          </motion.button>
          <motion.button
            variants={variants}
            initial="initial"
            whileTap="tap"
            whileHover="hover"
            transition={{ ease: "linear" }}
            onClick={handleNext}
            className="cursor-pointer font-deathNote text-[2rem] text-silver tracking-wider  hover:brightness-200 "
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CharacterMordal;
