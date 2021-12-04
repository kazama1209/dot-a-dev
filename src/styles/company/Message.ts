import styled from "styled-components";

interface StyledMainWrapperProps {
  backgroundColor?: string;
}

export const StyledMainWrapper = styled.div<StyledMainWrapperProps>`
  ${({ backgroundColor }) => `
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px;
    background-color: ${backgroundColor};
    border-radius: 0.25rem;
  `}
`;

export const StyledImage = styled.img`
  width: 100%;
  -webkit-user-drag: none;
`;
