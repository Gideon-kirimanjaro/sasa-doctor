import React from "react";
import { Button } from "react-bootstrap";
import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ProductCard = ({ data }) => {
  return (
    <div className={styles.shopSection}>
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <>
                <div className="col-6 col-md-6 col-lg-3">
                  <div className={styles.productItem}>
                    <div className={styles.productImg}>
                      <Link to={`/products/${item.id}`}>
                        {" "}
                        <img
                          src="./images/dawa.JPG"
                          alt="Product"
                          loading="lazy"
                        />
                      </Link>
                    </div>

                    <div className={styles.productInfo}>
                      <h4 className={styles.productTitle}>
                        <p>{item.productTitle}</p>
                      </h4>
                      <span className={styles.productPrice}>
                        ksh {item.productPrice}
                      </span>
                      <div className="d-flex justify-content-around">
                        <Button className={styles.btn}>
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                        <Button style={{ backgroundColor: "#173479" }}>
                          <FontAwesomeIcon icon={faHeart} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
