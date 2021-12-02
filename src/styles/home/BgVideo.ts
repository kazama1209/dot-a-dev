import { Button } from "@material-ui/core";
import styled from "styled-components";
import * as colorCodes from "constants/colorCodes";

export const StyledBackground = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -999;
  background-color: black;
  background-size: cover;
`;

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const StyledTextWrapper = styled.div`
  max-width: 500px;
  margin: 2rem;
  padding: 3rem;
  text-align: center;
  border: 1px solid ${colorCodes.SNOW};
  border-radius: 8px;
`;

export const StyledButton = styled(Button)`
  margin-top: 1rem;
  color: ${colorCodes.SNOW};
  border: 1px solid ${colorCodes.SNOW};
  text-transform: none;

  &:hover {
    background-color: ${colorCodes.SNOW};
    color: ${colorCodes.BLACK};
  }
`;
