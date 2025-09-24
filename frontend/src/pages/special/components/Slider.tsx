import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SpecialImage } from "../../../types/post";

type Props = {
  images: SpecialImage[];
};
/**
 *@returns 画像スライダー
 *@param スライドさせたい画像集
 */
const Slider = ({ images }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={0}
      className="w-[45vw] aspect-video"
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image.id}>
            <img src={image.url} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slider;
