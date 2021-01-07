import React, { useState } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../src/ui/theme';
import App from 'next/app';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';
import Fonts from '../src/ui/Fonts';

// input actual google analytics code eg. "UA-151000000-1"
ReactGA.initialize("UA-10000000000-1")

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    //Fonts()
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <React.Fragment>
      {/* This head is appended every page */}
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        <Header 
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Component 
          {...pageProps}  
          setValue={setValue}
          setSelectedIndex={setSelectedIndex} 
        />
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
