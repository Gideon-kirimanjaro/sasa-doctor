import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const QuantityButton = () => {
  return (
    <div class="quantity__input-wrap mr-20">
      {" "}
      <div className="d-flex">
        <input type="number" value="1" class="qty-input" />
        <div style={{ borderLeft: "solid grey" }}>
          <button
            style={{
              borderBottom: "solid grey",
              width: "100%",
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            style={{
              width: "100%",
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityButton;
