import { useState } from "react";

// じゃんけんの手の値を定義したオブジェクト（後の拡張性のため、このような形）
const HANDS = {
    rock: { name: "グー" }
    , scissors: { name: "チョキ" }
    , paper: { name: "パー" }
}
// 画面に出力する内容の定義
const ChangeExample = () => {
    // じゃんけんの手を変更する関数
    const changeHand = (e) => {
        // set関数を呼ぶことで、画面の再描画がトリガされる
        setMyHand(e.target.value);
        console.log(HANDS[myHand].name);
    }
    // 初期値（分割代入を使用）
    const [myHand, setMyHand] = useState('rock');
    return (
        <>
            {/* HANDSオブジェクトのキー分、ボタンを生成する繰り返し処理を実施 */}
            {Object.keys(HANDS).map(h => {
                return (
                    <button type="button" key={h} value={h} onClick={changeHand}>{HANDS[h].name}</button>
                )
            })}
            {/* HANDSオブジェクトのキー名を変数で指定、nameを取得 */}
            <p>自分の手：{HANDS[myHand].name}</p>
        </>);
};

export default ChangeExample;