import React from "react";
import { Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Styles from "./Accordion.module.css";
const AccordionCard = ({ accordionData }) => {
  return (
    <div className={Styles.container}>
      <div className="mb-2 mx-4">
        <Accordion defaultActiveKey="0" className="" id={Styles.accordion}>
          {accordionData.map((item, index) => {
            return (
              <Accordion.Item eventKey={item.key}>
                <Accordion.Header className={Styles.accordionHeader}>
                  <h5>{item.title}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  {/* {body} */}
                  {item.categories.map((category) => {
                    return (
                      <Form.Check
                        type="checkbox"
                        id={`default-checkbox`}
                        label={category}
                      />
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionCard;
