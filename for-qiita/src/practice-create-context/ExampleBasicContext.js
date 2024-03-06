import { useState } from "react";
import ExampleHeader from "./ExampleHeader";
import OtherBody from "./OtherBody";
import { ExampleContext, ExampleUpdateContext } from "./generateContext";
// 親コンポーネント
const ExampleBasicContext = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            {/* 受け渡したいコンテクストの設定。子コンポーネントをラップしている。 */}
            <ExampleContext.Provider value={theme}>
                <ExampleUpdateContext.Provider value={toggleTheme}>
                    {/* 子コンポーネント */}
                    <ExampleHeader />
                </ExampleUpdateContext.Provider>
            </ExampleContext.Provider>
            {/* Providerでラップされていない */}
            <OtherBody />
        </>
    );
};
export default ExampleBasicContext;