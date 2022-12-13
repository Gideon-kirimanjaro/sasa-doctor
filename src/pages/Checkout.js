import React, { useContext } from "react";
import CartCard from "../components/ui/CartCard/CartCard";
import PaymentCard from "../components/ui/PaymentCard/PaymentCard";
import ShopContext from "../store/shop-store";

const Checkout = () => {
  const ctx = useContext(ShopContext);
  return (
    <div className="d-md-flex justify-content-around">
      <div>
        {ctx.cartData.map((item) => {
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
        })}
      </div>
      <div>
        <h4 className="d-flex justify-content-center">
          <u>PAYMENT SUMMARY</u>
        </h4>
        <PaymentCard />
        <h3 className="d-flex justify-content-center">Payment Options</h3>
        <ul className="d-flex justify-content-center">
          <li>Credit Card</li>
        </ul>
      </div>
    </div>
  );
};

export default Checkout;
