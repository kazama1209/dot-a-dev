import styled from "styled-components";

interface ContentBoxProps {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Margin {
  margin?: Partial<ContentBoxProps>;
}

export interface Padding {
  padding?: Partial<ContentBoxProps>;
}

const DEFAULT_VALUE: ContentBoxProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const createContentBox = (
  contentBox: Partial<ContentBoxProps> | undefined
): ContentBoxProps => {
  if (!contentBox) {
    return DEFAULT_VALUE;
  }

  return { ...DEFAULT_VALUE, ...contentBox };
};

export const StyledContentBox = styled.div<Margin & Padding>`
  margin: ${({ margin }): string => {
    const { top, right, bottom, left } = createContentBox(margin);
    return `${top}px ${right}px ${bottom}px ${left}px`;
  }};
  padding: ${({ padding }): string => {
    const { top, right, bottom, left } = createContentBox(padding);
    return `${top}px ${right}px ${bottom}px ${left}px`;
  }};
`;

export const lo = {
  overall: (num: number): ContentBoxProps => ({
    top: num,
    right: num,
    bottom: num,
    left: num,
  }),
  horizontal: (num: number): Partial<ContentBoxProps> => ({
    right: num,
    left: num,
  }),
  vertical: (num: number): Partial<ContentBoxProps> => ({
    top: num,
    bottom: num,
  }),
};
