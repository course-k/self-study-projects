import { useState } from "react";
import WithoutContextHeader from "./WithoutContextHeader";

const WithoutContextApp = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = (e) => {
        const val = e.target.value;
        setTheme(val);
    }
    return (
        <WithoutContextHeader theme={theme} toggleTheme={toggleTheme} />
    );
};

export default WithoutContextApp;