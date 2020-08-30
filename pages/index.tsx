import * as React from "react";
import {getWeather} from "../services/client";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios'
import {useEffect, useState} from "react";
// @ts-ignore
import sun from '../public/sun.png';
// @ts-ignore
import cloud from '../public/3.png';

import styled from "@emotion/styled";
import {Header} from "../components/Header";
import {ThemeProvider} from "emotion-theming";

export default function Home( props ) : JSX.Element {

    const [state, setState] = useState({
        bgColor: ''
    })

    useEffect(() => {
        const temp = props.weather.main.temp - 273
        if( temp < 10) {
            setState(s => ({...s, bgColor: props => props.theme.colors.bgBlue}))

        } else if (temp < 24 && temp > 10) {
            setState(s => ({...s, bgColor: props => props.theme.colors.bgGray}))
        } else if (temp > 25) {
            setState(s => ({...s, bgColor: props => props.theme.colors.bgYellow}))
        }
    },[])
    //todo add colors varibles

    const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-between;    
    position: relative;
    background-color: ${state.bgColor};

        .text__holder{
            margin-left: 100px;
            margin-top: 150px;
            
               .welcome{
                 font-size: 8em;
                 font-weight: 800;
                 line-height: normal;
                 }  
                 
               .welcome__caption {
               font-size: 3em;
               line-break: normal;
               line-height: normal;
               font-weight: 600;
                 color:white;
               -webkit-text-stroke: 2px black;
               }
        }
           .weather__holder{
               justify-self: flex-end;
               margin-left: 100px;
             
               }
               
           .sun{
               position: fixed;
               z-index: 0;
               top: 20%;
               left: 85%;
               width: 300px;
               height: 300px;
               }
    `
    return(
        <>
            <Header bgColor={state.bgColor}/>
            <StyledHeader>
            <div className="text__holder">
                <h1 className="welcome"> Cześć, jestem Hubert </h1>
                <h2 className="welcome__caption"> Zajmuję się tworzeniem stron internetowych, <br/> komunikacją marketingową i fotografią. </h2>
            </div>

            <img src={sun} className="sun" />
            {/*<img src={cloud} className="cloud" />*/}

            <div className="weather__holder">
                <p>{props.weather.name} , {props.weather.main.temp.toFixed() - 273}°C</p>
            </div>
        </StyledHeader>
        </>
    )

}



function url(city : string) : string {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd7eb609b628174c76a482350679ebb2`
}


export async function getServerSideProps() {
    const res = await fetch(url('warsaw'));
    const data = await res.json();

    return {
        props: {
            weather: data
        }
    }
}

