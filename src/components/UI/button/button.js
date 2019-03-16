import React from 'react';
import ButtonWrapperStyled from './styles/ButtonWrapperStyled';

const button = ({children}) => {
  return (
    <ButtonWrapperStyled>
      {children}
    </ButtonWrapperStyled>
  );
};

export default button;