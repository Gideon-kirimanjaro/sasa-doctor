import React from "react";
import Styles from "./PaymentCard.module.css";
const PaymentCard = ({ color }) => {
  const data = [
    { id: 1, title: "Items", details: 5600, color: "green" },
    {
      id: 2,
      title: "Shipping",
      details: 200,
      color: "palevioletred",
    },
    {
      id: 3,
      title: "SubTotal",
      details: 5800,
      color: "palevioletred",
    },
    {
      id: 4,
      title: "Total",
      details: 5800,
      color: "palevioletred",
    },
  ];

  return (
    <div
      id={Styles.mainDiv}
      className="d-flex justify-content-center mt-3"
      style={{}}
    >
      <div className=" ">
        {data.map((item, index) => {
          return (
            <div
              className="d-flex"
              id={Styles.info}
              style={{ width: "100%" }}
              key={index}
            >
              <h5 className="" style={{ color: color, width: "100%" }}>
                {item.title}:
              </h5>
              <div className="d-flex justify-content-center">
                {" "}
                <p
                  className="ps-3"
                  style={{
                    width: "100%",
                    fontSize: "1.3rem",
                    marginLeft: item.padding,
                  }}
                >
                  {item.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentCard;
