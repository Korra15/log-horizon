import React from 'react';
import { NextUIProvider, createTheme } from "@nextui-org/react";
import PortfolioNavbar from '../compoments/PortfolioNavbar';

const portTheme = createTheme({
    type: 'autumn',
    theme: {
      colors: {
        background: '#f8f5ee',
        text: '#5f3155',
        subText: '#f06852',
        yellowColor: '#eba869'

      },
      space: {},
      fonts: {}
    }
  })

  

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <NextUIProvider theme={portTheme}>
          <PortfolioNavbar />
          <Component {...pageProps} /> 
        </NextUIProvider>
      </>
    )
}

