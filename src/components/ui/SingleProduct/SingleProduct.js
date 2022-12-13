import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./SingleProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../StyledButton";
import CustomTabs from "./CustomTabs";
const SingleProduct = ({
  id,
  src,
  productTitle,
  productDescription,
  productPrice,
}) => {
  const [count, setCount] = useState(1);
  const increaseItem = () => {
    setCount(count + 1);
  };
  const decreaseItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div
        className="container d-md-flex justify-content-around"
        key={id}
        id={styles.container}
      >
        <div className="d-flex justify-content-center">
          <img src={src} alt="" className={styles.img} />
        </div>
        <div className={styles.description}>
          <div className={styles.innerDiv}>
            <h4 className={styles.title}>
              {productTitle}- {id}
            </h4>
            <h4 className={styles.price}>ksh {productPrice}</h4>
            <h3>Quantity</h3>
            <Button className={styles.btn} onClick={decreaseItem}>
              <FontAwesomeIcon icon={faMinus} />
            </Button>
            <input value={count} className={styles.countInput} />{" "}
            <Button className={styles.btn} onClick={increaseItem}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <StyledButton>Add to Cart</StyledButton>
            <CustomTabs
              productTitle={productTitle}
              productDescription={productDescription}
            />
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default SingleProduct;
