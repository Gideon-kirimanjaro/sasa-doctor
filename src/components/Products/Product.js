import React, { useContext } from "react";
import ShopContext from "../../store/shop-store";
import SortComponent from "../SortComponent/SortComponent";
import Pagination from "../ui/Pagination/Pagination";
import ProductCard from "../ui/ProductCard/ProductCard";

import SideWidget from "../ui/SideWidget/SideWidget";
import "./NewProduct.css";
const Product = () => {
  const ctx = useContext(ShopContext);
  return (
    <>
      <section class="shop-grid">
        <div class="container ">
          <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-9">
              <SortComponent />
              <div class="row">
                {ctx.data.map((item, i) => {
                  return (
                    <ProductCard
                      title={item.productTitle}
                      price={item.productPrice}
                      src={item.src}
                      id={item.id}
                    />
                  );
                })}
              </div>
            </div>
            <SideWidget />
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default Product;
