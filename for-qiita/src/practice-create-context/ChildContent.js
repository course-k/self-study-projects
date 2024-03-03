import { useContext } from "react";
import { TestContext } from "./PracticeCreateContext";
const ChildContent = () => {
    const context = useContext(TestContext);
    return (
        <>
            <h3>{context}</h3>
        </>
    );
};

export default ChildContent;