import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="pure-g">
            <div className="pure-u-1-3">
              <p>Thirds</p>
            </div>
            <div className="pure-u-1-3">
              <p>Thirds</p>
            </div>
            <div className="pure-u-1-3">
              <p>Thirds</p>
            </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
