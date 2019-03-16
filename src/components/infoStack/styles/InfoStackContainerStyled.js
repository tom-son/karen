import styled from 'styled-components';
import { media } from '../../styleHelpers'

const InfoStackContainerStyled = styled.div`
  height: 400px;

  div:nth-child(1) {
    height: 50%;
    background-size: cover;
    background-position: center center;
  }

  ${media.tablet`
    display: flex;
    
    div:nth-child(1) {
      height: 100%;
      ${props => props.reverse && `order: 2`}
    }
    
    div {
      width: 50%;
    }
  `}
`;

export default InfoStackContainerStyled;