import { ExampleContext } from "./generateContext";
import { useContext } from "react";
// 孫コンポーネント
const ExampleBody = () => {
    // コンテクストの使用
    const txt = useContext(ExampleContext);
    return (
        <>
            <h2>Example Body</h2>
            {/* 受け取ったコンテクストを設定 */}
            <p>{txt}</p>
        </>
    );
};

export default ExampleBody;