import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../Models/User";
import dotenv from "dotenv"; 
dotenv.config();

const router = Router();
const SECRET_KEY = process.env.JWT_SECRET as string;

// Login Route (Authenticate User)
router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Validate password using bcrypt
    const isMatch = await bcrypt.compare(password, user.getDataValue("password"));
    if (!isMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user.getDataValue("id"), email: user.getDataValue("email") }, SECRET_KEY, { expiresIn: "1h" });

    // Successfully authenticated
    res.status(200).json({
       message: "Login successful",
       token,
       user: {
         id: user.getDataValue("id"),
         email: user.getDataValue("email"),
       },
       });  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router as LoginRoutes };

