import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";

import React from "react";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartCard from "../CartCard/CartCard";
import ShopContext from "../../../store/shop-store";
import { Link } from "react-router-dom";
import IconContainer from "../IconContainer/IconContainer";
import { StyledButton } from "../StyledButton";

const CustomModal = (props) => {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-empty-pattern
  const [] = useState([]);
  const ctx = useContext(ShopContext);
  const handleClose = () => {
    setShow(false);
  };
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(1);
  const handleShow = () => setShow(true);
  console.log(">>>>ctx", ctx);
  const ModalBody = () => {
    const cartCardItems = ctx.cartData.map((item) => {
      return (
        <>
          <CartCard
            key={item.id}
            product={item}
            src={item.src}
            title={item.productTitle}
            price={item.productPrice}
            id={item.id}
          />{" "}
        </>
      );
    });
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {ctx.cartData.length === 0 ? (
            <p>Add Items To cart !</p>
          ) : (
            cartCardItems
          )}
        </Modal.Body>
        {ctx.cartData.length === 0 ? null : (
          <Modal.Footer>
            <StyledButton onClick={handleClose}>
              <Link style={{ textDecoration: "none" }} to="/checkOut">
                Proceed to Checkout
              </Link>
            </StyledButton>
          </Modal.Footer>
        )}
      </Modal>
    );
  };

  return (
    <>
      <div onClick={handleShow}>
        <IconContainer containerIcon={faShoppingCart} />
      </div>
      {typeof window !== "undefined"
        ? ReactDOM.createPortal(<ModalBody />, document.getElementById("modal"))
        : null}
    </>
  );
};
export default CustomModal;
