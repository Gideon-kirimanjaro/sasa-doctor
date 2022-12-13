import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Badge, Button } from "react-bootstrap";
import styles from "./IconContainer.module.css";
const IconContainer = ({ containerIcon }) => {
  return (
    <div className="ps-2 " id={styles.iconContainer}>
      {" "}
      <Button className={styles.btn}>
        <FontAwesomeIcon icon={containerIcon} className={styles.icon} />
      </Button>
      <sup>
        {" "}
        <Badge bg="none" className={styles.badge}>
          0
        </Badge>
      </sup>
    </div>
  );
};

export default IconContainer;
