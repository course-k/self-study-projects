import express from "express";
import apiRoutes from "./api-routes/index.mjs";
const PORT = 8080;

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(apiRoutes);


app.listen(PORT, () => {
    console.log(`start localhost:${PORT}`);
})