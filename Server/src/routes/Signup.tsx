import { Router, Request, Response } from "express";
import User from "../Models/User";

const router = Router();

// Signup Route (Register a User)
router.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router as signupRoutes };
