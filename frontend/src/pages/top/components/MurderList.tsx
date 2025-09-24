import { useEffect, useState } from "react";
import { motion } from "motion/react";
const criminals = [
  { name: "日比沢 有介", top: "4%", left: "12%", shade: "light" },
  { name: "背多 活矢", top: "4%", left: "78%", shade: "dark" },
  { name: "丸雄 武詩", top: "10%", left: "4%", shade: "dark" },
  { name: "井間泉 弘道", top: "10%", left: "85%", shade: "light" },
  { name: "顔沼 陽介", top: "18%", left: "13%", shade: "light" },
  { name: "渋井丸 拓雄", top: "18%", left: "82%", shade: "dark" },
  { name: "Lind・L・Tailor", top: "30%", left: "6%", shade: "dark" },
  { name: "恐田 奇一郎", top: "28%", left: "88%", shade: "light" },
  { name: "汚崎 樽人", top: "40%", left: "18%", shade: "light" },
  { name: "Raye= Iwamatsu", top: "42%", left: "84%", shade: "dark" },
  { name: "貸間山 徹", top: "52%", left: "10%", shade: "dark" },
  { name: "Miles=Fitzerald", top: "52%", left: "80%", shade: "light" },
  { name: "松村 諭吉", top: "62%", left: "18%", shade: "light" },
  { name: "鹿島  広太", top: "64%", left: "78%", shade: "dark" },
  { name: "Bess=Sekllet", top: "70%", left: "32%", shade: "dark" },
  { name: "Haley=Belle", top: "60%", left: "90%", shade: "light" },
  { name: "志度原 健太", top: "78%", left: "14%", shade: "light" },
  { name: "Freddi=Cuntair", top: "78%", left: "82%", shade: "dark" },
  { name: "Hal Welker", top: "86%", left: "22%", shade: "dark" },
  { name: "張 四平", top: "86%", left: "68%", shade: "light" },
  { name: "Mike Dalas", top: "92%", left: "8%", shade: "light" },
  { name: "牧村 孝雄", top: "92%", left: "85%", shade: "dark" },
  { name: "田辺 貴弘", top: "97%", left: "30%", shade: "dark" },
  { name: "陳 文徳", top: "97%", left: "55%", shade: "light" },
  { name: "Caston Diehl", top: "97%", left: "72%", shade: "dark" },
];
/**
 *@returns 40秒ごとに犯罪者に裁きを下す
 */
const MurderList = () => {
  const [countdown, setCountdown] = useState(40);
  const [killed, setKilled] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          killRandom();
          return 40;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [killed]);

  const killRandom = () => {
    const alive = criminals
      .map((_, idx) => idx)
      .filter((idx) => !killed.includes(idx));

    if (alive.length === 0) {
      setKilled([]);
      return;
    }

    const randomIdx = alive[Math.floor(Math.random() * alive.length)];
    setKilled((prev) => [...prev, randomIdx]);
  };

  return (
    <div className="absolute top-0 left-0 z-0 w-[90vw] min-h-[90vh]">
      {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-deathLightGray w-[50vw] aspect-video"></div> */}

      {/* 犯罪者の名前。殺したら取り消し線がつく。 */}
      {criminals.map((criminal, idx) => (
        <motion.span
          key={idx}
          className={`absolute whitespace-nowrap transition-all duration-500 ${
            criminal.shade === "light" ? "text-neutral-600" : "text-neutral-800"
          } ${killed.includes(idx) ? "line-through opacity-70" : ""}`}
          style={{ top: criminal.top, left: criminal.left }}
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        >
          {criminal.name}
        </motion.span>
      ))}
      {/* カウントダウン表示 */}
      <div className="absolute bottom-2 right-4 text-neutral-600 text-[2rem] font-mono font-deathNote">
        {countdown}
      </div>
    </div>
  );
};

export default MurderList;
