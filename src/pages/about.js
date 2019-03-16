import React from 'react';
import { ThemeProvider } from 'styled-components';
import HeroCover from '../components/heroCover/heroCover';

const theme = {
  align: "center",
  padding: "0px 20px"
}

const about = props => {
  return (
    <React.Fragment>
      <div style={{backgroundColor: "#f5f5f5"}}>
        <h4>DEDICATED TO BEAUTY</h4>
        <p>
          We ultimately began our journey as customers in the world of beauty. Through our travels, we gained great insight and experienced everything that the beauty industry had to offer. However, we felt there was still a niche opening for us in creating a salon that truly embodies tranquillity and comfortability. 
        </p>
        <p>
          Revolutionising the beauty industry was never going to be an easy task. But we believe that our modern interpretations on conventional beauty services will truly differentiate us from others. As we continue to deliver you excellent service and quality finishes, we invite you to join our beautiful journey into the big world of beauty.
        </p>
      </div>
      <ThemeProvider theme={theme}>
        <HeroCover 
          header="PREMIUM BEAUTY SERVICES AND SIGNATURE FINISHES ARTFULLY CRAFTED UNDER ONE ROOF"
          buttonText="See our service"
          backgroundUrl="https://uploads-ssl.webflow.com/589d096714809b910235582d/58b37b26d63ba0192206d3ad_AdobeStock_124557328%20(Large).jpeg"
        />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default about;