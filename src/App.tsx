import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/Abouts";
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
