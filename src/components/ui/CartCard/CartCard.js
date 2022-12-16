import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./CartCard.css";
import QuantityButton from "../QuantityButton/QuantityButton";
const CartCard = ({ data }) => {
  return (
    <section class="shopping-cart pt-0 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="cart-table table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
                    return (
                      <tr class="cart-product">
                        <td class="d-flex align-items-center">
                          <FontAwesomeIcon
                            className="cart-product__remove"
                            icon={faX}
                          />
                          <div class="cart-product__img">
                            <img src={item.src} alt="product" />
                          </div>
                          <h5 class="cart-product__title">
                            {item.productTitle}
                          </h5>
                        </td>
                        <td class="cart-product__price">
                          <span>$ {item.productPrice}</span>
                        </td>
                        <td class="cart-product__quantity">
                          <QuantityButton />
                        </td>
                        <td class="cart-product__total">
                          <span>$ 39.00</span>
                        </td>
                      </tr>
                    );
                  })}

                  <tr class="cart-product__action">
                    <td colspan="4">
                      <div class="cart-product__action-content d-md-flex align-items-center justify-content-between">
                        <form class="d-flex flex-wrap">
                          <input
                            type="text"
                            class="form-control mb-2 me-5 mt-3"
                            placeholder="Coupon Code"
                          />
                          <button
                            type="submit"
                            class="btn btn__secondary mb-2 me-5 mt-3"
                          >
                            Apply Coupon
                          </button>
                        </form>
                        <div>
                          <Link class="btn btn__secondary me-3" to="/">
                            update cart
                          </Link>
                          <Link class="btn btn__secondary" to="/checkout">
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="cart__total-amount">
              <h6>Cart Totals</h6>
              <ul class="list-unstyled mb-30">
                <li>
                  <span>Cart Subtotal :</span>
                  <span>$ 140.00</span>
                </li>
                <li>
                  <span>Order Total :</span>
                  <span>$ 140.00</span>
                </li>
              </ul>
              <Link to="/checkout" class="btn btn__primary">
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartCard;
