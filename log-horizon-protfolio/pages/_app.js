//import '../st'
import  { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const darkTheme = createTheme({type: "dark"});

export default function MyApp({ Component, pageProps }) {
    return ( 
    <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} /> 
    </NextUIProvider>
    )
}

