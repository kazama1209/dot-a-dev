import styled from "styled-components";
import { Typography } from "@material-ui/core";

interface StyledTextProps {
  fontColor: string;
  fontSize: string;
  fontWeight: string | number;
}

export const StyledText = styled(Typography)<Partial<StyledTextProps>>`
  ${({ fontColor, fontSize, fontWeight }) => `
    color: ${fontColor ? fontColor : "inherit"};
    font-size: ${fontSize};
    font-weight: ${fontWeight ? fontWeight : "inherit"};
  `}
`;
