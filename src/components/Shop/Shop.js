import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Shop.css";
// import ShopContext from "../../store/shop-store";

import Product from "../Products/Product";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
const Shop = () => {
  const crumbData = [
    {
      id: 1,
      link: "home",
      to: "/",
      class: "breadcrumb-item",
    },
    {
      id: 2,
      link: "pharmacy",
      class: "breadcrumb-item active",
    },
  ];
  return (
    <div>
      {" "}
      <section class="page-title page-title-layout5 text-center d-flex justify-content-center bg-img">
        <BreadCrumb crumbData={crumbData} />
      </section>
      <Product />
    </div>
  );
};

export default Shop;
