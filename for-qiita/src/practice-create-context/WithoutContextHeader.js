import WithoutContextContent from "./WithoutContextContent";

const WithoutContextHeader = ({ theme, toggleTheme }) => {
    return (
        <>
            <h1>Header</h1>
            <WithoutContextContent theme={theme} toggleTheme={toggleTheme} />
        </>
    );
};

export default WithoutContextHeader;