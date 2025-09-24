export type Artist = {
  id: string;
  name: string;
  imgUrl: string;
  profile: string;
  comment?: string;
  song: Song[];
};

export type Song = {
  id: string;
  title: string;
  imgUrl: string;
  audioUrl: string;
  album?: string;
  artistId: string;
  artist?: Artist;
  lyrics: Lyric[];
  releasedAt: number;
  createdAt: Date;
};

export type Lyric = {
  id: number;
  phrase: string;
  time: number;
  songId: string;
  song?: Song;
};
