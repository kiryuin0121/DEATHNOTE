import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { motion } from "motion/react";

type BasicRule = {
  main: string;
  subs: string[];
};
const BASIC_RULES: BasicRule[] = [
  {
    main: "このノートに名前を書かれた人間は死ぬ。",
    subs: [
      "デスノートから切り取った1ページやその切れ端でも全て、デスノートの特性が有効である。",
      "文字として残るものであれば、書く道具はノートに直に書き込みさえすればなんでもよい。化粧品や血でも構わない。",
    ],
  },
  {
    main: "書く人物の顔が頭に入っていないと効果はない。ゆえに同姓同名の人物にいっぺんに効果は得られない。",
    subs: [
      "同一人物の顔を思い浮かべ、四度名前を書き間違えると、その人間に対してデスノートは効かなくなる。",
    ],
  },
  {
    main: "名前の後に人間界単位で40秒以内に死因を書くと、その通りになる。",
    subs: [
      "死因を書かなければ全てが心臓麻痺となる。",
      "死因を書くとさらに6分40秒、詳しい死の状況を記載する時間が与えられる。",
    ],
  },
  {
    main: "所有者はノートの持ち主である死神の姿や声を認知することができる。",
    subs: [
      "デスノートに触った人間には、そのノートの所有者でなくとも、元持ち主の死神の姿や声が認知できる。",
      "デスノートの所有権を放棄したら、それにまつわる記憶を全て失う。だが、ノートの一部にでも触れば、記憶は全て蘇る。",
    ],
  },
];
/**
 *@returns デスノートの基本ルール4選!!
 */
const BasicRules = () => {
  return (
    <figure className="basic-rules w-screen aspect-[3/1] flex justify-center items-center bg-[url(/images/about/light-and-l.png)] bg-[100%_auto] bg-position-[center_top_60%] bg-no-repeat bg-fixed">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={300}
        pagination={{
          clickable: true,
          // ページネーションボタンのデザインをカスタマイズ。(番号をつける、ひし形にする)
          // custom-bulletクラスはtailwind.cssの@layer componentsの部分で定義。
          renderBullet: (index, className) => {
            return `<button class="${className} custom-bullet"><span>${
              index + 1
            }</span></button>`;
          },
        }}
        modules={[Pagination]}
        className="w-[40vw] aspect-5/3 bg-[url(/images/top/red.jpg)] bg-cover"
        // bg-[url(images/global/bg.jpg)]
      >
        {BASIC_RULES.map((basicRule, idx) => {
          return (
            <SwiperSlide
              key={basicRule.main}
              className="cursor-grab active:cursor-grabbing"
            >
              <section className="w-full h-full flex justify-center items-center py-[5%] px-[4%]">
                <div className="w-full h-full grid grid-cols-5 items-center border-x-1 border-deathLightGray relative">
                  <h3 className="absolute top-0 left-1/2 -translate-1/2 font-deathNote text-[2rem]">
                    How to use it
                  </h3>
                  <div className="absolute top-6 left-1/2 -translate-1/2 text-sm">
                    (基本ルール)
                  </div>
                  {/* 四つ角の棒 */}
                  <div className="absolute top-0 left-0 bg-deathLightGray h-px w-[5%]"></div>
                  <div className="absolute top-0 right-0 bg-deathLightGray h-px w-[5%]"></div>
                  <div className="absolute bottom-0 left-0 bg-deathLightGray h-px w-[5%]"></div>
                  <div className="absolute bottom-0 right-0 bg-deathLightGray h-px w-[5%]"></div>
                  {/* 数字 */}
                  <div className="col-span-1 flex justify-center items-start overflow-hidden">
                    <span className="text-[15vw] font-deathNote rotate-z-15">
                      {idx + 1}
                    </span>
                  </div>
                  {/* ルール */}
                  <motion.div
                    className="col-span-4 flex flex-col justify-center gap-y-4 pr-[2%]"
                    initial={{ opacity: 0, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.p className="text-lg">{basicRule.main}</motion.p>
                    <section>
                      <h4 className="mb-2 text-sm lg:text-[15px] text-neutral-300">
                        &lt;関連ルール&gt;
                      </h4>
                      {/* 関連ルール */}
                      <ul className="flex flex-col gap-y-2">
                        {basicRule.subs.map((subRule) => {
                          return (
                            <li key={subRule}>
                              <motion.p className="text-xs">
                                <span className="font-deathNote font-[700] mr-2">
                                  o
                                </span>
                                {subRule}
                              </motion.p>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  </motion.div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </figure>
  );
};
export default BasicRules;
