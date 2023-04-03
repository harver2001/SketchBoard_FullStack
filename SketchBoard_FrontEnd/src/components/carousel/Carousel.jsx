import React, { useState } from "react";
import Carousel from "react-elastic-carousel"; // npm install styled-components
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import a1 from "./a1.jpg";
import a2 from "./a2.jpg";
import a3 from "./a3.jpg";
import a4 from "./a4.jpg";
import a5 from "./a5.jpg";
import a6 from "./a6.jpg";
import a7 from "./a7.jpg";
import a8 from "./a8.jpg";
import a9 from "./a9.jpg";
import a10 from "./a10.jpg";
import a11 from "./a11.jpg";
import a12 from "./a12.jpg";
import a13 from "./a13.jpg";
import a14 from "./a14.jpg";
import a15 from "./a15.jpg";
import a16 from "./a16.jpg";
import a17 from "./a17.jpg";
import a18 from "./a18.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ImageCarousel = () => {
  // const responsive = {
  //   0: {
  //     items: 2,
  //   },
  //   512: {
  //     items: 4,
  //   },
  // }

  return (
    <div className="image-carousel">
      <Carousel breakPoints={breakPoints}>
          <div><img height="340px" width="700px" src={a8}></img></div>
          <div><img height="340px" width="700px" src={a2}></img></div>
          <div><img height="340px" width="700px" src={a5}></img></div>
          <div><img height="340px" width="700px" src={a3}></img></div>
          <div><img height="340px" width="700px" src={a16}></img></div>
          <div><img height="340px" width="700px" src={a18}></img></div>
          <div><img height="340px" width="700px" src={a6}></img></div>
          <div><img height="340px" width="700px" src={a10}></img></div>
          <div><img height="340px" width="700px" src={a9}></img></div>
          <div><img height="340px" width="700px" src={a1}></img></div>
          <div><img height="340px" width="700px" src={a11}></img></div>
          <div><img height="340px" width="700px" src={a12}></img></div>
          <div><img height="340px" width="700px" src={a7}></img></div>
          <div><img height="340px" width="700px" src={a14}></img></div>
          <div><img height="340px" width="700px" src={a15}></img></div>
          <div><img height="340px" width="700px" src={a4}></img></div>
          <div><img height="340px" width="700px" src={a17}></img></div>
          <div><img height="340px" width="700px" src={a13}></img></div>
        </Carousel>
    </div>
  );
};

export default ImageCarousel;