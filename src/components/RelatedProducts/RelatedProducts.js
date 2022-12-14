import React, { useContext } from "react";
import ShopContext from "../../store/shop-store";
import RelatedCard from "../ui/RelatedCard/RelatedCard";
const RelatedProducts = () => {
  const ctx = useContext(ShopContext);

  return (
    <div>
      <h6 class="related__products-title text-center-xs mb-25">
        Related Products
      </h6>
      <div class="row">
        {ctx.cartData.map((item, i) => {
          return (
            <RelatedCard
              key={i}
              title={item.productTitle}
              price={item.productPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
