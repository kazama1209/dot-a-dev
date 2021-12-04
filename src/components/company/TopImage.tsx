import React from "react";
import { StyledText } from "styles/common";
import {
  StyledBackround,
  StyledTextWrapper,
  StyledHeading,
  StyledCaption,
} from "styles/common/Background";

import * as colorCodes from "constants/colorCodes";
import topImage from "assets/images/company/top-image.jpg";

const TopImage: React.FC = () => {
  return (
    <StyledBackround backgroundImage={topImage.src} height="600px">
      <StyledTextWrapper>
        <StyledHeading>
          <StyledText variant="h2" fontColor={colorCodes.SNOW}>
            Company
          </StyledText>
        </StyledHeading>
        <StyledCaption>
          <StyledText variant="body1" fontColor={colorCodes.SNOW}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            mollitia.
          </StyledText>
        </StyledCaption>
      </StyledTextWrapper>
    </StyledBackround>
  );
};

export default TopImage;
