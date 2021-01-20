import '../styles/globals.css'
import {ThemeProvider} from "emotion-theming";
import { AppProps } from 'next/app'
import styled, { CreateStyled } from '@emotion/styled'
import * as React from "react";
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles'
import {Header} from "../components/Header/Header";
// import '../styles/tailwind.css';
import Footer from '../components/Footer/Footer';
import '../styles/tailwind.css/tailwind.css';
import { motion } from 'framer-motion';

const theme : any = {
  colors: {
    bgGray: '#E2E2E2',
    bgYellow: '#FFFCD8',
    bgBlue: '#D8E2FF',
    bgDark: '#8E91A5'
  }
}

function MyApp({ Component, pageProps, router }) : JSX.Element {

 
  return (

    <><StyledWrapper>

        <motion.div key={router.route} initial={"pageInitial"} animate={"pageAnimate"} variants={{
            pageInitial:{
                opacity: 0,
                backgroundColor: "black"
            },
            pageAnimate:{
                opacity: 1,
                backgroundColor: "red"
            }
        }} >
        <GlobalStyles />
         <ThemeProvider theme={theme}>

         <Component {...pageProps} />
         <Footer />
      </ThemeProvider>
      </motion.div>
    </StyledWrapper>

    </>
    )
}
const StyledWrapper = styled.div`
background-color: black;
`
export default MyApp
