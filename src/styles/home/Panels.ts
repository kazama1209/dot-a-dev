import styled from "styled-components";
import * as colorCodes from "constants/colorCodes";

interface StyledPanelBackgroundProps {
  backgroundImage: string;
}

export const StyledPanelBackground = styled.div<StyledPanelBackgroundProps>`
  ${({ backgroundImage }) => `
    transform: translate3d(0, 0, 0);
    background-image: url(${backgroundImage});
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    transition: filter 0.5s ease;
    filter: brightness(0.4);
  `}
`;

export const StyledPanelContent = styled.div`
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;

  h1 {
    text-transform: uppercase;
    color: ${colorCodes.LIGHT_BLUE};
    font-size: 1.44rem;
    font-weight: normal;
  }
`;

export const StyledPanelItem = styled.div`
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 25%;
  height: 100vh;
  min-height: 600px;
  color: ${colorCodes.SNOW};
  overflow: hidden;
  transition: width 0.5s ease;

  &:before,
  &:after {
    transform: translate3d(0, 0, 0);
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:after {
    background: transparentize(${colorCodes.PEARL_BLACK}, 0.15);
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 75%
    );
    z-index: 1;
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &:hover {
    width: 30% !important;

    &:after {
      opacity: 0;
    }

    &:before {
      opacity: 1;
      transform: translate3d(0, 0, 0) translateY(0);
      transition: opacity 1s ease, transform 1s ease 0.25s;
    }

    ${StyledPanelContent} {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease 0.5s;
    }

    ${StyledPanelBackground} {
      filter: grayscale(0);
    }
  }
`;

export const StyledPanels = styled.div`
  display: flex;
  background-color: ${colorCodes.PEARL_BLACK};
  cursor: pointer;

  &:hover {
    ${StyledPanelItem} {
      width: 23.3333%;
    }
  }
`;

export const StyledPanelName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  border-top: 1px solid ${colorCodes.SNOW};
  border-bottom: 1px solid ${colorCodes.SNOW};

  p {
    font-size: 1.728rem;
    line-height: 0;
  }
`;
