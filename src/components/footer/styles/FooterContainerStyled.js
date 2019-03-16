import styled from 'styled-components';

const FooterContainerStyled = styled.footer`
  display: grid;
  grid-template-rows: 150px 150px 150px;
  grid-template-columns: 100%;
  grid-template-areas: 
      "footer__classes"
      "footer__contact"
      "footer__location";
  /* display: grid;
  grid-template-rows: 150px 150px;
  grid-template-columns: 60% auto;
  grid-template-areas:
    "footer__classes footer__contact"
    ". footer__location"; */

  height: 500px;
  background-color: #3a3042;

  @media (min-width: 800px) {
    grid-template-rows: 150px 150px;
    grid-template-columns: 60% auto;
    grid-template-areas: 
      "footer__classes footer__contact"
      ". footer__location";
    color: red;
  }

`;

export default FooterContainerStyled;