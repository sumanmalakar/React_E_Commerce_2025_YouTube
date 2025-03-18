import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Product_Detail from "./pages/Product_Detail";
import All_Product from "./components/All_Product";
import ProductByCategory from "./pages/ProductByCategory";
import Search_Product from "./pages/Search_Product";
import { ToastContainer, toast } from "react-toastify";
import TrendingSlider from "./components/Trending_Slider";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<All_Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product_Detail />} />
        <Route path="/product/search/:term" element={<Search_Product />} />
        <Route path="/product/category/:cat" element={<ProductByCategory />} />
      </Routes>
      <TrendingSlider />
    </Router>
  );
};

export default App;
