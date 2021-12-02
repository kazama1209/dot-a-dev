import React from "react";

import { StyledText } from "styles/common";
import {
  StyledBackground,
  StyledVideo,
  StyledTextWrapper,
  StyledContent,
  StyledButton,
} from "styles/home/BgVideo";

import * as colorCodes from "constants/colorCodes";

const BgVideo: React.FC = () => {
  return (
    <React.Fragment>
      <StyledBackground>
        <StyledContent>
          <StyledTextWrapper>
            <StyledText variant="h2" fontColor={colorCodes.SNOW} gutterBottom>
              Hello World!
            </StyledText>
            <StyledText
              variant="body1"
              fontColor={colorCodes.SNOW}
              gutterBottom
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minus molestias unde libero.
            </StyledText>
            <StyledButton>Join us?</StyledButton>
          </StyledTextWrapper>
        </StyledContent>
        <StyledVideo src={"bg-video.mp4"} loop muted autoPlay />
      </StyledBackground>
    </React.Fragment>
  );
};

export default BgVideo;
