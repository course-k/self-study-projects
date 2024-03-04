'use client'
import { useState } from "react";
import { Button, Box, Drawer } from "@mui/material";
import ListContent from "./ListContent";
const PracticeDrawer = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(prev => !prev);
    return (
        <>
            <Button variant="contained" onClick={toggleShow}>{show ? 'Hide' : 'Show'}</Button>
            <Drawer anchor="left" open={show} onClose={toggleShow}>
                <Box>
                    <ListContent />
                </Box>
            </Drawer>
        </>
    );
};

export default PracticeDrawer;