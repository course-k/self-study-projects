const { Button } = require("@mui/material");

const Content = () => {
    return (
        <>
            <Button variant="text">テキスト</Button>
            <Button variant="contained">塗りつぶし</Button>
            <Button variant="outlined">外枠</Button>
        </>
    );
};

export default Content;