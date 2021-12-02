import styled from "styled-components";
import * as colorCodes from "constants/colorCodes";

export const StyledWrapper = styled.div`
  width: 100vw;
  min-height: 100%;
  background: ${colorCodes.BLACK};
  animation: shutter-animation 1s linear 1.8s forwards;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  @keyframes shutter-animation {
    0% {
      opacity: 1;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const StyledP = styled.p`
  text-align: center;
  font-size: 6vw;
  color: ${colorCodes.GHOST_WHITE};
  height: 1em;
  line-height: 1.2;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  opacity: 0;
  animation: text-animation-1 0.5s linear forwards;

  @keyframes text-animation-1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledSpan = styled.span`
  display: inline-block;

  :nth-child(1) {
    animation: text-animation-2 0.6s ease-in-out 0.4s forwards;
  }

  :nth-child(2) {
    animation: text-animation-2 0.6s ease-in-out 0.5s forwards;
  }

  :nth-child(3) {
    animation: text-animation-2 0.6s ease-in-out 0.6s forwards;
  }

  :nth-child(4) {
    animation: text-animation-2 0.6s ease-in-out 0.7s forwards;
  }

  :nth-child(5) {
    animation: text-animation-2 0.6s ease-in-out 0.8s forwards;
  }

  @keyframes text-animation-2 {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-30%);
    }
    75% {
      transform: translateY(30%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
