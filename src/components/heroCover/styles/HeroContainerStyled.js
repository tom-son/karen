import styled from "styled-components";
import { media } from "../../styleHelpers";

const HeroContainerStyled = styled.div`
  /* color: white; */
  line-height: 1.4rem;

  ${props => props.theme.align && `
    text-align: ${props.theme.align};
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}

  max-width: 690px;
  ${media.tablet`
    width: 690px;
  `} 
`;

export default HeroContainerStyled;
