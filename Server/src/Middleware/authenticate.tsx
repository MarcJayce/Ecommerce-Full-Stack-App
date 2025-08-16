import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"; // 
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET as string;

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Bearer token

  if (!token) return res.status(401).json({ message: "Unauthorized - No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    (req as any).user = decoded; // Attach user info to request
    next(); // Proceed to next middleware or route
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

export default authenticate;
