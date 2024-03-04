import ExampleHeader from "./ExampleHeader";
import OtherBody from "./OtherBody";
import { ExampleContext } from "./generateContext";
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
export default ExampleBasicContext;