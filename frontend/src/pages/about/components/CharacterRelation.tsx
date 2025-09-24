import { useEffect, useState } from "react";
import axios from "axios";
import { Person } from "../../../types/characterCast";
import CharacterChart from "./CharacterChart";
import CharacterMordal from "./CharacterMordal";

/**
 *@returns キャラクター同士の相関図。各キャラクターをクリックするとキャラの説明文とキャストの情報が表示される。
 */
const CharacterRelation = () => {
  // 登場人物＆演者の情報一覧
  const [persons, setPersons] = useState<Person[]>([]);
  // 詳細情報を表示する人物が何人目か
  const [activePersonIdx, setActivePersonIdx] = useState<number>(-1);
  // 詳細情報を表示するか否か
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // エラー
  const [hasError, setHasError] = useState<boolean>(false);

  // Expressサーバーと通信を行い、登場人物＆演者の情報一覧を取得する。
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/persons");
        setPersons(res.data.persons as Person[]);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    })();
  }, []);

  // error boundary
  if (hasError) {
    return (
      <section className="w-[90vw]">
        <p>キャラクター/キャストの情報の取得に失敗しました。</p>
      </section>
    );
  }

  return (
    <figure className="w-[90vw] h-auto mx-auto">
      <CharacterChart
        persons={persons}
        handleOpen={(idx: number) => {
          setActivePersonIdx(idx);
          setIsOpen(true);
        }}
      />
      {activePersonIdx >= 0 && isOpen && (
        <CharacterMordal
          person={persons[activePersonIdx]}
          handleClose={() => setIsOpen(false)}
          handleNext={() =>
            setActivePersonIdx((activePersonIdx + 1) % persons.length)
          }
          handlePrev={() =>
            setActivePersonIdx(
              (activePersonIdx - 1 + persons.length) % persons.length
            )
          }
        />
      )}
    </figure>
  );
};

export default CharacterRelation;
