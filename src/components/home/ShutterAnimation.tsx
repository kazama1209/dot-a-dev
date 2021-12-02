import React from "react";
import {
  StyledWrapper,
  StyledP,
  StyledSpan,
} from "styles/home/ShutterAnimation";

const ShutterAnimation: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledP>
        <StyledSpan>D</StyledSpan>
        <StyledSpan>o</StyledSpan>
        <StyledSpan>t</StyledSpan>
        <StyledSpan>.</StyledSpan>
        <StyledSpan>A</StyledSpan>
      </StyledP>
    </StyledWrapper>
  );
};

export default ShutterAnimation;
