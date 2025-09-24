import { JSX, useState } from "react";
import { Song } from "../../../types/song";
import TabHeader from "./TabHeader";
import Lyrics from "./Lyrics";
import Artist from "./Artist";

type Props = {
  song: Song;
  handleSeek: (seconds: number) => void;
  currentTime: number;
};
/**
 *@returns タブ形式でアーティストの情報、曲の歌詞を切り替えられるコンポーネント
 *@param song:一曲分の情報
 *@param handleSeek:再生位置を制御する関数(Lyricsに渡す)
 *@param currentTime:現在の再生位置
 */
const MusicTab = ({ song, handleSeek, currentTime }: Props) => {
  const { artist, lyrics } = song;
  // どのタブを表示するかを表す数値(0:アーティスト,1:歌詞)
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  /**
   *@return 選択されているタブに応じてコンテンツ部分を出し分ける。
   *@param activeTabIdx:どのタブを表示するかを表す数値(0:artist,1:lyrics)
   */
  const renderTabContent = (activeSongIdx: number): JSX.Element => {
    switch (activeSongIdx) {
      case 0:
        return <Artist artist={artist!} />;
      case 1:
        return (
          <Lyrics
            lyrics={lyrics}
            handleSeek={handleSeek}
            currentTime={currentTime}
            name={song.artist!.name}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <section className="w-11/20 h-[80vh] border-l border-deathDarkGray bg-black/90 overflow-hidden">
      <TabHeader
        activeTabIdx={activeTabIdx}
        handleContent={(idx: number) => setActiveTabIdx(idx)}
      />
      {renderTabContent(activeTabIdx)}
    </section>
  );
};

export default MusicTab;
