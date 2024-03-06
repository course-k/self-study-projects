import { ExampleUpdateContext } from "./generateContext";
import React, { useContext } from "react";
// 孫コンポーネント
const ExampleBody = () => {
    // コンテクストの使用
    const toggleTheme = useContext(ExampleUpdateContext);

    return (
        <>
            <h2>Example Body</h2>
            {/* コンテクストを更新する処理を設定 */}
            <button type="button" onClick={toggleTheme} >切り替え</button>
        </>
    );
};

export default ExampleBody;