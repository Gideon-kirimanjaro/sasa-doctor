import React from "react";
import { Link } from "react-router-dom";
import ItemTab from "../ItemTab/ItemTab";
import "./RelatedCard.css";
const RelatedCard = ({ title, price, id }) => {
  return (
    <div class="col-sm-6 col-md-6 col-lg-3">
      <div class="product-item">
        <div class="product__img">
          <img src="/images/dawa.JPG" alt="Product" loading="lazy" />
          <div class="product__action">
            <a href="/" class="btn btn__primary btn__rounded">
              <i class="icon-cart"></i> <span>Add To Cart</span>
            </a>
          </div>
        </div>
        <div class="product__info">
          <h4 class="product__title">
            <Link to={`/products/${id}`}>{title}</Link>
          </h4>
          <span class="product__price">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
