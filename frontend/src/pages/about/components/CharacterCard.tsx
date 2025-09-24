import { Character } from "../../../types/characterCast";

type Props = {
  character: Character;
  sizeClass: string;
  positionX: number;
  positionY: number;
  idx: number;
  handleOpen: (idx: number) => void;
};
/**
 *@returns クリックするとその人物の詳細情報が表示されるコンポーネント
 *@params character:登場人物一人分の情報
 *@params sizeClass:コンポーネントの大きさを定義するクラス(size-hero:大きい、size-main:やや大きい、size-sub:普通 の3通りです)
 *@params positionX:x座標(親要素(CharacterChart)の左上角を原点と考えます)
 *@params positionY:y座標(,,)
 *@params idx:何番目の人物を表示しているかを表す数値(左上から右下の人物に向かって連番を割り振っています)
 *@params handleOpen:詳細情報(PersonDetail)を表示するロジック
 */
const CharacterCard = ({
  character,
  sizeClass,
  positionX,
  positionY,
  idx,
  handleOpen,
}: Props) => {
  return (
    <figure
      onClick={() => handleOpen(idx)}
      className={`${sizeClass} absolute -translate-1/2 overflow-hidden cursor-pointer border border-deathDarkGray transition-all duration-400 hover:scale-103 hover:brightness-105 hover:shadow-[0_0_25px_2px_rgba(163,163,163,0.4)]`}
      style={{
        top: `${positionY}vw`,
        left: `${positionX}vw`,
      }}
    >
      <img src={character.url} alt={character.name} className="h-full w-full" />
      <figcaption className="absolute bottom-2 right-2">
        {character.name}
      </figcaption>
    </figure>
  );
};

export default CharacterCard;
