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
import SectionTitile from "../components/SectionTitle";
import ProjectTitle from "../components/ProjectTitle";
import {ProjectsGrid} from "../components/ProjectsGrid";

export default function Home( props ) : JSX.Element {

    const [state, setState] = useState({
        isDay: false,
        isRain: false,
        isWind: false,
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
    min-height: 90vh;
    height: 100%;
    justify-content: space-between;    
    background-color: ${state.bgColor};
     @media (max-width:  700px) {
                    min-height: 60vh;
                  }

        .text__holder{
            margin-left: 100px;
            margin-top: 150px;
            max-width: 100vw;
            
              @media (max-width:  700px) {
                     margin-left: 10px;
                    margin-top: 40px;
                  }
            
               .welcome{
                 font-size: 8em;
                 font-weight: 800;
                 line-height: normal;
                  @media (max-width:  700px) {
                    font-size: 3em;
                  }
                 }  
                 
               .welcome__caption {
               font-size: 3em;
               line-break: normal;
               line-height: normal;
               font-weight: 600;
                 color:white;
               -webkit-text-stroke: 2px black;
               
               @media (max-width:  700px) {
                font-size: 1em;
                 -webkit-text-stroke: 1px transparent;
                 color: black;
                 margin-top: 10px;
              }
               
               }
        }
           .weather__holder{
               justify-self: flex-end;
               margin-left: 100px;
               margin-bottom: 10px;
              @media (max-width:  700px) {
                     margin-left: 10px;
                    margin-top: 40px;
                  }
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
        <SectionTitile title="PROJEKTY" bgColor={state.bgColor} />
        <ProjectsGrid props={props.projects} bgColor={state.bgColor} styleVaribles={""} />
        <SectionTitile title="POZNAJMY SIĘ" bgColor={state.bgColor} />
        </>
    )

}


function url(city : string) : string {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd7eb609b628174c76a482350679ebb2`
}
const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getServerSideProps() {
    const res = await fetch(url('warsaw'));
    const data = await res.json();

   const prod = client.getEntries()
        .then( (entries) =>  {
            // log the title for all the entries that have it
            entries.items.forEach( (entry) => {
                if (entry.fields.productName) {
                    return entry.fields.productName
                }
            })
        })

    const projInfo = await client.getEntries();
    // const dat = await fetch('https://api.contentful.com/spaces/r50870bg4kry')
    // const lets = await dat.json()
    return {
        props: {
            weather: data,
            projects: prod
        }
    }
}

