import React from "react";

const SideWidget = () => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3">
      <div className="container">
        <aside className="sidebar-layout2">
          <div className="widget widget-poducts">
            <h5 className="widget__title">Best Sellers</h5>
            <div className="widget__content">
              <div className="widget-product-item d-flex align-items-center">
                <div className="widget-product__img">
                  <a href="#">
                    <img
                      src="assets/images/products/11.jpg"
                      alt="Product"
                      loading="lazy"
                    />
                  </a>
                </div>

                <div className="widget-product__content">
                  <h5 className="widget-product__title">
                    <a href="#">Calming Herps</a>
                  </h5>
                  <span className="widget-product__price">$ 38.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="widget widget-categories">
            <h5 className="widget__title">Categories</h5>
            <div className="widget-content">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#">
                    <span className="cat-count">4</span>
                    <span>Neurology</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="cat-count">0</span>
                    <span>Cardiology</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="cat-count">3</span>
                    <span>Pathology</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="cat-count">2</span>
                    <span>Laboratory</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="cat-count">4</span>
                    <span>Pediatric</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="cat-count">1</span>
                    <span>Cardiac Clinic</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="widget widget-filter">
            <h5 className="widget__title">Pricing Filter</h5>
            <div className="widget__content">
              <div id="rangeSlider"></div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="price-output d-flex align-items-center">
                  <label for="rangeSliderResult">Price: </label>
                  <input type="text" id="rangeSliderResult" readonly />
                </div>
                <button className="btn__filter">Filter</button>
              </div>
            </div>
          </div>

          <div className="widget widget-tags">
            <h5 className="widget__title">Tags</h5>
            <div className="widget-content">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Responsive</a>
                </li>
                <li>
                  <a href="#">Fresh</a>
                </li>
                <li>
                  <a href="#">Modern</a>
                </li>
                <li>
                  <a href="#">Corporate</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SideWidget;
