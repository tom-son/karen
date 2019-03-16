import React from 'react';
import InfoBlockStyled from './styles/infoBlockStyled';

const infoBlock = ({title, children}) => {
  return (
    <InfoBlockStyled>
      <h3>{title}</h3>
      {children}
    </InfoBlockStyled>
  );
};

export default infoBlock;