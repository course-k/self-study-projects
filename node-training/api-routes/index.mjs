import express from "express";
import productRoutes from "./productRoutes.mjs";

const apiRoutes = express.Router();
apiRoutes.use('/product', productRoutes);

export default apiRoutes;