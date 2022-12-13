import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Shop.css";
// import ShopContext from "../../store/shop-store";

import NewProduct from "../ui/ProductCard/NewProduct";
const Shop = () => {
  // const ctx = useContext(ShopContext);
  return (
    <div>
      <section class="page-title page-title-layout5 text-center bg-img">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="pagetitle__heading">Our Products</h1>
              <nav>
                <ol class="breadcrumb justify-content-center mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <SubHeader /> */}
      {/* <Categories /> */}
      <NewProduct />
      {/* <div className="d-md-flex">
        <div className="d-md-flex justify-content-between">
          <div>
            <FilterComponent />
            <Products />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Shop;
