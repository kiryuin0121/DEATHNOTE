import { useEffect, useState } from "react";
import { motion } from "motion/react";
//💻TODO:chromeのカクつき何とかする。なんとかしてcpu負荷減らす💻
const Opening = () => {
  // オープニングを再生中か
  const [isOpening, setIsOpening] = useState<boolean>(true);
  // 表示している文字
  const [text, setText] = useState<string>("");
  // 表示している文字のスタイル
  const [style, setStyle] = useState<string>("");
  // motionで連続的にアニメーションさせたいスタイル
  const [scale, setScale] = useState<number | number[]>(1);
  const [duration, setDuration] = useState<number>(0);
  // 夜神月(リューク文字)をレンダリングするか否か
  const [isRenderFlash1, setIsRenderFlash1] = useState<boolean>(false);
  // 歯車?とリンゴを,,
  const [isRenderFlash2, setIsRenderFlash2] = useState<boolean>(false);
  // えるのマークを,,
  const [isRenderImg, setIsRenderImg] = useState<boolean>(false);
  const WORDS = [
    [
      { text: "", style: "", displayTime: 750 },
      {
        text: "the human whose name is",
        style: "text-[3rem]",
        displayTime: 45,
      },
      {
        text: "",
        style: "",
        displayTime: 30,
      },
      {
        text: "written in this note",
        style: "text-[3rem]",
        displayTime: 45,
      },
      {
        text: "",
        style: "text-[3rem]",
        displayTime: 30,
      },
      {
        text: "shall die. ",
        style: "text-[3rem]",
        displayTime: 550,
      },
      {
        text: "shall die.",
        style: "text-[5rem] ",
        displayTime: 50,
        scale: 1.5,
        duration: 0.025,
      },
      {
        text: "",
        style: "",
        displayTime: 500,
      },
    ], //2000
    [
      { text: "D", style: "text-[6rem]", displayTime: 30 },
      { text: "E", style: "text-[6rem]", displayTime: 30 },
      { text: "A", style: "text-[6rem]", displayTime: 30 },
      { text: "T", style: "text-[6rem]", displayTime: 30 },
      { text: "H", style: "text-[6rem]", displayTime: 30 },
      { text: "", style: "", displayTime: 30 },
      { text: "N", style: "text-[6rem]", displayTime: 30 },
      { text: "O", style: "text-[6rem]", displayTime: 30 },
      { text: "T", style: "text-[6rem]", displayTime: 30 },
      { text: "E", style: "text-[6rem]", displayTime: 30 },
      { text: "", style: "", displayTime: 500 },
    ], //2800
    [
      {
        text: "DEATH NOTE",
        style: "text-[5rem]",
        scale: [1, 1.1],
        displayTime: 1200,
        duration: 1.2,
      },
      {
        text: "",
        style: "",
        displayTime: 75,
      }, //4000
      {
        text: "DEATH NOTE",
        style: "text-[6.5rem]",
        displayTime: 1500,
      }, //5000かな？
    ],
  ];
  /**
   *@params ms:待機する秒数(ミリ)
   */
  const waitForDisplay = (ms: number): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  useEffect(() => {
    // オープニング中はスクロールを禁止 & 背面の要素を見えない状態にする
    const bodyEl = document.querySelector("body");
    if (bodyEl) {
      bodyEl.style.overflowY = "hidden";
      bodyEl.classList.remove("loaded");
    }

    //文章→単語の2重ループを回しながら文字を表示させていく。
    (async () => {
      // 文章(配列[]を1要素とする配列)
      for (const word of WORDS) {
        // 単語(オブジェク{}を1要素とする配列)
        for (const char of word) {
          setStyle(char.style);
          setScale(char.scale ?? 1);
          setDuration(char.duration ?? 0);
          setText(char.text);
          await waitForDisplay(char.displayTime); // 各文字を表示する時間
        }
      }
      // 全てのテキストアニメーションが完了した後の処理
      if (bodyEl) {
        bodyEl.style.overflowY = "visible";
        bodyEl.classList.add("loaded");
      }
      setIsOpening(false);
    })();

    // 時間差で画像を表示する。(リューク文字→りんごと歯車→えるのマーク)
    const visibleTimer1 = setTimeout(() => {
      setIsRenderFlash1(true);
    }, 1500);
    const visibleTimer2 = setTimeout(() => {
      setIsRenderFlash1(false);
      setIsRenderImg(true);
    }, 2800);
    const visibleTimer3 = setTimeout(() => {
      setIsRenderImg(false);
      setIsRenderFlash2(true);
    }, 4050);
    // clean up
    return () => {
      setIsRenderFlash2(false);
      clearTimeout(visibleTimer1);
      clearTimeout(visibleTimer2);
      clearTimeout(visibleTimer3);
    };
  }, []);

  return (
    <>
      {isOpening && (
        <div className="fixed top-0 left-0 z-30 h-screen w-screen bg-black ">
          {/* 夜神月 */}
          {isRenderFlash1 && (
            <div>
              <motion.img
                src="/images/top/flash.jpg"
                alt=""
                className="absolute top-1/2 left-1/2 -translate-1/2 w-screen z-[21]"
                animate={{
                  filter: [
                    "brightness(0%)",
                    "brightness(10%)",
                    "brightness(0%)",
                  ],
                  opacity: [0, 0.9, 0],
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          )}
          {/* りんご&歯車 */}
          {isRenderImg && (
            <div>
              <motion.img
                src="/images/global/ring.png"
                alt=""
                className="absolute top-1/2 left-1/2 -translate-1/2 w-[50vw] z-[21]"
                animate={{
                  width: ["5vw", "10vw", "25vw", "75vw", "150vw", "200vw"],
                  filter: ["brightness(100%)", "brightness(200%)"],
                  opacity: ["0%", "25%", "75%", "75%", "25%", "0%"],
                }}
                transition={{ duration: 0.3 }} //2600ms-
              />
              <motion.img
                src="/images/top/apple.gif"
                alt=""
                className="absolute top-1/2 left-1/2 -translate-1/2 w-[20vw] z-[22]"
                initial={{ rotateZ: 10, y: "-0.5vh" }}
                animate={{
                  rotateZ: 15,
                  y: "0.5vh",
                  filter: [
                    "brightness(25%)",
                    "brightness(50%)",
                    "brightness(200%)",
                    "brightness(75%)",
                  ],
                }}
                transition={{ duration: 0.4 }} //2600ms-3000ms
              />
            </div>
          )}
          {/* 文字 */}
          <div className="absolute top-1/2 -translate-y-1/2 z-[22] w-full h-[content] flex justify-center items-center">
            <motion.p
              key={text}
              animate={{ scale }}
              transition={{ duration }}
              className={`font-deathNote text-silver-lg ${style}`}
              exit={{ scaleZ: "200%", transition: { duration: 0.01 } }}
            >
              {text}
            </motion.p>
          </div>
          {/* えるのマーク */}
          {isRenderFlash2 && (
            <div>
              <motion.img
                src="/images/top/flash2.jpg"
                alt=""
                className="absolute top-1/2 left-1/2 -translate-1/2 h-full w-0 z-[23]"
                animate={{
                  opacity: [0.1, 0.9],
                  width: ["100%", "0%", "100%"],
                  filter: ["brightness(45%)", "brightness(90%)"],
                }}
                transition={{ delay: 1.5, duration: 0.05 }} //ここ
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Opening;
