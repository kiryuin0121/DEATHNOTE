export type NewsPost = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};
export type SpecialPost = {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
  images: SpecialImage[];
};
export type SpecialImage = {
  id: string;
  url: string;
};
