import React from "react";
const WithoutContextContent = ({ theme, toggleTheme }) => {
    const THEMES = ['light', 'dark'];
    return (
        <>
            <h2>Content</h2>
            <p>Current theme:{theme}</p>
            {THEMES.map(t => {
                return (
                    <React.Fragment key={t}>
                        <label htmlFor={t}>{t} theme</label>
                        <input id={t} name="theme" type="radio" value={t} onChange={toggleTheme} checked={theme === t} />
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default WithoutContextContent;