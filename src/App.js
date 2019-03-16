import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import Home from './pages/home';
import About from './pages/about';
import Footer from './components/footer/footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        {/* <Home /> */}
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
