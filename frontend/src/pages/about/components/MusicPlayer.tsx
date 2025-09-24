import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Song } from "../../../types/song";
import MusicTab from "./MusicTab";
import Thumbnail from "./Thumbnail";
import MusicController from "./MusicController";

//💻TODO:DaniCaliforniaの最後らへんの音割れなんとかする。💻
const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  // 曲情報一覧配列(Expressサーバーから取得)
  const [songs, setSongs] = useState<Song[]>();
  // どの曲が再生可能なのか
  const [activeSongIdx, setActiveSongIdx] = useState<number>(0);
  // 再生中か否か
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // 音量
  const [volume, setVolume] = useState<number>(0.5);
  // ミュート中か否か
  const [isMuted, setIsMuted] = useState<boolean>(false);
  // 曲の再生位置(秒)
  const [currentTime, setCurrentTime] = useState<number>(0);
  // 曲の総再生時間(秒)
  const [duration, setDuration] = useState<number>(NaN);
  // error
  const [hasError, setHasError] = useState<boolean>(false);

  //songsを初期化する。
  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get("http://localhost:3000/api/songs");
        setSongs(res.data.songs as Song[]);
      })();
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  }, []);

  /**
   *durationを初期化する
   */
  const initDuration = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  /**
   *currentTimeを更新する。
   */
  const updateCurrentTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  /**
   * 指定した秒数分、再生を早送りする
   *@param jumpSec:進めたい秒数
   */
  const advanceTime = (jumpSec: number) => {
    // 現在の再生位置が総再生時間を超えないようにする。
    setCurrentTime((currentTime) => Math.min(currentTime + jumpSec, duration));
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(currentTime + jumpSec, duration);
    }
  };
  /**
   * 指定した秒数分、再生を巻き戻す
   *@param jumpSec:戻したい秒数
   */
  const rewindTime = (jumpSec: number) => {
    // 現在の再生位置がマイナスにならないようにする。
    setCurrentTime((currentTime) => Math.max(0, currentTime - jumpSec));
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, currentTime - jumpSec);
    }
  };
  /**
   *再生⇔停止を切り替える
   */
  const togglePlaying = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying((isPlaying) => !isPlaying);
  };
  /**
   *再生位置を制御する
   *@param time:再生を開始したい秒数
   */
  const controllCurrentTime = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  /**
   *音量を更新する
   */
  const updateVolume = () => {
    if (audioRef.current) {
      setVolume(audioRef.current.volume);
    }
  };
  /**
   * 音量を制御する
   *@param volume:音量(0-1)
   */
  const controllVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      setVolume(volume);
    }
  };
  /**
   *ミュート状態の切り替え
   */
  const toggleMuted = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted((isMuted) => !isMuted);
    }
  };

  //Error Boundary
  if (hasError || !songs) return <div>楽曲の取得に失敗しました🥺</div>;

  return (
    <div className="w-[90vw] min-h-[90vh] mx-auto">
      <audio
        ref={audioRef}
        src={songs[activeSongIdx].audioUrl}
        onLoadedMetadata={initDuration} //音声データが読み込まれた際に、総再生時間を取得し、durationに保持。
        onTimeUpdate={updateCurrentTime} //再生が進むに応じて、現在の再生位置をcurrentTimeに即時反映。
        onVolumeChange={updateVolume} //音量
      />

      <div className="h-[80vh] w-full flex">
        <Thumbnail
          src={songs[activeSongIdx].imgUrl}
          alt={songs[activeSongIdx].title}
          isPlaying={isPlaying}
          handleNext={() => {
            setActiveSongIdx(
              (activeSongIdx) => (activeSongIdx + 1) % songs.length
            );
          }}
          handlePrev={() => {
            setActiveSongIdx(
              (activeSongIdx) =>
                (activeSongIdx - 1 + songs.length) % songs.length
            );
          }}
          handlePlaying={togglePlaying}
          handleAdvance={advanceTime}
          handleRewind={rewindTime}
        />
        <MusicTab
          key={activeSongIdx}
          song={songs[activeSongIdx]}
          currentTime={currentTime}
          handleSeek={controllCurrentTime}
        />
      </div>
      <MusicController
        song={songs[activeSongIdx]}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        isPlaying={isPlaying}
        isMuted={isMuted}
        handleNext={() => {
          setActiveSongIdx(
            (activeSongIdx) => (activeSongIdx + 1) % songs.length
          );
        }}
        handlePrev={() => {
          setActiveSongIdx(
            (activeSongIdx) => (activeSongIdx - 1 + songs.length) % songs.length
          );
        }}
        handlePlaying={togglePlaying}
        handleAdvance={advanceTime}
        handleRewind={rewindTime}
        handleSeek={controllCurrentTime}
        handleVolume={controllVolume}
        handleMuted={toggleMuted}
      />
    </div>
  );
};

export default MusicPlayer;
