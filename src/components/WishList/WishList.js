import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IconContainer from "../ui/IconContainer/IconContainer";
const WishList = () => {
  return (
    <div>
      <div className>
        <IconContainer containerIcon={faHeart} />
      </div>
    </div>
  );
};

export default WishList;
