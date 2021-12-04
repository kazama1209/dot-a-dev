import React from "react";
import { Grid } from "@material-ui/core";

import { StyledMainWrapper, StyledImage } from "styles/company/Message";
import { StyledText } from "styles/common/Text";
import { StyledContentBox, lo } from "styles/common/ContentBox";
import * as colorCodes from "constants/colorCodes";

import feature from "images/company/feature.png";

const Message: React.FC = () => {
  return (
    <StyledMainWrapper backgroundColor={colorCodes.SNOW}>
      <Grid container>
        <Grid item lg={6}>
          <StyledContentBox padding={lo.overall(30)}>
            <StyledImage src={feature.src} alt="feature.jpg"></StyledImage>
          </StyledContentBox>
        </Grid>
        <Grid item lg={6}>
          <StyledContentBox padding={lo.overall(30)}>
            <StyledText
              variant="h2"
              fontColor={colorCodes.IVORY_BLACK}
              fontSize="4rem"
              fontWeight="bold"
              gutterBottom
            >
              Hello World!
            </StyledText>
            <StyledText
              variant="body1"
              fontColor={colorCodes.GRAY}
              fontSize="1.4rem"
              fontWeight="lighter"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </StyledText>
          </StyledContentBox>
        </Grid>
      </Grid>
    </StyledMainWrapper>
  );
};

export default Message;
