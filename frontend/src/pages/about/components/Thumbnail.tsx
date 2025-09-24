import TapController from "./TapController";
type Props = {
  src: string;
  alt: string;
  isPlaying: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  handlePlaying: () => void;
  handleAdvance: (jumpSec: number) => void;
  handleRewind: (jumpSec: number) => void;
};
/**
 *@param src:曲のカバー画像のパス
 *@param alt：曲のタイトル
 *@param isPlaying:再生中か否かの真偽地
 *@param handleNext:曲の切り替えを行う関数
 *@param handlePrev:曲の切り替えを行う関数
 *@param handlePlaying:再生⇔停止の切り替えを行う関数
 *@param handleAdvance:早送り関数
 *@param handleRewind:巻き戻し関数
 */
const Thumbnail = ({
  src,
  alt,
  isPlaying,
  handleNext,
  handlePrev,
  handlePlaying,
  handleAdvance,
  handleRewind,
}: Props) => {
  return (
    <div className="w-9/20 h-[80vh] px-[5%]  flex justify-center items-center bg-black/90 relative">
      <img
        src={src}
        alt={alt}
        className="w-full aspect-square border border-deathBlack"
      />
      <TapController
        isPlaying={isPlaying}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handlePlaying={handlePlaying}
        handleAdvance={handleAdvance}
        handleRewind={handleRewind}
      />
    </div>
  );
};

export default Thumbnail;
