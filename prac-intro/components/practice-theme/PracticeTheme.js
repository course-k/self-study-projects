import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import generateTheme from "./generateTheme";
import Content from "./Content";
import { useState } from "react";

const PracticeTheme = () => {
    const [mode, setMode] = useState('light');
    const theme = generateTheme;
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Button variant="outlined"
                    onClick={() => setMode(prev => prev === 'light' ? 'dark' : 'light')}>
                    {mode === 'light' ? 'ダーク' : 'ライト'}テーマにする
                </Button>
                <Content />
            </ThemeProvider>
        </>
    );
};

export default PracticeTheme;