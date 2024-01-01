import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import timber_houses_a from "@/assets/images/timber_houses/timber_houses_a.jpg";
import timber_houses_b from "@/assets/images/timber_houses/timber_houses_b.jpg";
import timber_houses_c from "@/assets/images/timber_houses/timber_houses_c.jpg";
import timber_houses_d from "@/assets/images/timber_houses/timber_houses_d.jpg";
import timber_houses_g from "@/assets/images/timber_houses/timber_houses_g.jpg";
import timber_houses_h from "@/assets/images/timber_houses/timber_houses_h.jpg";
import timber_houses_i from "@/assets/images/timber_houses/timber_houses_i.jpg";
import timber_houses_j from "@/assets/images/timber_houses/timber_houses_j.jpg";

import kitchen_livingroom_a from "@/assets/images/kitchen_livingroom/kitchen_livingroom_a.jpg";
import kitchen_livingroom_b from "@/assets/images/kitchen_livingroom/kitchen_livingroom_b.jpg";
import kitchen_livingroom_c from "@/assets/images/kitchen_livingroom/kitchen_livingroom_c.jpg";
import kitchen_livingroom_d from "@/assets/images/kitchen_livingroom/kitchen_livingroom_d.jpg";
import kitchen_livingroom_e from "@/assets/images/kitchen_livingroom/kitchen_livingroom_e.jpg";
import kitchen_livingroom_f from "@/assets/images/kitchen_livingroom/kitchen_livingroom_f.jpg";
import kitchen_livingroom_g from "@/assets/images/kitchen_livingroom/kitchen_livingroom_g.jpg";

import leviathan_axe_a from "@/assets/images/leviathan_axe/leviathan_axe_a.jpg";
import leviathan_axe_b from "@/assets/images/leviathan_axe/leviathan_axe_b.jpg";
import leviathan_axe_c from "@/assets/images/leviathan_axe/leviathan_axe_c.jpg";
import leviathan_axe_d from "@/assets/images/leviathan_axe/leviathan_axe_d.jpg";
import leviathan_axe_e from "@/assets/images/leviathan_axe/leviathan_axe_e.jpg";
import leviathan_axe_f from "@/assets/images/leviathan_axe/leviathan_axe_f.jpg";
import leviathan_axe_g from "@/assets/images/leviathan_axe/leviathan_axe_g.jpg";
import leviathan_axe_h from "@/assets/images/leviathan_axe/leviathan_axe_h.jpg";
import leviathan_axe_i from "@/assets/images/leviathan_axe/leviathan_axe_i.jpg";
import leviathan_axe_j from "@/assets/images/leviathan_axe/leviathan_axe_j.jpg";
import leviathan_axe_k from "@/assets/images/leviathan_axe/leviathan_axe_k.jpg";

import modern_kitchen_a from "@/assets/images/modern_kitchen/modern_kitchen_a.jpg";
import modern_kitchen_b from "@/assets/images/modern_kitchen/modern_kitchen_b.jpg";
import modern_kitchen_c from "@/assets/images/modern_kitchen/modern_kitchen_c.jpg";
import modern_kitchen_d from "@/assets/images/modern_kitchen/modern_kitchen_d.jpg";
import modern_kitchen_e from "@/assets/images/modern_kitchen/modern_kitchen_e.jpg";
import modern_kitchen_f from "@/assets/images/modern_kitchen/modern_kitchen_f.jpg";
import modern_kitchen_g from "@/assets/images/modern_kitchen/modern_kitchen_g.jpg";
import modern_kitchen_h from "@/assets/images/modern_kitchen/modern_kitchen_h.jpg";
import modern_kitchen_i from "@/assets/images/modern_kitchen/modern_kitchen_i.jpg";
import modern_kitchen_j from "@/assets/images/modern_kitchen/modern_kitchen_j.jpg";
import modern_kitchen_k from "@/assets/images/modern_kitchen/modern_kitchen_k.jpg";
import modern_kitchen_l from "@/assets/images/modern_kitchen/modern_kitchen_l.jpg";
import modern_kitchen_m from "@/assets/images/modern_kitchen/modern_kitchen_m.jpg";
import modern_kitchen_n from "@/assets/images/modern_kitchen/modern_kitchen_n.jpg";

import landing_page_a from "@/assets/images/landing_page/landing_page_a.jpg";
import landing_page_b from "@/assets/images/landing_page/landing_page_b.jpg";
import landing_page_c from "@/assets/images/landing_page/landing_page_c.jpg";
import landing_page_d from "@/assets/images/landing_page/landing_page_d.jpg";
import landing_page_e from "@/assets/images/landing_page/landing_page_e.jpg";
import landing_page_f from "@/assets/images/landing_page/landing_page_f.jpg";
import landing_page_g from "@/assets/images/landing_page/landing_page_g.jpg";
import landing_page_h from "@/assets/images/landing_page/landing_page_h.jpg";
import landing_page_i from "@/assets/images/landing_page/landing_page_i.jpg";
import landing_page_j from "@/assets/images/landing_page/landing_page_j.jpg";
import landing_page_k from "@/assets/images/landing_page/landing_page_k.jpg";
import landing_page_l from "@/assets/images/landing_page/landing_page_l.jpg";
import landing_page_m from "@/assets/images/landing_page/landing_page_m.jpg";
import landing_page_n from "@/assets/images/landing_page/landing_page_n.jpg";
import landing_page_o from "@/assets/images/landing_page/landing_page_o.jpg";
import landing_page_p from "@/assets/images/landing_page/landing_page_p.jpg";

class CarouselDisplay extends Component {
  render() {
    return (
      <>
        <div className="carousel_container">
          <div className="carousel">
            <span className="carousel_title">Timber Houses</span>
            <Carousel dynamicHeight={true} infiniteLoop={true} transitionTime={100}>
              <div>
                <img src={timber_houses_h} />
              </div>
              <div>
                <img src={timber_houses_g} />
              </div>
              <div>
                <img src={timber_houses_d} />
              </div>
              <div>
                <img src={timber_houses_c} />
              </div>
              <div>
                <img src={timber_houses_b} />
              </div>
              <div>
                <img src={timber_houses_a} />
              </div>
              <div>
                <img src={timber_houses_i} />
              </div>
              <div>
                <img src={timber_houses_j} />
              </div>
            </Carousel>
          </div>
          <div className="carousel">
            <span className="carousel_title">Modern Kitchen + Livingroom</span>
            <Carousel dynamicHeight={true} infiniteLoop={true} transitionTime={100}>
              <div>
                <img src={kitchen_livingroom_a} />
              </div>
              <div>
                <img src={kitchen_livingroom_b} />
              </div>
              <div>
                <img src={kitchen_livingroom_c} />
              </div>
              <div>
                <img src={kitchen_livingroom_d} />
              </div>
              <div>
                <img src={kitchen_livingroom_e} />
              </div>
              <div>
                <img src={kitchen_livingroom_f} />
              </div>
              <div>
                <img src={kitchen_livingroom_g} />
              </div>
            </Carousel>
          </div>
          <div className="carousel">
            <span className="carousel_title">Leviathan Axe</span>
            <Carousel dynamicHeight={true} infiniteLoop={true} transitionTime={100}>
              <div>
                <img src={leviathan_axe_i} />
              </div>
              <div>
                <img src={leviathan_axe_h} />
              </div>
              <div>
                <img src={leviathan_axe_g} />
              </div>
              <div>
                <img src={leviathan_axe_f} />
              </div>
              <div>
                <img src={leviathan_axe_e} />
              </div>
              <div>
                <img src={leviathan_axe_d} />
              </div>
              <div>
                <img src={leviathan_axe_c} />
              </div>
              <div>
                <img src={leviathan_axe_b} />
              </div>
              <div>
                <img src={leviathan_axe_a} />
              </div>
              <div>
                <img src={leviathan_axe_j} />
              </div>
              <div>
                <img src={leviathan_axe_k} />
              </div>
            </Carousel>
          </div>
          <div className="carousel">
            <span className="carousel_title">Modern Kitchen</span>
            <Carousel dynamicHeight={true} infiniteLoop={true} transitionTime={100}>
              <div>
                <img src={modern_kitchen_k} />
              </div>
              <div>
                <img src={modern_kitchen_j} />
              </div>
              <div>
                <img src={modern_kitchen_i} />
              </div>
              <div>
                <img src={modern_kitchen_h} />
              </div>
              <div>
                <img src={modern_kitchen_g} />
              </div>
              <div>
                <img src={modern_kitchen_f} />
              </div>
              <div>
                <img src={modern_kitchen_e} />
              </div>
              <div>
                <img src={modern_kitchen_d} />
              </div>
              <div>
                <img src={modern_kitchen_c} />
              </div>
              <div>
                <img src={modern_kitchen_b} />
              </div>
              <div>
                <img src={modern_kitchen_a} />
              </div>
              <div>
                <img src={modern_kitchen_l} />
              </div>
              <div>
                <img src={modern_kitchen_m} />
              </div>
              <div>
                <img src={modern_kitchen_n} />
              </div>
            </Carousel>
          </div>
          <div className="carousel">
            <span className="carousel_title">Landing Page</span>
            <Carousel dynamicHeight={true} infiniteLoop={true} transitionTime={100}>
              <div>
                <img src={landing_page_m} />
              </div>
              <div>
                <img src={landing_page_l} />
              </div>
              <div>
                <img src={landing_page_k} />
              </div>
              <div>
                <img src={landing_page_j} />
              </div>
              <div>
                <img src={landing_page_i} />
              </div>
              <div>
                <img src={landing_page_h} />
              </div>
              <div>
                <img src={landing_page_g} />
              </div>
              <div>
                <img src={landing_page_f} />
              </div>
              <div>
                <img src={landing_page_e} />
              </div>
              <div>
                <img src={landing_page_d} />
              </div>
              <div>
                <img src={landing_page_c} />
              </div>
              <div>
                <img src={landing_page_b} />
              </div>
              <div>
                <img src={landing_page_a} />
              </div>
              <div>
                <img src={landing_page_n} />
              </div>
              <div>
                <img src={landing_page_o} />
              </div>
              <div>
                <img src={landing_page_p} />
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default CarouselDisplay;
