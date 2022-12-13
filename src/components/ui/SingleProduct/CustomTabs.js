import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Styles from "./CustomTabs.module.css";
const CustomTabs = ({ productTitle, productDescription }) => {
  return (
    <div className={Styles.tabsDiv}>
      <div className="container">
        <Tabs
          defaultActiveKey="description"
          id="uncontrolled-tab-example"
          className="mb-3 "
        >
          <Tab eventKey="description" title="Description">
            <p className={Styles.description}>{productDescription}</p>
          </Tab>
          <Tab eventKey="d&c" title="Delivery ">
            <p className={Styles.description}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </Tab>
          <Tab eventKey="rev" title="Reviews">
            <p className={Styles.description}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomTabs;
