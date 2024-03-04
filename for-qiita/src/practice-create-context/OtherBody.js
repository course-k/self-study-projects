import { ExampleContext } from "./generateContext";
import { useContext } from "react";
// その他のコンポーネント
const OtherBody = () => {
    // コンテクストの使用
    const othTxt = useContext(ExampleContext);
    return (
        <>
            <h1>OtherBody</h1>
            {/* 受け取ったコンテクストを設定 */}
            <p>{othTxt}</p>
        </>
    );
};

export default OtherBody;