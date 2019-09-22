import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function SlideLoading(props) {
  const { loadingDuration } = props;
  const loadingText1 = useRef(null);
  const loadingText2 = useRef(null);
  const loadingText3 = useRef(null);

  const eachLoadingDuration = loadingDuration / 3;

  useEffect(() => {
    const opacityIn = 1;
    const opacityOut = 0;
    const durationIn = (eachLoadingDuration * 1) / 2;
    const durationOut = (eachLoadingDuration * 1) / 2;
    const easing = "easeInOutQuad";

    anime
      .timeline()
      .add({
        targets: loadingText1.current,
        opacity: opacityIn,
        duration: durationIn,
        easing
      })
      .add({
        targets: loadingText1.current,
        opacity: opacityOut,
        duration: durationOut,
        easing
      })
      .add({
        targets: loadingText2.current,
        opacity: opacityIn,
        duration: durationIn,
        easing
      })
      .add({
        targets: loadingText2.current,
        opacity: opacityOut,
        duration: durationOut,
        easing
      })
      .add({
        targets: loadingText3.current,
        opacity: opacityIn,
        duration: durationIn,
        easing
      })
      .add({
        targets: loadingText3.current,
        opacity: opacityOut,
        duration: durationOut,
        easing
      });
  });

  return (
    <div className="slide slide-loading">
      <h3>
        <span className="loading-text" ref={loadingText1}>
          Using a machine learning model to crunch your answers..
        </span>
        <span className="loading-text" ref={loadingText2}>
          On a serverless server..
        </span>
        <span className="loading-text" ref={loadingText3}>
          Just kidding. This is just a setTimeout loading.
        </span>
      </h3>
    </div>
  );
}
