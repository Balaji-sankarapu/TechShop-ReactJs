import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import Home from "../component/Home";
import data from "../data/data";
import ProductDetails from "../pages/ProductDetails";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/allproducts" element={<AllProducts data={data}/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails/>}/>
    </Routes>
  );
}
