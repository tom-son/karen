import styled from "styled-components";

const CardContainerStyled = styled.div`
  height: 300px;
  border: 3px red solid;
  &:hover {
    border: yellow 3px solid;
    h1 {
      color: yellow;
    }
  }

  div  { 
    position: relative;
    color: white;
    h1  {
      position: absolute;
      top: 50%;
      left: 0px;
      transform: translateY(-50%);
      margin: 0px 20px;
    }
  }

  > p {
    padding: 20px;
  }
`;

CardContainerStyled.displayName = "CardContainerStyled";
export default CardContainerStyled;
