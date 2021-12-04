import { Button, Grid } from "@material-ui/core";
import styled from "styled-components";

import * as colorCodes from "constants/colorCodes";

export const StyledNavButtonWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 0.6rem;
`;

export const StyledGrid = styled(Grid)`
  text-align: center;
  padding: 0.5rem;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  color: ${colorCodes.SNOW};
  border: 1px solid ${colorCodes.SNOW};
  border-radius: 0;
  text-transform: none;

  &:hover {
    background-color: ${colorCodes.SNOW};
    color: ${colorCodes.BLACK};
  }
`;
