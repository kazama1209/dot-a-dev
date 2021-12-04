import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import { default as Slider } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  StyledSliderWrapper,
  StyledMainSlider,
  StyledMainSlideMask,
  StyledMainSlide,
  StyledMainSlideImage,
  StyledMainSlideCaption,
  StyledArrowButtonWrapper,
  StyledArrowButton,
  StyledThumbnailSlider,
  StyledThumbnailSlide,
  StyledThumbnailSlideImage,
} from "styles/home/Carousel";

import carousel1 from "assets/images/home/carousel1.jpg";
import carousel2 from "assets/images/home/carousel2.jpg";
import carousel3 from "assets/images/home/carousel3.jpg";
import carousel4 from "assets/images/home/carousel4.jpg";
import carousel5 from "assets/images/home/carousel5.jpg";
import carousel6 from "assets/images/home/carousel6.jpg";
import carousel7 from "assets/images/home/carousel7.jpg";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

/* prev ボタン*/
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <StyledArrowButtonWrapper>
      <StyledArrowButton onClick={onClick}>&#8249;</StyledArrowButton>
    </StyledArrowButtonWrapper>
  );
};

/* next ボタン*/
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <StyledArrowButtonWrapper isNext={true}>
      <StyledArrowButton isNext={true} onClick={onClick}>
        &#8250;
      </StyledArrowButton>
    </StyledArrowButtonWrapper>
  );
};

export interface Image {
  id: number;
  src: string;
}

const images: Image[] = [
  {
    id: 1,
    src: carousel1.src,
  },
  {
    id: 2,
    src: carousel2.src,
  },
  {
    id: 3,
    src: carousel3.src,
  },
  {
    id: 4,
    src: carousel4.src,
  },
  {
    id: 5,
    src: carousel5.src,
  },
  {
    id: 6,
    src: carousel6.src,
  },
  {
    id: 7,
    src: carousel7.src,
  },
];

const Carousel: React.FC = () => {
  /* 各種ブレイクポイント */
  // const isPcScreen: boolean = useMediaQuery({
  //   query: "(min-width: 1025px)",
  // });

  // const isTabletScreen: boolean = useMediaQuery({
  //   query: "(max-width: 1024px)",
  // });

  const isMobileScreen: boolean = useMediaQuery({
    query: "(max-width: 599px)",
  });

  const [imageIndex, setImageIndex] = useState<number>(0);

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbSlider, setThumbSlider] = useState(null);

  const [mainSlide, setMainSlide] = useState(null);
  const [thumbSlide, setThumbSlide] = useState(null);

  useEffect(() => {
    setMainSlider(mainSlide);
    setThumbSlider(thumbSlide);
  }, [mainSlide, thumbSlide]);

  const settingsMain = {
    infinite: true,
    lazyLoad: "progressive",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: Slider, next: number) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: null,
          nextArrow: null,
          dots: true,
        },
      },
    ],
  };

  const settingsThumbs = {
    infinite: true,
    lazyLoad: "progressive",
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "10%",
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (_: Slider, next: number) => setImageIndex(next),
  };

  return (
    <StyledSliderWrapper>
      <StyledMainSlider
        {...settingsMain}
        /* @ts-ignore */
        asNavFor={thumbSlider}
        /* @ts-ignore */
        ref={(mainSlide) => setMainSlide(mainSlide)}
      >
        {images.map((image, index) => (
          <StyledMainSlide
            key={image.id}
            className={index === imageIndex ? "is-active" : ""}
          >
            <StyledMainSlideImage src={image.src} alt={image.src} />
            <StyledMainSlideMask>
              <StyledMainSlideCaption>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </StyledMainSlideCaption>
            </StyledMainSlideMask>
          </StyledMainSlide>
        ))}
      </StyledMainSlider>
      {!isMobileScreen && ( // スマホサイズの画面では非表示
        <StyledThumbnailSlider
          {...settingsThumbs}
          /* @ts-ignore */
          asNavFor={mainSlider}
          /* @ts-ignore */
          ref={(thumbSlide) => setThumbSlide(thumbSlide)}
        >
          {images.map((image, index) => (
            <StyledThumbnailSlide
              key={image.id}
              className={index === imageIndex ? "is-active" : ""}
            >
              <StyledThumbnailSlideImage src={image.src} alt={image.src} />
            </StyledThumbnailSlide>
          ))}
        </StyledThumbnailSlider>
      )}
    </StyledSliderWrapper>
  );
};

export default Carousel;
