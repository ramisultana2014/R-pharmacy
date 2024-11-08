import styled from "styled-components";
import Wrapper from "../assets/wrapper/Carousel";
import { imageArray } from "../utils/caruslImages";
import { useEffect, useState } from "react";
function carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  // Function to go to the previous slide
  // const goToPrevious = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
  //   );
  // };

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div
          className="container-images"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {imageArray.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default carousel;
