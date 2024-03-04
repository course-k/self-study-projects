import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const generateTheme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        },
        secondary: {
            main: green[500]
        }
    },
    spacing: 10
});

export default generateTheme;