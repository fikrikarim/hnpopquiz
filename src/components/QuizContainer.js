import React from "react";
import Slider from "react-slick";
import SlideLanding from "./SlideLanding";
import SlideQuestion from "./SlideQuestion";
import quizList from "../quizList.json";

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
        <div className="slide slide-landing">
          <SlideLanding />
        </div>
        {quizList.map(quiz => (
          <div className="slide slide-question">
            <SlideQuestion quiz={quiz} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default SimpleSlider;
