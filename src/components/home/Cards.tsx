import React from "react";

import { Container, Grid } from "@material-ui/core";

import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  StyledDivider,
  StyledAccessTimeIcon,
} from "styles/home/Cards";

import { StyledText } from "styles/common";
import * as colorCodes from "constants/colorCodes";

import card1 from "images/home/card1.jpg";
import card2 from "images/home/card2.jpg";
import card3 from "images/home/card3.jpg";

interface CardItem {
  image: string;
  title: string;
  caption: string;
  date: string;
}

const cardItems: CardItem[] = [
  {
    image: card1.src,
    title: "Lorem ipsum dolor sit",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
    date: "2021.11.14",
  },
  {
    image: card2.src,
    title: "Lorem ipsum dolor sit",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
    date: "2021.11.17",
  },
  {
    image: card3.src,
    title: "Lorem ipsum dolor sit",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
    date: "2021.11.28",
  },
];

const Cards: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {cardItems.map((cardItem) => {
          return (
            <Grid item xs={12} md={4} key={cardItem.image}>
              <StyledCard>
                <StyledCardMedia image={cardItem.image} />
                <StyledCardContent>
                  <StyledText variant="h6">{cardItem.title}</StyledText>
                  <StyledDivider light />
                  <StyledText variant="caption" fontColor={colorCodes.GRAY}>
                    {cardItem.caption}
                  </StyledText>
                </StyledCardContent>
                <Grid container>
                  <Grid item>
                    <StyledAccessTimeIcon />
                  </Grid>
                  <Grid item>
                    <StyledText variant="body1" fontColor={colorCodes.GRAY}>
                      {cardItem.date}
                    </StyledText>
                  </Grid>
                </Grid>
              </StyledCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Cards;
