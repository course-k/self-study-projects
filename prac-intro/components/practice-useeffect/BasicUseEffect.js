import { useEffect, useState } from "react";

const BasicUseEffect = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState();
    useEffect(() => {
        console.log(`count:${count}`)
    }, [count]);
    const countUp = () => setCount(prev => ++prev);
    const getDate = () => setState(Date.now);
    return (
        <>
            <button onClick={getDate}>現在時刻：{state}</button>
            <button onClick={countUp}>カウント</button>
            <p>現在のカウント：{count}</p>
        </>
    );
};

export default BasicUseEffect;