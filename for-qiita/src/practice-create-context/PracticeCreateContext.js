import { createContext } from 'react';
import ChildContent from './ChildContent';
const PracticeCreateContext = () => {
    console.log(TestContext);
    return (
        <>
            <h1>test</h1>
            <ChildContent />
        </>
    );
};

export const TestContext = createContext('hoge');
export default PracticeCreateContext;