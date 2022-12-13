import React from "react";
import Pagination from "../Pagination/Pagination";
import SideWidget from "../SideWidget/SideWidget";
import "./NewProduct.css";
const NewProduct = () => {
  return (
    <>
      <section class="shop-grid">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-9">
              <div class="sorting-options d-flex flex-wrap justify-content-between align-items-center mb-30">
                <span>Showing 1:9 of 45 product</span>
                <select>
                  <option selected="" value="0">
                    Sort by latest
                  </option>
                  <option value="1">Sort by Popular</option>
                  <option value="2">Sort by highest Price </option>
                  <option value="3">Sort by lowest Price </option>
                </select>
              </div>{" "}
              <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-4">
                  <div class="product-item">
                    <div class="product__img">
                      <img
                        src="assets/images/products/1.jpg"
                        alt="Product"
                        loading="lazy"
                      />
                      <div class="product__action">
                        <a href="/" class="btn btn__primary btn__rounded">
                          <i class="icon-cart"></i> <span>Add To Cart</span>
                        </a>
                      </div>
                    </div>
                    <div class="product__info">
                      <h4 class="product__title">
                        <a href="/">Calming Herps</a>
                      </h4>
                      <span class="product__price">$18.99</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4">
                  <div class="product-item">
                    <div class="product__img">
                      <img
                        src="assets/images/products/1.jpg"
                        alt="Product"
                        loading="lazy"
                      />
                      <div class="product__action">
                        <a href="/" class="btn btn__primary btn__rounded">
                          <i class="icon-cart"></i> <span>Add To Cart</span>
                        </a>
                      </div>
                    </div>
                    <div class="product__info">
                      <h4 class="product__title">
                        <a href="/">Calming Herps</a>
                      </h4>
                      <span class="product__price">$18.99</span>
                    </div>
                  </div>
                </div>
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

export default NewProduct;
