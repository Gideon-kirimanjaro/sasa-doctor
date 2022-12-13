import React from "react";
import "./Pagination.css";
const Pagination = () => {
  return (
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 text-center">
        <nav class="pagination-area">
          <ul class="pagination justify-content-center">
            <li>
              <a class="current" href="/">
                1
              </a>
            </li>
            <li>
              <a href="/">2</a>
            </li>
            <li>
              <a href="/">
                <i class="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
