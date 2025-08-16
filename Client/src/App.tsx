import "./App.css";
import "./Page-Css/SignupPage.css";
import "./Page-Css/Carousel.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ShoppingPage from "./Pages/ShoppingPage";
import ProductPage from "./Pages/ProductPage";
import CMS from "./Pages/CMS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Shop" element={<ShoppingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/CMS" element={<CMS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
