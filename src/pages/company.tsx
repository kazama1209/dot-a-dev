import React from "react";
import { Container } from "@material-ui/core";

import { StyledContentBox, lo } from "styles/common";
import TopImage from "components/company/TopImage";
import NavButton from "components/company/NavButton";
import About from "components/company/About";
import Access from "components/company/Access";
import Message from "components/company/Message";

const Campany: React.FC = () => {
  return (
    <React.Fragment>
      <TopImage />
      <StyledContentBox margin={lo.vertical(12)}>
        <NavButton />
      </StyledContentBox>
      <StyledContentBox id="message" margin={lo.vertical(48)}>
        <Container>
          <Message />
        </Container>
      </StyledContentBox>
      <StyledContentBox id="about" margin={lo.vertical(48)}>
        <Container>
          <About />
        </Container>
      </StyledContentBox>
      <StyledContentBox id="access" margin={lo.vertical(48)}>
        <Container>
          <Access />
        </Container>
      </StyledContentBox>
    </React.Fragment>
  );
};

export default Campany;
