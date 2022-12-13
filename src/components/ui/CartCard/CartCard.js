import React from "react";
import { StyledButton } from "../StyledButton";

const CartCard = ({ src, title, price }) => {
  //   const dispatch = useDispatch();
  //   const [itemCount, setItemCount] = useState(1);

  return (
    <div>
      <div className="d-flex">
        <div>
          <img src={src} height="100px" width="150px" alt="img" />
        </div>
        <div style={{}}>
          <h4 className="d-flex justify-content-center">{title}</h4>

          <div className="d-flex">
            {" "}
            <h5 className="d-flex justify-content-center ms-3">{price} </h5>
            <h5 className="d-flex justify-content-center ms-3">*</h5>{" "}
            <StyledButton primary>-</StyledButton>
            <div>
              {" "}
              <h2>2</h2>
            </div>
            <StyledButton primary>+</StyledButton>
            <h3 className="ms-2">4500</h3>
          </div>

          <div className="d-flex justify-content-center">
            <StyledButton>Remove</StyledButton>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartCard;
