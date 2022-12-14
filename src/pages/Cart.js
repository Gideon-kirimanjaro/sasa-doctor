import React, { useContext } from "react";
import BreadCrumb from "../components/ui/BreadCrumb/BreadCrumb";
import CartCard from "../components/ui/CartCard/CartCard";
import ShopContext from "../store/shop-store";

const Cart = () => {
  const ctx = useContext(ShopContext);
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
      link: "cart",
      class: "breadcrumb-item active",
    },
  ];
  return (
    <div>
      <BreadCrumb crumbData={crumbData} />
      <CartCard data={ctx.cartData} />
    </div>
  );
};

export default Cart;
