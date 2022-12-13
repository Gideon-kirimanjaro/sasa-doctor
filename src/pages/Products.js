import React, { useContext } from "react";
import ProductCard from "../components/ui/ProductCard/ProductCard";
import ShopContext from "../store/shop-store";

const Products = () => {
  const ctx = useContext(ShopContext);
  return (
    <div>
      <ProductCard data={ctx.data} />
    </div>
  );
};

export default Products;
