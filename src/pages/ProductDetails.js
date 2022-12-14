import { useContext } from "react";
import { useParams } from "react-router-dom";

import SingleProduct from "../components/ui/SingleProduct/SingleProduct";
import ShopContext from "../store/shop-store";

export default function ProductDetails() {
  const { id } = useParams();
  //   const { path } = useMatch();
  const ctx = useContext(ShopContext);
  const { data } = ctx;
  const product = data.filter((item) => {
    return item.id === Number(id);
  });
  console.log(">>>", product);
  return (
    <div className="container">
      {product.map((item) => {
        return (
          <SingleProduct
            key={item.id}
            src={item.src}
            id={item.id}
            productTitle={item.productTitle}
            productPrice={item.productPrice}
            productDescription={item.productDescription}
          />
        );
      })}
    </div>
  );
}
