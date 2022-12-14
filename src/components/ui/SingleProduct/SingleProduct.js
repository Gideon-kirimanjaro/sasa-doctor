import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./SingleProduct.css";
// import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ItemTab from "../ItemTab/ItemTab";
import RelatedProducts from "../../RelatedProducts/RelatedProducts";
import { Link } from "react-router-dom";
const SingleProduct = ({
  id,
  src,
  productTitle,
  productDescription,
  productPrice,
}) => {
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
      to: "/",
      class: "breadcrumb-item",
    },
    {
      id: 3,
      link: productTitle,
      class: "breadcrumb-item active",
    },
  ];
  return (
    <div>
      <BreadCrumb crumbData={crumbData} />
      <section class="shop pb-40 pt-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="alert alert-primary d-flex flex-wrap justify-content-between align-items-center mb-40">
                <h3 class="alert__title my-1">
                  "{productTitle}" has been added to your cart.
                </h3>
                <Link to="/cart" class="btn btn__secondary btn__rounded">
                  View Cart
                </Link>
              </div>
              <div class="row product-item-single">
                <div class="col-sm-6">
                  <div class="product__img">
                    <img
                      src="/images/dawa.JPG"
                      class="zoomin"
                      alt="product"
                      style={{ visibility: "visible" }}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <h1 class="product__title">{productTitle}</h1>
                  <div class="product__meta-review mb-20">
                    <span class="product__rating">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>4 Review(s)</span>
                    <a href="/">Add Review</a>
                  </div>
                  <span class="product__price mb-20">$ {productPrice}</span>
                  <div class="product__desc">
                    <p>
                      EGCG is one of the most powerful compounds in green tea.
                      Research has tested its ability to help treat various
                      diseases. It appears to be one of the main compounds that
                      gives green tea its medicinal properties (2
                    </p>
                  </div>
                  <div class="product__quantity d-flex mb-30">
                    <div class="quantity__input-wrap mr-20">
                      {" "}
                      <div className="d-flex">
                        <input type="number" value="1" class="qty-input" />
                        <div style={{ borderLeft: "solid grey" }}>
                          <button
                            style={{
                              borderBottom: "solid grey",
                              width: "100%",
                            }}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <button
                            style={{
                              width: "100%",
                            }}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <a class="btn btn__secondary btn__rounded" href="/">
                      add to cart
                    </a>
                  </div>
                  <div class="product__meta-details">
                    <ul class="list-unstyled mb-30">
                      <li>
                        <span>SKU :</span> <span>#0214</span>
                      </li>
                      <li>
                        <span>Category :</span> <span>Vitamins</span>
                      </li>
                      <li>
                        <span>Tags :</span> <span>Beauty, Supplements</span>
                      </li>
                    </ul>
                  </div>
                  <ul class="social-icons list-unstyled mb-0">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ItemTab />
              <RelatedProducts />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
