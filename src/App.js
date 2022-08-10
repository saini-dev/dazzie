import React from "react";
import "./App.css";
import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductFood from "./components/ProductFood";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import EditProduct from "./components/EditProduct";
import Coupons from "./components/Coupons";
import Shifts from "./components/Shifts";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/food" element={<ProductFood />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/shifts" element={<Shifts />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
