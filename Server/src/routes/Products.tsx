import { Router, Request, Response } from "express";
import Product from "../Models/Products";

const router = Router();

// Get All Products
router.get("/", async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get Product by ID
router.get("/:id", async (req: Request, res: Response) => {
    try{
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.status(200).json(product);
        }else{
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
    

export { router as FetchProductRoutes };