import React from "react";
import "./BreadCrumb.css";
import { Link } from "react-router-dom";
const BreadCrumb = ({ crumbData }) => {
  return (
    <section class=" pt-30 pb-30">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="d-flex ">
                {crumbData.map((item, i) => {
                  return (
                    <>
                      <li class={item.class}>
                        <Link to={item.to}>{item.link}</Link>
                      </li>{" "}
                    </>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
