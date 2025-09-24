import { AnimatePresence, motion } from "motion/react";
type Props = {
  isOpen: boolean;
};
const Menu = ({ isOpen }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="h-screen w-screen flex"
          initial={{
            clipPath: "circle(0% at calc(100% - 4rem) 4rem)",
          }}
          animate={{
            clipPath: "circle(150% at calc(100% - 4rem) 4rem)",
          }}
          exit={{
            clipPath: "circle(0% at calc(100% - 4rem) 4rem)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="w-[70vw] h-screen flex justify-center items-center bg-stone-200 ">
            <ul className="flex flex-col gap-y-6 text-[2rem] text-deathBlack font-deathNote tracking-wider">
              <li className="text-[4rem] mb-2">DEATH NOTE</li>
              <motion.li
                className="transition-all  duration-200 hover:font-[500] hover:text-red-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <a href="/">
                  <span className="text-2xl font-[700]  mr-4">o</span>
                  TOP
                </a>
              </motion.li>
              <motion.li
                className="transition-all  duration-200 hover:font-[500] hover:text-red-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <a href="/about">
                  <span className="text-2xl font-[700]  mr-4">o</span>
                  ABOUT THE MOVIE
                </a>
              </motion.li>
              <motion.li
                className="transition-all  duration-200 hover:font-[500] hover:text-red-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                <a href="/special" target="_new">
                  <span className="text-2xl font-[700]  mr-4">o</span>
                  SPECIAL
                </a>
              </motion.li>

              <motion.li
                className="transition-all  duration-200 hover:font-[500] hover:text-red-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
              >
                <a href="/news" target="_new">
                  <span className="text-2xl font-[700]  mr-4">o</span>
                  NEWS
                </a>
              </motion.li>
            </ul>
          </div>
          {/* 右側の黒いエリア */}
          <div className="w-[30vw] h-screen bg-deathBlack bg-[url(/images/global/bg.jpg)] relative overflow-hidden">
            {/* 左上の円 */}
            <motion.div
              className="absolute left-[25%] top-[25%] w-[150vw] -translate-1/2 aspect-square rounded-full border-2 border-deathWhite"
              animate={{ scale: [0, 1] }}
              transition={{ duration: 7 }}
            />
            {/* 右下の円 */}
            <motion.div
              className="absolute left-[25%] top-[25%] w-[125vw] -translate-1/2 aspect-square rounded-full border-2 border-deathWhite"
              animate={{ scale: [1, 0], opacity: [1, 0] }}
              transition={{ duration: 3.5 }}
            />
            {/* 右上の円 */}
            <motion.div
              className="absolute right-[25%] top-[25%] w-[150vw] aspect-square translate-x-1/2 -translate-y-1/2 rounded-full border border-deathWhite"
              animate={{ scale: [0, 1] }}
              transition={{ duration: 6, delay: 3.5 }}
            />
            {/* 左下の円 */}
            <motion.div
              className="absolute right-[25%] top-[25%] w-[125vw] aspect-square translate-x-1/2 -translate-y-1/2 rounded-full border border-deathWhite"
              animate={{ scale: [1, 0], opacity: [1, 0] }}
              transition={{ duration: 3.5, delay: 3 }}
            />
            {/* 右→左の棒 */}
            <motion.div
              className="absolute top-0 right-0 w-2 h-full bg-neutral-400 "
              initial={{ x: "5vw" }}
              animate={{ x: "-30vw" }}
              transition={{ duration: 3, delay: 0 }}
            />
            {/* 下→上の棒 */}
            <motion.div
              className="absolute bottom-0 right-0 w-full h-2 bg-neutral-400 "
              initial={{ y: "5vw" }}
              animate={{ y: "-105vw" }}
              transition={{ duration: 7, delay: 0 }}
            />

            {/* 左→右の棒 */}
            <motion.div
              className="absolute top-0 left-0 w-2 h-full bg-neutral-400"
              initial={{ x: "-5vw" }}
              animate={{ x: "35vw" }}
              transition={{ duration: 3, delay: 3 }}
            />
            {/* 上→下の棒 */}
            <motion.div
              className="absolute top-0 left-0 w-full h-2 bg-neutral-400"
              initial={{ y: "-5vw" }}
              animate={{ y: "105vw" }}
              transition={{ duration: 7, delay: 3 }}
            />

            {/* 右→左の棒 */}
            <motion.div
              className="absolute top-0 right-0 w-px h-full bg-deathWhite"
              initial={{ x: "5vw" }}
              animate={{ x: "-25vw" }}
              transition={{ duration: 2.5, delay: 3 }}
            />
            {/* 下→上の棒 */}
            <motion.div
              className="absolute bottom-0 right-0 w-full h-px bg-deathWhite"
              initial={{ y: "5vw" }}
              animate={{ y: "-105vw" }}
              transition={{ duration: 7, delay: 3 }}
            />

            {/* 中央の棒 */}
            <motion.div
              className="absolute left-0 bottom-[20%] w-full h-px bg-deathWhite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 7 }}
            />
            {/* 文字 */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-y-1/2  text-3xl writing-vertical tracking-wider text-deathWhite"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 4.5 }}
            >
              デスノート
            </motion.div>
            <motion.div
              className="text-sm absolute left-[30%] bottom-[20%] text-deathWhite"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 3, duration: 0.1 }}
            >
              日常に退屈するすべての人々へ、
            </motion.div>
            <motion.div
              className="text-sm absolute left-[30%] bottom-[20%] text-deathWhite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
            >
              禁断のページが今、開かれる
            </motion.div>
            <motion.p
              className="text-[4rem] whitespace-nowrap font-bold writing-vertical absolute top-0 left-1/2 text-deathWhite  "
              initial={{ y: "100vh", opacity: 1 }}
              animate={{ y: "-50%", opacity: 0 }}
              transition={{ duration: 3 }}
            >
              名前を書かれた人間は死ぬ
            </motion.p>

            <motion.p
              className="text-[2rem] whitespace-nowrap font-semibold writing-vertical absolute bottom-0 left-[20%] text-deathWhite  "
              initial={{ y: "-100vh", opacity: 0.5 }}
              animate={{ y: "25%", opacity: 0 }}
              transition={{ duration: 3 }}
            >
              頭脳戦を制すものが新世界を制す
            </motion.p>
            <motion.p
              className="text-[2rem] whitespace-nowrap font-semibold writing-vertical absolute bottom-0 right-[20%] text-deathWhite  "
              initial={{ y: "-100vh", opacity: 0.5 }}
              animate={{ y: "25%", opacity: 0 }}
              transition={{ duration: 3 }}
            >
              一人の天才がそれを手にしてしまった
            </motion.p>
            <motion.p
              className="text-[3rem] whitespace-nowrap font-bold  absolute top-[20%] right-0 text-deathWhite  "
              initial={{ x: "-25vw", opacity: 1 }}
              animate={{ x: 0, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              捕まえてみろ
            </motion.p>
            <motion.p
              className="text-[3rem] whitespace-nowrap font-bold absolute bottom-[30%] left-0 text-deathWhite  "
              initial={{ x: "25vw", opacity: 1 }}
              animate={{ x: 0, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              殺してみろ
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
