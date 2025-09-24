import { useEffect, useRef, useState } from "react";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, useAnimation } from "motion/react";
type Icon = "play" | "pause" | "advance" | "rewind" | null;
type Props = {
  isPlaying: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  handlePlaying: () => void;
  handleAdvance: (jumpSec: number) => void;
  handleRewind: (jumpSec: number) => void;
};

/**
 *@returns ワンタップで再生⇔停止の切り替え、左側をダブルタップで巻き戻し、右側をダブルタップで早送りできるコンポーネント
 *@param isPlaying:再生中か否かの真偽値
 *@param handleNext:曲の切り替えを行う関数
 *@param handlePrev:曲の切り替えを行う関数
 *@param handlePlaying:再生⇔停止の切り替えを行う関数
 *@param handleAdvance:早送り関数
 *@param handleRewind:巻き戻し関数
 */
const TapController = ({
  isPlaying,
  handleNext,
  handlePrev,
  handlePlaying,
  handleAdvance,
  handleRewind,
}: Props) => {
  //アイコンを表示する否か
  const [isShow, setIsSwow] = useState<boolean>(false);

  // アイコンの種類
  const [icon, setIcon] = useState<Icon>(null);

  // アイコンを表示
  const renderIcon = (icon: Icon) => {
    switch (icon) {
      case "play":
        return <IoPlaySharp className="size-[10vh] text-deathWhite/80" />; //再生
      case "pause":
        return <IoPauseSharp className="size-[10vh] text-deathWhite/80" />; //停止
      case "advance":
        return <TbRewindForward10 className="size-[10vh] text-deathWhite/80" />; //+10秒
      case "rewind":
        return (
          <TbRewindBackward10 className="size-[10vh] text-deathWhite/80" /> //-10秒
        );
      default:
        return <></>;
    }
  };

  // 一定時間経過後にアイコンを自動非表示
  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        setIsSwow(false);
      }, 750);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isShow]);

  const animation = useAnimation(); //motion.divのanimateに変数を経由してアニメーションを渡すことで値(状態)を動的に切り替える。
  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0.5, 1.5],
      opacity: [0, 0.1, 0],
      transition: { duration: 0.4 },
    },
  };
  /**
   *波紋アニメーションを実行する関数。タップ領域をタップまたはダブルタップした際に発火させる。
   */
  const animateRipples = () => {
    animation.set("hidden");
    animation.start("visible");
  };

  /**
   *シングルorダブルクリックの判定猶予時間
   */
  const JUDGEMENT_TIME = 250;

  /**
   *クリックイベントの種類を判定するタイマー
   *(1)1回目のクリックイベントでタイマーを起動し、判定猶予時間の間、待機します。
   *(2-a)判定猶予時間がそのまま経過した場合は、シングルクリックイベントと判定します。
   *(2-b)猶予期間中にクリックイベントが発火した際に、タイマーが既に起動していればダブルクリックイベントと判定できます。
   */
  const judgementTimer = useRef<ReturnType<typeof setTimeout>>(null);
  /**
   *シングルクリック:再生/停止の切り替え、ダブルクリック:早送り・巻き戻し を行う関数
   *@param handleAction:早送り：handleAdvance,巻き戻し：handleRewind を渡す
   *@param jumpSec:早送り・巻き戻しを行いたい秒数
   */
  const handleClick = (
    handleAction?: (jumpSec: number) => void,
    jumpSec: number = 10,
    icon?: Icon
  ) => {
    if (!judgementTimer.current) {
      //==1回目のクリック==
      judgementTimer.current = setTimeout(() => {
        // シングルクリックの処理
        handlePlaying();
        // 波紋アニメーション
        animateRipples();
        // アイコン切り替え
        setIcon(isPlaying ? "pause" : "play");
        setIsSwow((isShow) => !isShow);
        // タイマーリセット
        judgementTimer.current = null;
      }, JUDGEMENT_TIME);
    } else {
      //==2回目のクリック==
      // ダブルクリックの処理
      if (handleAction) handleAction(jumpSec);
      // アイコン切り替え
      if (icon) {
        setIcon(icon);
        setIsSwow(true);
      }
      // 波紋アニメーション
      animateRipples();
      // タイマーリセット
      clearTimeout(judgementTimer.current);
      judgementTimer.current = null;
    }
  };

  return (
    <div className="absolute w-full h-full flex overflow-hidden">
      {/* アイコン */}
      {isShow && (
        <div className="absolute top-1/2 left-1/2 -translate-1/2 pointer-events-none">
          {renderIcon(icon)}
        </div>
      )}
      {/* 波紋 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-1/2 w-1/2 h-1/2 bg-deathWhite rounded-full"
        variants={variants}
        initial="hidden"
        animate={animation}
      />

      {/* 左側のタップ領域*/}
      <div
        onClick={() => handleClick(handleRewind, 10, "rewind")} //シングルクリックで再生/停止の切り替え、ダブルクリックで10秒早送り
        className="w-1/2 h-full relative z-[1] cursor-pointer"
      >
        {/* 次の曲に進むボタン(>) */}
        <IoIosArrowBack
          onClick={handleNext}
          className="absolute top-1/2 left-[5%] z-[2] -translate-y-1/2 size-[3vw]"
        />
      </div>
      {/* 右側のタップ領域 */}
      <div
        onClick={() => handleClick(handleAdvance, 10, "advance")} //シングルクリックで再生/停止の切り替え、ダブルクリックで10秒巻き戻し
        className="w-1/2 h-full relative z-[1] cursor-pointer"
      >
        {/* 前の曲に進むボタン(<) */}
        <IoIosArrowForward
          onClick={handlePrev}
          className="absolute top-1/2 right-[5%] z-[2] -translate-y-1/2 size-[3vw]"
        />
      </div>
    </div>
  );
};

export default TapController;
