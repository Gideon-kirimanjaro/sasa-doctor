import "./App.css";
import Shop from "./components/Shop/Shop";
import "bootstrap/dist/css/bootstrap.min.css";

// pages
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Medical from "./pages/Medical";

function App() {
  return (
    <div className="App">
      <nav className="d-flex justify-content-center">
        <Link to="/">Pharmacy</Link>
        <Link to="/lab">Lab</Link>
        <Link to="/medical">Medical Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
