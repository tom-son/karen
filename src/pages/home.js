import React from 'react'
import HeroCover from '../components/heroCover/heroCover';
import Card from '../components/card/card';
import InfoStack from '../components/infoStack/infoStack';
import { ThemeProvider } from 'styled-components';

const theme = {
  // align: "left",
  // padding: "100px 200px"
}

const home = props => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HeroCover 
          header="Enjoy a day of beauty with us"
          button="Book an Appointent"
          backgroundUrl="https://www.w3schools.com/howto/photographer.jpg"
        >
          5th Avenue Beauty Bar is a vibrant beauty salon presented in the heart of Western Sydney, delivering a unique and luxurious salon experience. With a range of premium beauty services and signature finishes artfully crafted under one roof, we invite you to come enjoy a day of beauty with us.  
        </HeroCover>
      </ThemeProvider>
      
      <Card
        backgroundUrl="https://uploads-ssl.webflow.com/589d096714809b910235582d/58b37b26d63ba0192206d3ad_AdobeStock_124557328%20(Large)-p-500x334.jpeg"
        header="PREMIUM SERVICE"
      >
        With flexible trading hours and individual customer profiles kept on file, our aim is to provide excellent service while catering to the busy lifestyles of our customers.
      </Card>

      <InfoStack
        reverse
        title="Maybe It's 5th Avenue Beauty Bar"
        header="GLOW WITH CONFIDENCE"
        buttonText="About us"
        backgroundUrl="https://uploads-ssl.webflow.com/589d096714809b910235582d/58a520ae2fe9e0dc1314446f_facial.jpeg"
      >
        We offer a range of facial and skincare services to satisfy all your personal beauty needs. Choose between our express and deluxe facial treatment services and get ready to glow with confidence, putting your best face forward and knowing your skin is purified and rejuvenated.
      </InfoStack>
      
      <InfoStack
        title="Maybe It's 5th Avenue Beauty Bar"
        header="GLOW WITH CONFIDENCE"
        buttonText="About us"
        backgroundUrl="https://uploads-ssl.webflow.com/589d096714809b910235582d/58a520ae2fe9e0dc1314446f_facial.jpeg"
      >
        We offer a range of facial and skincare services to satisfy all your personal beauty needs. Choose between our express and deluxe facial treatment services and get ready to glow with confidence, putting your best face forward and knowing your skin is purified and rejuvenated.
      </InfoStack>
    </div>
  );
};

export default home;