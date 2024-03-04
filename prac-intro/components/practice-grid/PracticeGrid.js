import { Grid } from "@mui/material";
import GridContent from "./GridContent";

const PracticeGrid = () => {
    return (
        <Grid container spacing={0}>
            <Grid xs={6} md={4}>
                <GridContent title={"1番目"} />
            </Grid>
            <Grid xs={3} md={4}>
                <GridContent title={"2番目"} />
            </Grid>
            <Grid xs={2} md={4}>
                <GridContent title={"3番目"} />
            </Grid>
            <Grid xs={3} md={4}>
                <GridContent title={"4番目"} />
            </Grid>
            <Grid xs={12} md={4}>
                <GridContent title={"5番目"} />
            </Grid>
        </Grid>
    );
};

export default PracticeGrid;