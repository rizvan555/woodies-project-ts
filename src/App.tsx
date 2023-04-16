import React from "react";
import Header from "./components/Header";
import { Route, RouteProps, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/Abouts";
import Main from "./components/Main";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:title" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
