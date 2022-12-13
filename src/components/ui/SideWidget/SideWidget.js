import React from "react";
import "./SideWidget.css";
const SideWidget = () => {
  return (
    <div class="col-sm-12 col-md-4 col-lg-3">
      <aside class="sidebar-layout2">
        <div class="widget widget-search">
          <h5 class="widget__title">Search</h5>
          <div class="widget__content">
            <form class="widget__form-search">
              <input type="text" class="form-control" placeholder="Search..." />
              <button class="btn" type="submit">
                <i class="icon-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="widget widget-poducts">
          <h5 class="widget__title">Best Sellers</h5>
          <div class="widget__content">
            <div class="widget-product-item d-flex align-items-center">
              <div class="widget-product__img">
                <a href="/">
                  <img
                    src="assets/images/products/11.jpg"
                    alt="Product"
                    loading="lazy"
                  />
                </a>
              </div>
              <div class="widget-product__content">
                <h5 class="widget-product__title">
                  <a href="/">Calming Herps</a>
                </h5>
                <span class="widget-product__price">$ 38.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="widget widget-categories">
          <h5 class="widget__title">Categories</h5>
          <div class="widget-content">
            <ul class="list-unstyled mb-0">
              <li>
                <a href="/">
                  <span class="cat-count">4</span>
                  <span>Neurology</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span class="cat-count">0</span>
                  <span>Cardiology</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span class="cat-count">3</span>
                  <span>Pathology</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span class="cat-count">2</span>
                  <span>Laboratory</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span class="cat-count">4</span>
                  <span>Pediatric</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span class="cat-count">1</span>
                  <span>Cardiac Clinic</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="widget widget-filter">
          <h5 class="widget__title">Pricing Filter</h5>
          <div class="widget__content">
            <div
              id="rangeSlider"
              class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
            >
              <div
                class="ui-slider-range ui-corner-all ui-widget-header"
                // style="left: 16.6667%; width: 50%;"
                style={{ left: "30%", width: "50%" }}
              ></div>
              <span
                tabindex="0"
                class="ui-slider-handle ui-corner-all ui-state-default"
                style={{ left: "16.6667%" }}
              ></span>
              <span
                tabindex="0"
                class="ui-slider-handle ui-corner-all ui-state-default"
                style={{ left: "16.6667%" }}
              ></span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="price-output d-flex align-items-center">
                <label for="rangeSliderResult">Price: </label>
                <input type="text" id="rangeSliderResult" readonly="500" />
              </div>
              <button class="btn__filter">Filter</button>
            </div>
          </div>
        </div>
        <div class="widget widget-tags">
          <h5 class="widget__title">Tags</h5>
          <div class="widget-content">
            <ul class="list-unstyled">
              <li>
                <a href="/">Responsive</a>
              </li>
              <li>
                <a href="/">Fresh</a>
              </li>
              <li>
                <a href="/">Modern</a>
              </li>
              <li>
                <a href="/">Corporate</a>
              </li>
              <li>
                <a href="/">Business</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default SideWidget;
