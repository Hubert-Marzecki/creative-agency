import '../styles/globals.css'
import {ThemeProvider} from "emotion-theming";
import { AppProps } from 'next/app'
import styled, { CreateStyled } from '@emotion/styled'
import * as React from "react";
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles'
import {Header} from "../components/Header";


const theme : any = {
  colors: {
    bgGray: '#E2E2E2',
    bgYellow: '#FFFCD8',
    bgBlue: '#D8E2FF',
    bgDark: '#8E91A5'
  }
}

function MyApp({ Component, pageProps }) : JSX.Element {

  return (

    <>
        <GlobalStyles />
         <ThemeProvider theme={theme}>
         <Component {...pageProps} />
      </ThemeProvider>
    </>
    )
}

export default MyApp
