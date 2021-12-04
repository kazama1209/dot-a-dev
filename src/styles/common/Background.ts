import styled from "styled-components";
import * as colorCodes from "constants/colorCodes";

interface StyledBackroundProps {
  backgroundImage: string;
  height: string;
}

export const StyledBackround = styled.div<StyledBackroundProps>`
  ${({ backgroundImage, height = "100vh" }) => `
    background-size: cover;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${height};

    &:before {
    content: '';
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  `}
`;

export const StyledTextWrapper = styled.div`
  position: absolute;
  max-width: 500px;
  padding: 2rem;
  text-align: center;
`;

export const StyledHeading = styled.div`
  padding-bottom: 0.5rem;
  border-top: 1px solid ${colorCodes.SNOW};
  border-bottom: 1px solid ${colorCodes.SNOW};

  color: ${colorCodes.SNOW};
  font-size: 2rem;
  line-height: 0;
`;

export const StyledCaption = styled.div`
  margin-top: 2rem;
`;
