import React from 'react';
import FooterContainerStyled from './styles/FooterContainerStyled';
import InfoBlockStyled from './infoBlock/infoBlock';

const footer = props => {
  return (
    <FooterContainerStyled>
      <div style={{gridArea: "footer__classes"}}>
        <InfoBlockStyled className="footer__classes" title="Trading Hours">
          Timetable
        </InfoBlockStyled>
      {/* </div>
      <div style={{gridArea: "footer__location"}}> */}
        <InfoBlockStyled className="footer__location" title="Location">
          <p>
            SHOP 2/1183-1187 THE HORSLEY DR, <br />
            WETHERILL PARK, NSW, 2164
          </p>
          <a href="www.google.com">Get directions</a>
        </InfoBlockStyled>
      </div>
      <div style={{gridArea: "footer__contact"}}>
        <InfoBlockStyled className="footer__contact" title="Contact">
          <img width="35px" src="https://uploads-ssl.webflow.com/589d096714809b910235582d/58aa2e6024cb6c757b309226_1487569498_facebook_circle.svg" alt="Facebook"/>
          <p>
            E. INFO@5THAVEBEAUTY.COM.AU <br />
            T. (02) 8119 5811 <br />
            ABN: 51 223 404 330 <br />
          </p>
        </InfoBlockStyled>
      </div>
    </FooterContainerStyled>
  );
};

export default footer;