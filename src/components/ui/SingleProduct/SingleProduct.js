import React from "react";
import styles from "./SingleProduct.module.css";
const SingleProduct = ({ id, src, productTitle, productDescription }) => {
  return (
    <div className="d-flex justify-content-between" key={id}>
      <div className="image">
        <img src={src} alt="" />
      </div>
      <div className={styles.description}>
        <div className={styles.innerDiv}>
          <h2>Product - {id}</h2>
          <h4>{productTitle}</h4>
          <p>{productDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
