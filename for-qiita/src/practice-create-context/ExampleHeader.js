import ExampleBody from "./ExampleBody";
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

export default ExampleHeader;