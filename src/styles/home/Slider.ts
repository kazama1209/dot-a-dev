import styled from "styled-components";
import * as colorCodes from "constants/colorCodes";

export const StyledSwiperWrapper = styled.div`
  .swiper-pagination-bullet {
    background: ${colorCodes.BLACK};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${colorCodes.SNOW};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
  }
`;

export const StyledSlider = styled.div`
  height: 500px !important;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const StyledSliderItem = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(0.4);
`;

export const StyledSliderImage = styled.img``;

export const StyledSliderContent = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export const StyledSlidelName = styled.div`
  border-top: 1px solid ${colorCodes.SNOW};
  border-bottom: 1px solid ${colorCodes.SNOW};
  // margin: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  font-size: 1.728rem;
  line-height: 0;
`;

export const StyledSliderCaption = styled.div`
  // padding: 1rem 1.5rem 0 1rem;
`;
