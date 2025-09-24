import { useEffect, useState } from "react";
import { AnimatePresence, delay, motion } from "motion/react";
import { Rule } from "../types/rule";

// デスノートのルールを格納した配列
const RULES: Rule[] = [
  {
    en: "The human whose name is written in this note shall die.",
    jp: "このノートに名前を書かれた人間は死ぬ。",
  },
  {
    en: "This note will not take effect unless the writer has the person's face in their mind when writing his/her name.",
    jp: "書く人間の顔が頭に入っていないと効果はない。ゆえに同姓同名の人物にいっぺんに効果は得られない。",
  },
  {
    en: "If the cause of death is written within 40 seconds of writing the person's name, it will happen.",
    jp: "名前の後に人間界単位で40秒以内に死因を書くと、その通りになる。",
  },
  {
    en: "If the cause of death is not specified, the person will simply die of a heart attack.",
    jp: "死因を書かなければ全てが心臓麻痺となる。",
  },
  {
    en: "After writing the cause of death, details of the death should be written in the next 6 minutes and 40 seconds.",
    jp: "死因を書くとさらに6分40秒、詳しい死の状況を記載する時間が与えられる。",
  },
  {
    en: "This note shall become the property of the human world once it touches the ground of (arrives in) the human world.",
    jp: "このノートは人間界の地についた時点から人間界のものとなる。",
  },
  {
    en: "The owner of the note can recognize the image and voice of its original owner, i.e., a god of death.",
    jp: "所有者はノートの持ち主である死神の姿や声を認知することができる。",
  },
  {
    en: "The human who uses this note can neither go to Heaven nor Hell.",
    jp: "このノートを使った人間は天国にも地獄にも行けない。",
  },
  {
    en: "The human who touches the DEATH NOTE can recognize the image and voice of its original owner, a god of death, even if the human is not the owner of the note.",
    jp: "デスノートに触った人間には、そのノートの所有者でなくとも、元持ち主の死神の姿や声が認知できる。",
  },
  {
    en: "The individuals who lose the ownership of the DEATH NOTE will also lose their memory of the usage of DEATH NOTE. This does not mean that they will lose all the memory from the day they owned it to the day they lose possession, but means they will only lose the memory involving the DEATH NOTE.",
    jp: "デスノートの所有権を放棄したら、デスノートにまつわる記憶を失う。",
  },
  {
    en: "Even without obtaining ownership, memories will return just by touching the DEATH NOTE.",
    jp: "デスノートの一部にでも触れれば、失われたノートにまつわる記憶はすべてよみがえる。",
  },
  {
    en: "The DEATH NOTE can only operate within 23 days (in the human calendar). This is called the 23-day rule.",
    jp: "デスノートで操れる死の時間は、人間界単位で23日以内である。",
  },
  {
    en: "Once the victim's name has been written, the individual's death can never be avoided.",
    jp: "デスノートに一度書かれた人間の死は変更することができない。",
  },
];

const Loading = () => {
  // ローディングの進行状況
  const [progress, setProgress] = useState<number>(0);
  // ローディング画面を表示させるか否か
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // デスノートのルールを無作為に一つ取得
  const [rule] = useState<Rule>(
    () => RULES[Math.floor(Math.random() * (RULES.length + 1))]
  );
  useEffect(() => {
    // プログレスバーの更新タイマー
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    // ローディング終了のタイマー
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  // ローディング中はスクロールを禁止 & 背面の要素を見えない状態にする
  useEffect(() => {
    const bodyEl = document.querySelector("body");
    if (bodyEl) {
      bodyEl.style.overflowY = isLoading ? "hidden" : "visible";
      isLoading
        ? bodyEl.classList.remove("loaded")
        : bodyEl.classList.add("loaded");
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 z-30 w-screen h-screen py-16 bg-[url(/images/global/bg.jpg)] text-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[90%] h-full container mx-auto border-2 border-neutral-400 shadow-[0_0_30px_5px_rgba(163,163,163,0.4)] relative flex flex-col justify-start items-center gap-y-12">
            {/* 骸骨 */}
            <div>
              <img
                src="/images/global/skull.png"
                alt="skull"
                className="absolute top-0 left-[50%] -translate-y-[50%] -translate-x-[50%] h-28"
              />
            </div>
            {/* タイトル */}
            <div className="text-silver">
              <p className="font-deathNote text-[3rem] text-center">
                DEATH NOTE
              </p>
              <p className="font-deathNote text-3xl text-center">
                How to use it
              </p>
            </div>
            {/* ルール */}
            <div className="max-w-[80%]">
              <p className="font-deathNote text-[1.75rem] mb-8 line-clamp-3">
                {rule.en}
              </p>
              <motion.p
                className="max-w-[70%] mx-auto font-notoSerifJp text-[1.25rem] text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {rule.jp}
              </motion.p>
            </div>
            {/* 四つ角にある花の装飾 */}
            <div>
              <img
                src="/images/global/corner-flower.png"
                alt="corner-flower-top-left"
                className="w-20 absolute top-4 left-4 "
              />
            </div>
            <div>
              <img
                src="/images/global/corner-flower.png"
                alt="corner-flower-top-left"
                className="w-20 absolute top-4 right-4 rotate-90"
              />
            </div>
            <div>
              <img
                src="/images/global/corner-flower.png"
                alt="corner-flower-top-left"
                className="w-20 absolute bottom-4 right-4 rotate-180"
              />
            </div>
            <div>
              <img
                src="/images/global/corner-flower.png"
                alt="corner-flower-top-left"
                className="w-20 absolute bottom-4 left-4 rotate-270"
              />
            </div>
            {/* プログレスバー */}
            <div className="fixed bottom-0 left-0 w-full">
              <div className="w-full h-4 bg-black overflow-hidden">
                <motion.div
                  className="h-full  bg-neutral-400"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
