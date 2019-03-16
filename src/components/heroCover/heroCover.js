import React from 'react';
import HeroContainerStyled from './styles/HeroContainerStyled';
import Button from '../UI/button/button';
import HeroWrapperStyled from './styles/HeroWrapperStyled';

const heroCover = ({header, children, buttonText, backgroundUrl, center }) => {

  console.log(backgroundUrl)
  return (
    <HeroWrapperStyled backgroundUrl={backgroundUrl}>
      <HeroContainerStyled>
        <h1>
          {header}
        </h1>
        <p>
          {children}
        </p>
        <Button>
          {buttonText}
        </Button>
      </HeroContainerStyled>
    </HeroWrapperStyled>
  );
};

export default heroCover;