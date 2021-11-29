import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledWrapper = styled.section`
  min-height: 100vh;
  padding: 4rem;
  background: bisque;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: ${(props) => (props.color ? props.color : "white")};
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const Home: React.FC = () => {
  return (
    <>
      <StyledWrapper>
        <StyledButton variant="outlined">Hello World!</StyledButton>
      </StyledWrapper>
    </>
  );
};

export default Home;
