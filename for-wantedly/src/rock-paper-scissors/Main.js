import { useState } from "react";

const HANDS = {
    rock: { name: "グー", score: { rock: 0, scissors: 1, paper: -1 } }
    , scissors: {
        name: "チョキ", score: { rock: -1, scissors: 0, paper: 1 }
    }
    , paper: { name: "パー", score: { rock: 1, scissors: -1, paper: 0 } }
}
const Main = () => {
    const [rivalHandName, setRivalHandName] = useState();
    const [battleResult, setBattleResult] = useState();

    const battle = (e) => {
        const rivalHand = generateHand();
        setRivalHandName(HANDS[rivalHand].name);
        const myHand = e.target.value;
        const battleResult = judge(myHand, rivalHand);
        setBattleResult(battleResult);
        return HANDS[myHand];

    }
    return (
        <>
            <div>
                自分の手：
                {Object.keys(HANDS).map(h => {
                    return (
                        <button type="button" key={h} value={h} onClick={battle}>{HANDS[h].name}</button>
                    )
                })}
            </div>
            <div>
                相手の手：{rivalHandName}
            </div>
            <div>
                結果：{battleResult}
            </div>
        </>
    )
};
const judge = (myHand, rivalHand) => {
    const score = HANDS[myHand].score[rivalHand];
    switch (score) {
        case -1:
            return "負け";
        case 0:
            return "あいこ";
        case 1:
            return "勝ち";
        default:
            return "";
    }
}

const generateHand = () => {
    const randomHand = Object.keys(HANDS)[Math.floor(Math.random() * 3)];
    return randomHand;
}

export default Main;