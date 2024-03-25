import { useState } from "react";
/**
 * じゃんけんの手の値を定義したオブジェクト
 * 各じゃんけんのキーが更に内部でオブジェクトを持つ
 * name:親のキーに紐づく名前
 * score:親のキーに対して出された手の勝ち負け（1 勝ち/0 あいこ/-1 負け）
 */
const HANDS = {
    rock: { name: "グー", score: { rock: 0, scissors: 1, paper: -1 } }
    , scissors: { name: "チョキ", score: { rock: -1, scissors: 0, paper: 1 } }
    , paper: { name: "パー", score: { rock: 1, scissors: -1, paper: 0 } }

}
/**
 * ランダムにじゃんけんの手のオブジェクトを生成する
 * @return 生成したじゃんけんの手のオブジェクト
 */
const generateHand = () => {
    // HANDSオブジェクトを配列に変換。0~2の乱数を生成し、配列からランダムに手のオブジェクトを取得
    const randomHand = Object.keys(HANDS)[Math.floor(Math.random() * 3)];
    return randomHand;
}
/**
 * 自分と相手の手から勝敗を判定して結果を出す
 * @param {string} myHand 自分の手
 * @param {string} rivalHand 相手の手
 * @return 勝敗結果
 */
const judge = (myHand, rivalHand) => {
    // HANDSオブジェクトから自分の手に紐づく、相手の手のscoreを取得
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
// 画面に出力する内容の定義
const Main = () => {
    // 相手の手用のstate
    const [rivalHandName, setRivalHandName] = useState();
    // 結果用のstate
    const [battleResult, setBattleResult] = useState();
    // ボタン押下時、相手の手を生成し、勝敗を判定する処理を実行
    const battle = (e) => {
        const rivalHand = generateHand();
        setRivalHandName(HANDS[rivalHand].name);
        const myHand = e.target.value;
        const battleResult = judge(myHand, rivalHand);
        setBattleResult(battleResult);
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

export default Main;