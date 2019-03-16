import React from 'react';
import InfoStackContainer from './styles/InfoStackContainerStyled';

const infoStack = ({title, header, children, buttonText, backgroundUrl, reverse}) => {
  console.log(`url("${backgroundUrl}")`)
  return (
    <InfoStackContainer reverse={reverse}>
      <div style={{backgroundImage: `url("${backgroundUrl}")` }} />
      <div>
        <h4>{title}</h4>
        <h1>{header}</h1>
        <p>{children}</p>
        <button>{buttonText}</button>
      </div>
    </InfoStackContainer>
  );
};

export default infoStack;