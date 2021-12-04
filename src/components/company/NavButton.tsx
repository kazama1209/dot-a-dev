import { Link as Scroll } from "react-scroll";
import { Grid } from "@material-ui/core";
import {
  StyledNavButtonWrapper,
  StyledGrid,
  StyledButton,
} from "styles/company/NavButton";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const NavButton: React.FC = () => {
  return (
    <StyledNavButtonWrapper>
      <Grid container alignItems="center" justify="center">
        <StyledGrid item xs={4}>
          <Scroll to="message" smooth={true} duration={600} offset={-50}>
            <StyledButton
              variant="outlined"
              endIcon={<KeyboardArrowDownIcon />}
            >
              Message
            </StyledButton>
          </Scroll>
        </StyledGrid>
        <StyledGrid item xs={4}>
          <Scroll to="about" smooth={true} duration={600} offset={-50}>
            <StyledButton
              variant="outlined"
              endIcon={<KeyboardArrowDownIcon />}
            >
              About
            </StyledButton>
          </Scroll>
        </StyledGrid>
        <StyledGrid item xs={4}>
          <Scroll to="access" smooth={true} duration={600} offset={-50}>
            <StyledButton
              variant="outlined"
              endIcon={<KeyboardArrowDownIcon />}
            >
              Access
            </StyledButton>
          </Scroll>
        </StyledGrid>
      </Grid>
    </StyledNavButtonWrapper>
  );
};

export default NavButton;
