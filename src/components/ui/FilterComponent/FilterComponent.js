import React from "react";

const FilterComponent = () => {
  return (
    <div class="container sorting-options d-flex flex-wrap justify-content-between align-items-center ">
      <span>Showing 1:9 of 45 product</span>
      <select>
        <option selected="" value="0">
          Sort by latest
        </option>
        <option value="1">Sort by Popular</option>
        <option value="2">Sort by highest Price</option>
        <option value="3">Sort by lowest Price</option>
      </select>
    </div>
  );
};

export default FilterComponent;
