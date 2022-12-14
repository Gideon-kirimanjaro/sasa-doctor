import React, { useContext } from "react";
import BreadCrumb from "../components/ui/BreadCrumb/BreadCrumb";
import CartCard from "../components/ui/CartCard/CartCard";
import ShopContext from "../store/shop-store";

const Cart = () => {
  const ctx = useContext(ShopContext);

  return (
    <div>
      <BreadCrumb />
      <CartCard data={ctx.cartData} />
    </div>
  );
};

export default Cart;
