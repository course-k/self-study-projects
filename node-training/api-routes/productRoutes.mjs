import express from "express";

const productRoutes = express.Router();

const products = [
    { id: '001', price: '500' },
    { id: '002', price: '800' },
    { id: '003', price: '420' },
];

productRoutes.get('/', (req, res) => {
    res.json(products)
});
productRoutes.get('/:id', (req, res) => {
    const targetId = req.params.id;
    res.json(products[targetId]);
});

productRoutes.post('/', (req, res) => {
    const data = req.body;
    products.push(data);
    res.json(data);
});

productRoutes.delete('/:id', (req, res) => {
    const deleteId = req.params.id;
    products.splice(deleteId, 1);
    console.log(products);
    res.json({ deleteId });
});

export default productRoutes;