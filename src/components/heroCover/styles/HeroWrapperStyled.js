import styled from 'styled-components';

const HeroWrapperStyled = styled.div`
  position: relative;
  height: 400px;
  ${props => props.backgroundUrl && `background-image: url("${props.backgroundUrl}");`}
  ${props => props.theme.padding && `padding: ${props.theme.padding};`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

`

export default HeroWrapperStyled;