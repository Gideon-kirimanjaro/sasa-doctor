import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// pages
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
import Medical from "./pages/Medical";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <nav className="d-flex justify-content-center m-2">
        {/* <Link to="/">Pharmacy</Link>
        <Link to="/lab">Lab</Link>
        <Link to="/medical">Medical Products</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
