import { Card, CardContent, CardMedia, Divider } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import styled from "styled-components";

import * as colorCodes from "constants/colorCodes";

export const StyledCard = styled(Card)`
  max-width: 375px;
  margin: auto;
  box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 1px 0px 20px -1px rgba(0, 0, 0, 0.2),
      0px 0px 20px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%;
  cursor: pointer;
`;

export const StyledCardContent = styled(CardContent)`
  text-align: left;
  padding: 1rem;
`;

export const StyledDivider = styled(Divider)`
  margin: 0.5rem 0;
`;

export const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  margin: 0 1rem 1rem;
  color: ${colorCodes.GRAY};
  display: inline-block;
`;
