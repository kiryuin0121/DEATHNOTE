import { Person } from "../../../types/characterCast";
import CharacterCard from "./CharacterCard";
import RelationArrows from "./RelationAllows";

type Props = {
  persons: Person[];
  handleOpen: (idx: number) => void;
};
/**
 *@returns 登場人物の相関図
 *@params persons:登場人物&演者の一覧情報(mapで展開する過程で登場人物の情報のみを抽出)
 *@params handleOpen:詳細情報(PersonDetail)を表示するロジック
 */
const CharacterChart = ({ persons, handleOpen }: Props) => {
  return (
    <div className="w-[90vw] h-[55vw] mx-auto relative border border-deathDarkGray">
      {/*guide line */}
      {/* {[...Array(91)].map((_, i) => (
        <div
          key={`v-${i}`}
          className={`absolute top-0 bottom-0 w-[1px] ${
            i % 5 === 0 ? "bg-white/30" : "bg-white/10"
          }`}
          style={{ left: `${i}vw` }}
        />
      ))}
      {[...Array(56)].map((_, i) => (
        <div
          key={`h-${i}`}
          className={`absolute left-0 right-0 h-[1px] ${
            i % 5 === 0 ? "bg-white/30" : "bg-white/10"
          }`}
          style={{ top: `${i}vw` }}
        />
      ))} */}

      <div className="relative z-10">
        <div className="w-full h-full relative">
          {persons.map((person: Person, idx: number) => {
            return (
              <CharacterCard
                key={person.id}
                character={person.character}
                sizeClass={`size-${person.size}`}
                positionX={person.left}
                positionY={person.top}
                idx={idx}
                handleOpen={handleOpen}
              />
            );
          })}

          {/*  relation*/}
          <RelationArrows />
        </div>
      </div>
    </div>
  );
};

export default CharacterChart;
