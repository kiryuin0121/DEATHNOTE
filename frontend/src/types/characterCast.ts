export type Character = {
  id: string;
  name: string;
  url: string;
  description: string;
  images: Image[];
};
export type Image = {
  id: string;
  url: string;
};
export type Cast = {
  id: string;
  name: string;
  comment?: string;
  profile: string;
};

export type Person = {
  id: string;
  size: "hero" | "main" | "sub";
  top: number;
  left: number;
  serial: number;
  character: Character;
  cast: Cast;
};
