import React, { useState } from "react";

import Swiper from "react-id-swiper";
import "swiper/css/swiper.min.css";

import Autoplay from "swiper";
import RealSwiper from "swiper";
import SwiperCore from "swiper";
import Pagination from "swiper";
import Navigation from "swiper";

RealSwiper.use([Autoplay]);
SwiperCore.use([Pagination, Navigation]);

import { StyledText } from "styles/common";
import {
  StyledSwiperWrapper,
  StyledSlider,
  StyledSliderItem,
  StyledSliderImage,
  StyledSliderContent,
  StyledSlidelName,
  StyledSliderCaption,
} from "styles/home/Slider";

import slide1 from "images/home/slide1.jpg";
import slide2 from "images/home/slide2.jpg";
import slide3 from "images/home/slide3.jpg";

const images: string[] = [slide1.src, slide2.src, slide3.src];

const texts: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nobis sint ipsam illo atque quaerat, sed nostrum voluptates asperiores hic quidem laboriosam ducimus, molestiae dicta rerum necessitatibus in deserunt magni sapiente repellat, consectetur dolore placeat. Minima perspiciatis cupiditate quia in.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nobis sint ipsam illo atque quaerat, sed nostrum voluptates asperiores hic quidem laboriosam ducimus, molestiae dicta rerum necessitatibus in deserunt magni sapiente repellat, consectetur dolore placeat. Minima perspiciatis cupiditate quia in.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nobis sint ipsam illo atque quaerat, sed nostrum voluptates asperiores hic quidem laboriosam ducimus, molestiae dicta rerum necessitatibus in deserunt magni sapiente repellat, consectetur dolore placeat. Minima perspiciatis cupiditate quia in.",
];

const options = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  speed: 500,
  spaceBetween: 0,
  loop: true,
  effect: "slide",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next.swiper-button-white",
  //   prevEl: ".swiper-button-prev.swiper-button-white",
  // },
};

import * as colorCodes from "constants/colorCodes";

const Slider: React.FC = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  // @ts-ignore
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <StyledSwiperWrapper>
      {/* @ts-ignore */}
      <Swiper {...options} getSwiper={setParallaxSwiper}>
        <StyledSlider>
          <StyledSliderItem
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <StyledSliderImage src={images[0]} alt="image1" />
          </StyledSliderItem>
          <StyledSliderContent>
            <StyledSlidelName>
              <StyledText variant="h4" fontColor={colorCodes.SNOW}>
                Slide 1
              </StyledText>
            </StyledSlidelName>
            <StyledSliderCaption>
              <StyledText variant="body1" fontColor={colorCodes.SNOW}>
                {texts[0]}
              </StyledText>
            </StyledSliderCaption>
          </StyledSliderContent>
        </StyledSlider>

        <StyledSlider>
          <StyledSliderItem
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <StyledSliderImage src={images[1]} alt="image2" />
          </StyledSliderItem>
          <StyledSliderContent>
            <StyledSlidelName>
              <StyledText variant="h4" fontColor={colorCodes.SNOW}>
                Slide 2
              </StyledText>
            </StyledSlidelName>

            <StyledSliderCaption>
              <StyledText variant="body1" fontColor={colorCodes.SNOW}>
                {texts[1]}
              </StyledText>
            </StyledSliderCaption>
          </StyledSliderContent>
        </StyledSlider>
        <StyledSlider>
          <StyledSliderItem
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <StyledSliderImage src={images[2]} alt="image3" />
          </StyledSliderItem>
          <StyledSliderContent>
            <StyledSlidelName>
              <StyledText variant="h4" fontColor={colorCodes.SNOW}>
                Slide 3
              </StyledText>
            </StyledSlidelName>
            <StyledSliderCaption>
              <StyledText variant="body1" fontColor={colorCodes.SNOW}>
                {texts[2]}
              </StyledText>
            </StyledSliderCaption>
          </StyledSliderContent>
        </StyledSlider>
      </Swiper>
    </StyledSwiperWrapper>
  );
};

export default Slider;
