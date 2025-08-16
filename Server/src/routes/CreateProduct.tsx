import { Router, Request, Response } from "express";
import Product from "../Models/Products";

const router = Router();

// Create Product Route
router.post("/", async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const newProduct = await Product.create({
            name: req.body.name,
            type: req.body.type,
            image: req.body.image,
            price: req.body.price,
        });
        res.status(201).json({ message: "Product created successfully", newProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Delete Item Route
router.delete("/products/:id", async (req: Request, res: Response) => {
    const productId = req.params.id;
    try {
    const deleted = await Product.destroy({ where: { id: productId } });
    if (deleted) {
      res.status(200).json({ message: `Product ${productId} deleted.` });
    } else {
      res.status(404).json({ message: `Product ${productId} not found.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Deletion failed.' });
  }
});
export { router as ProductRoutes };