import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

/**
 *@returns バナー広告を横方向にスライドさせ続けるコンポーネント
 */
const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={3}
      centeredSlides={false}
      loop={true}
      speed={7500}
      autoplay={{
        delay: 0,
      }}
      modules={[Autoplay]}
    >
      {/* 円盤 */}
      <SwiperSlide>
        <a
          href="https://www.amazon.co.jp/DEATH-NOTE-%E3%83%87%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88-%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%97%E3%83%A9%E3%82%A4%E3%82%B9%E7%89%88-Blu-ray/dp/B01KL6W8J8/ref=pd_bxgy_thbs_d_sccl_1/357-9896128-0394921?pd_rd_w=3RfqC&content-id=amzn1.sym.dee070b1-16ee-44ca-b1c2-031bd9c55b61&pf_rd_p=dee070b1-16ee-44ca-b1c2-031bd9c55b61&pf_rd_r=23QE1Q1PSPKC0DEN3C63&pd_rd_wg=zMZSy&pd_rd_r=02159394-5de0-4aaa-839a-999c2ba1d741&pd_rd_i=B01KL6W8J8&psc=1"
          target="_blank"
          className="transition-[filter] duration-300 hover:brightness-80"
        >
          <div className="text-center w-full h-[8vh] lg:h-[10vh] leading-[8vh] lg:leading-[10vh] text-sm lg:text-lg bg-black bg-no-repeat bg-[url(/images/top/apple.png)] bg-size-[220%_auto] lg:bg-size-[auto_auto] bg-center border-1 border-deathDarkGray">
            Blu-ray&DVD
          </div>
        </a>
      </SwiperSlide>
      {/* 配信 */}
      <SwiperSlide>
        <a
          href="https://video.unext.jp/title/SID0018019"
          target="_blank"
          className="transition-[filter] duration-300 hover:brightness-80"
        >
          <div className="relative w-full h-[8vh] lg:h-[10vh] bg-[url(/images/top/tokyo.png)] bg-size-[100%_270%] border border-deathDarkGray bg-center text-outlined-black">
            <span className="absolute top-1/2 left-1/2 -translate-1/2 leading-[8vh] lg:leading-[10vh] text-[10px] lg:text-lg">
              U-NEXTにて無料配信中!
            </span>
            <span className="absolute bottom-0.5 lg:bottom-2 right-0.5 lg:right-2 text-[6px] lg:text-xs">
              詳細はこちら
            </span>
          </div>
        </a>
      </SwiperSlide>
      {/* 原作コミックス */}
      <SwiperSlide>
        <a
          href="https://shonenjumpplus.com/episode/10833519556325021815"
          target="_blank"
          className="transition-[filter] duration-300 hover:brightness-80"
        >
          <div className="p-0.5 lg:p-1 h-[8vh] lg:h-[10vh] w-full bg-deathWhite ">
            <div className="flex justify-center items-center h-full w-full relative border lg:border-0.5 border-deathBlack">
              <img
                src="/images/top/comic-logo.png"
                alt="原作版 DEATH NOTEロゴ"
                className="h-full"
              />
              <span className="absolute bottom-0.5 lg:bottom-2 right-0.5 lg:right-2 text-[6px] lg:text-xs text-deathBlack">
                原作試し読みはこちら
              </span>
            </div>
          </div>
        </a>
      </SwiperSlide>
      {/* special */}
      <SwiperSlide>
        <a
          href="/special"
          target="_new"
          className="transition-[filter] duration-300 hover:brightness-80"
        >
          <div className="w-full h-[8vh] lg:h-[10vh] bg-[url(/images/global/bg.jpg)] bg-cover border border-deathDarkGray">
            <div className="flex flex-col items-center justify-center h-full w-full text-center">
              <span className="text-base lg:text-3xl tracking-[0.2em] lg:tracking-[0.3em] text-silver font-deathNote">
                SPECIAL
              </span>
              <span className="text-[0.3em] lg:text-[0.5em] text-neutral-500">
                映画「DEATH NOTE」を熟知する
              </span>
            </div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
