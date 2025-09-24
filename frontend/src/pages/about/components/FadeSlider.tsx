import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Image } from "../../../types/image";
type Props = {
  images: Image[];
};
const FadeSlider = ({ images }: Props) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={2500}
      autoplay={{
        delay: 5000,
      }}
      effect="fade"
      modules={[Autoplay, EffectFade]}
      className="w-[30vw] aspect-video"
    >
      {images.map((image) => {
        return (
          <SwiperSlide>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FadeSlider;
