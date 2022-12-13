import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Shop.module.css";
import ShopContext from "../../store/shop-store";
import FilterComponent from "../ui/FilterComponent/FilterComponent";
import AccordionCard from "../ui/Accordion/Accordion";
import Products from "../../pages/Products";
import SubHeader from "../SubHeader/SubHeader";
const Shop = () => {
  const ctx = useContext(ShopContext);
  return (
    <div id={styles.shopDiv}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="pagetitle__heading">Our Products</h1>
            <div>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pharmacy
                </li>
              </ol>
            </div>
          </div>
        </div>{" "}
        <SubHeader />
        {/* <Categories /> */}
        <div className="d-md-flex">
          <AccordionCard accordionData={ctx.accordionData} />
          <div className="d-md-flex justify-content-between">
            <div>
              <FilterComponent />
              <Products />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
