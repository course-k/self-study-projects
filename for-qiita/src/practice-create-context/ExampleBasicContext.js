import { createContext, useContext } from "react";
// コンテクストの生成、コンポーネントの外部で定義
const ExampleContext = createContext('default-txt');
// 親コンポーネント
const ExampleBasicContext = () => {
    return (
        <>
            {/* 受け渡したいコンテクストの設定。子コンポーネントをラップしている。 */}
            <ExampleContext.Provider value="provider-txt">
                {/* 子コンポーネント */}
                <ExampleHeader />
                {/* 別のコンテクストを設定 */}
                <ExampleContext.Provider value="reloaded-txt">
                    {/* 子コンポーネント */}
                    <ExampleHeader />
                </ExampleContext.Provider>
            </ExampleContext.Provider>
            {/* Providerでラップされていない */}
            <OtherBody />
        </>
    );
};
// 子コンポーネント
const ExampleHeader = () => {
    return (
        <>
            <h1>Example Header</h1>
            {/* 孫コンポーネント */}
            <ExampleBody />
        </>
    );
};
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
export default ExampleBasicContext;