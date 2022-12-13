import React from "react";
import Cart from "../Cart/Cart";
import SearchComponent from "../ui/SearchComponent/SearchComponent";
import WishList from "../WishList/WishList";

const SubHeader = () => {
  return (
    <div style={{ postion: "fixed" }}>
      <div className="d-flex justify-content-between pt-5 ">
        <img
          src="/images/LOGO.png"
          alt="logo"
          style={{
            height: "50px",
            width: "100px",
            marginRight: "4px",
          }}
        />
        <SearchComponent />
        <div className="d-flex ">
          <WishList />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
