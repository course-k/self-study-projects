import { useEffect, useState } from "react";

const Timer = () => {
    const [count, setCount] = useState(1000);
    useEffect(() => {
        const id = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);
        return (
            () => {
                clearInterval(id)
            }
        );
    }, []);
    return (
        <p>現在のカウント：{count}</p>
    )
};

export default Timer;