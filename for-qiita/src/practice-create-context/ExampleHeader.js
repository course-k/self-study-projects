import { useContext } from "react";
import ExampleBody from "./ExampleBody";
import { ExampleContext } from "./generateContext";
// 子コンポーネント
const ExampleHeader = () => {
    const theme = useContext(ExampleContext);
    return (
        <>
            <h1>Example Header</h1>
            {/* 受け取ったコンテクストを設定 */}
            <p>Current theme:{theme}</p>
            {/* 孫コンポーネント */}
            <ExampleBody />

        </>
    );
};

export default ExampleHeader;