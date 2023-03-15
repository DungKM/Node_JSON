import express from "express";
import { get, getAll, post, put, remove } from "../controllers/products";

const router = express.Router();


router.get('/products', getAll);
router.get('/products/:id', get);
router.post('/products', post);
router.delete('/products/:id', remove);
router.put('/products/:id', put);

export default router;