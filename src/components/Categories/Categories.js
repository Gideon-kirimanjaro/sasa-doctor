import React from "react";
import "./Categories.css";
const Categories = () => {
  return (
    <div className="container" id="main">
      <nav>
        <label for="drop" class="toggle">
          &#8801;Shop by category
        </label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <label for="drop-2" class="toggle">
              Healthcare +
            </label>
            <a href="/">Shop by Categories</a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <label for="drop-3" class="toggle">
                  Lorem +
                </label>
                <a href="/">Lorem </a>
                <input type="checkbox" id="drop-3" />
                <ul>
                  <li>
                    <a href="/">Neurology</a>
                  </li>
                  <li>
                    <a href="/">Cardiology</a>
                  </li>
                  <li>
                    <a href="/">Pathology</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Categories;
