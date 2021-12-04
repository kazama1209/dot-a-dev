import Card from "@material-ui/core/Card";
import styled from "styled-components";

interface StyledCardProps {
  backgroundColor: string;
}

export const StyledCard = styled(Card)<StyledCardProps>`
  ${({ backgroundColor }) => `
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 3em;
    background-color: ${backgroundColor};
  `}
`;

export const StyledHeading = styled.div`
  text-align: center;
`;
