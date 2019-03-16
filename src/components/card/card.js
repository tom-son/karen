import React from 'react';
import CardContainerStyled from './styles/CardContainerStyled';

const card = ({children, header, backgroundUrl}) => {
  return (
    <CardContainerStyled>
      <div style={{backgroundImage: `url("${backgroundUrl}")`, backgroundSize: "cover", backgroundPosition: "center center", height: "50%"}}>
        <h1>{header}</h1>
      </div>
      <p>{children}</p>
    </CardContainerStyled>
  );
};

export default card;