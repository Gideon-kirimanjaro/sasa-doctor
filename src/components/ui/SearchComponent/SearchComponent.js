import React from "react";
import styles from "./SearchComponent.module.css";
const SearchComponent = () => {
  return (
    <div className="widget widget-search">
      <div className="widget__content">
        <form className="widget__form-search">
          <input
            type="text"
            className={styles.formControl}
            placeholder="Search for products..."
          />
          <button className="btn" type="submit">
            <i className="icon-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
