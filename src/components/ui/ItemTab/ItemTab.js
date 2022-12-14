import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./ItemTab.css";
function ItemTab() {
  return (
    <Tabs
      defaultActiveKey="description"
      id="uncontrolled-tab-example"
      className="nav nav-tabs mt-3"
    >
      <Tab eventKey="description" title="Description" className="nav__link">
        <p>
          It doesn’t contain as much as coffee, but enough to produce a response
          without causing the jittery effects associated with taking in too much
          caffeine. Caffeine affects the brain by blocking an inhibitory
          neurotransmitter called adenosine. This way, it increases the firing
          of neurons and the concentration of neurotransmitters like dopamine
          and norepinephrine (4Trusted Source, 5). Research has consistently
          shown that caffeine can improve various aspects of brain function,
          including mood, vigilance, reaction time, and memory (6).
        </p>
      </Tab>
      <Tab eventKey="details" title="Details" className="nav__link">
        <p>
          Yorks is not just about graphic design; it's more than that. We offer
          integral communication services, and we're responsible for our process
          and results. We thank each of our clients and their portfolios; thanks
          to them we have grown and built what we are today! After all
        </p>
        <p>
          as described in Web Design Trends 2015 &amp; 2016, vision dominates a
          lot of our subconscious interpretation of the world around us. On top
          of that, pleasing images create a better user experience. At League
          Agency, we shows only the best websites and portfolios built
          completely with passion, simplicity &amp; creativity !
        </p>
      </Tab>
      <Tab eventKey="reviews" title="Reviews(3)" className="nav__link">
        <form class="reviews__form">
          <div className="form-group mb-2">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div className="form-group mb-2">
            <input type="text" class="form-control" placeholder="Email" />
          </div>
          <div class="form-group mb-2">
            <textarea className="form-control" placeholder="Review"></textarea>
          </div>
          <button type="submit" class="btn btn__primary btn__rounded mb-2">
            Submit
          </button>
        </form>
      </Tab>
    </Tabs>
  );
}

export default ItemTab;
