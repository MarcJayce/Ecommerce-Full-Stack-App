import dotenv from "dotenv";
import express, { Request, Response } from "express";
import sequelize from "./sequelize";
import {signupRoutes} from "./routes/Signup";
import {LoginRoutes} from "./routes/Login";
import {ProductRoutes} from "./routes/CreateProduct";
import {FetchProductRoutes} from "./routes/Products";
import cors from "cors";
import authenticate from "./Middleware/authenticate";
import { RequestHandler } from "express";

dotenv.config();

const app = express();
const port: number = 3000;
app.use(express.json()); 
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend dev URL (Vite)
    credentials: true,
  })
);

// Test database connection before starting the server
sequelize
  .authenticate()
  .then(() => console.log("✅ Connected to MySQL!"))
  .catch((err) => {
    console.error("❌ MySQL connection failed:", err);
    process.exit(1); // Exit the process if the DB fails to connect
  });
// example route get request
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express with TypeScript!");
});
// routes
app.use("/signup", signupRoutes);
app.use("/login", LoginRoutes);
app.use("/create-product", ProductRoutes);
app.use("/products", FetchProductRoutes);

// Middleware to protect routes
app.use(authenticate as RequestHandler);
app.get("/api/protected", authenticate as RequestHandler, (req, res) => {
  res.json({ message: "Protected content", user: (req as any).user });
});


app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
