import {
  IoPauseSharp,
  IoPlaySharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { Song } from "../../../types/song";
//💻TODO:デフォルトのシークバー、音量の見た目がダサい。💻
type Props = {
  song: Song;
  currentTime: number;
  duration: number;
  volume: number;
  isPlaying: boolean;
  isMuted: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  handlePlaying: () => void;
  handleAdvance: (jumpSec: number) => void;
  handleRewind: (jumpSec: number) => void;
  handleSeek: (seconds: number) => void;
  handleVolume: (volume: number) => void;
  handleMuted: () => void;
};
/**
 *@returns 再生停止、曲の進捗、音量を制御するコンポーネント
 *@param song:一曲分の情報
 *@param currentTime:現在の再生位置(秒)
 *@param duration:曲の総再生時間(秒)
 *@param volume:音量
 *@param isPlaying:再生中か否かの真偽値
 *@param isMuted:ミュート中か否かの真偽値
 *@param handleNext:曲の切り替え
 *@param handlePrev:曲の切り替え
 *@param handlePlaying:再生⇔停止の切り替えを行う関数
 *@param handleAdvance:再生を進める関数
 *@param handleRewind:再生を戻す関数
 *@param handleSeek:再生位置を制御する関数
 *@param handleVolume:音量を制御する関数
 *@param handleMuted:ミュート状態の切り替えを行う関数
 */
const MusicController = ({
  song,
  currentTime,
  duration,
  volume,
  isPlaying,
  isMuted,
  handleNext,
  handlePrev,
  handlePlaying,
  handleAdvance,
  handleRewind,
  handleSeek,
  handleVolume,
  handleMuted,
}: Props) => {
  /**
   *@returns 引数に指定した秒数を「MM:ss」の形式の文字列に変換したもの
   *@param time:整形したい秒数
   */
  const formatTime = (time: number): string => {
    const minute = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    //一桁の場合は10の位を0で埋める
    const MM = minute.toString().padStart(2, "0");
    const ss = seconds.toString().padStart(2, "0");

    return `${MM}:${ss}`;
  };
  return (
    <div className=" bg-black relative border border-deathDarkGray">
      {/* シークバー */}
      <div className="absolute -top-1 w-full h-1 bg-deathDarkGray">
        {/* 現在の再生位置までの白い部分 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-deathWhite"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          step={0.1}
          onChange={(e) => handleSeek(Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      <div className="h-[10vh] w-full py-[1vh] px-[5vw] flex justify-between items-center ">
        <div className="flex items-center justify-center gap-x-[1.5vw]">
          {/* 前の曲に切り替えボタン */}
          <IoPlaySkipBackSharp
            className="size-[3vh] cursor-pointer"
            onClick={handlePrev}
          />
          {/* 10秒戻るボタン */}
          <TbRewindBackward10
            className="size-[4vh] cursor-pointer"
            onClick={() => handleRewind(10)}
          />
          {/* 再生・停止ボタン */}
          {isPlaying ? (
            <IoPauseSharp
              onClick={handlePlaying}
              className="size-[5vh] cursor-pointer"
            />
          ) : (
            <IoPlaySharp
              onClick={handlePlaying}
              className="size-[5vh] cursor-pointer"
            />
          )}

          {/* 10秒進むボタン */}
          <TbRewindForward10
            className="size-[4vh] cursor-pointer"
            onClick={() => handleAdvance(10)}
          />
          {/* 次の曲に切り替えボタン */}
          <IoPlaySkipForwardSharp
            className="size-[3vh] cursor-pointer"
            onClick={handleNext}
          />
          {/* 再生時間 */}
          <p className="text-deathLightGray font-sans">
            {formatTime(currentTime)}/{formatTime(duration)}
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-[1.5vw]">
          {/* ジャケット */}
          <div>
            <img
              src={song.imgUrl}
              alt={song.title}
              className="h-[8vh] aspect-square"
            />
          </div>
          {/* 曲名など */}
          <div>
            <p>{song.title}</p>
            <p className="text-xs">
              {`${song.artist?.name} • ${song.album} • ${song.releasedAt}年`}
            </p>
          </div>
        </div>
        {/* 音量 */}
        <div className="flex justify-center items-center gap-x-[2vw]">
          {/* 音量スライダー */}
          <div className="relative w-24 h-1 bg-deathDarkGray">
            {/* 現在の音量を表す白い部分 */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-deathWhite"
              style={{ width: `${isMuted ? 0 : volume * 100}%` }}
            />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => handleVolume(Number(e.target.value))}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <div onClick={handleMuted} className="cursor-pointer">
            {isMuted ? (
              <IoVolumeMuteOutline className="text-deathWhite size-[4vh]" />
            ) : (
              <IoVolumeHighOutline className="text-deathWhite size-[4vh]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicController;
