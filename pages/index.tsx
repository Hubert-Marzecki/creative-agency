import * as React from "react";
// @ts-ignore
import {getWeather} from "../services/client";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios'
import {JSXElementConstructor, useEffect, useState} from "react";
// @ts-ignore
import sun from '../public/sun.png';
// @ts-ignore
import cloud from '../public/3.png';

import styled from "@emotion/styled";
// @ts-ignore
import {Header} from "../components/Header";
import {ThemeProvider} from "emotion-theming";
// @ts-ignore
import SectionTitile from "../components/SectionTitle";
// @ts-ignore
import ProjectTile from "../components/ProjectTile";
// @ts-ignore
import {ProjectsGrid} from "../components/ProjectsGrid";
// @ts-ignore
import progresjaImg from "../public/prog.jpg";
import { css, jsx } from '@emotion/core'
import {log} from "util";
import Link from "next/link";

export default function Home(props:any) : JSX.Element {


    interface ProjectsElements {
        title: string,
        img: string,
        imgTwo: string,
        imgThree: string,
        alt: string,
        color: string,
        link: string
    }

    const [state, setState] = useState({
        isDay: false,
        isRain: false,
        isWind: false,
        bgColor: '',
        itemLimit: 6,
    })

    // useEffect(() => {
    //     const temp = props.weather.main.temp - 273
    //     if( temp < 10) {
    //         setState(s => ({...s, bgColor: props => props.theme.colors.bgBlue}))
    //
    //     } else if (temp < 24 && temp > 10) {
    //         setState(s => ({...s, bgColor: props => props.theme.colors.bgWhite}))
    //     } else if (temp > 25) {
    //         setState(s => ({...s, bgColor: props => props.theme.colors.bgYellow}))
    //     }
    // },[])
    //todo add colors varibles

    //FUNCTIONS
    function changeColors(color:string) : void{
            setState(s => ({...s, bgColor: color}))
    }
    function isMoreVisible() : null | JSX.Element {
            if(projectsElements.length < state.itemLimit) {
                return null
            } else {
                return (
                    <StyledButton onClick={() =>
                        setState(s => ({...s, itemLimit: s.itemLimit + 3}))}
                    >Zobacz więcej</StyledButton>
                )
            }
    }

    //ELEMENTS
    const projectsElements : ProjectsElements[] = [
        {
            title:' Progresja',
            img: progresjaImg,
            imgTwo: sun ,
            imgThree: cloud,
            alt:'',
            color: "blue",
            link: '/clients/progresja'
        },
        {
            title:'Chiński Festiwal Światła',
            img: progresjaImg,
            imgTwo: progresjaImg,
            imgThree: progresjaImg,
            alt:'',
            color: "red",
            link: '/clients/progresja'

        },
        {
            title:'GiGCity.Tv',
            img: progresjaImg,
            imgTwo: progresjaImg,
            imgThree: progresjaImg,
            alt:'',
            color: "gray",
            link: '/clients/progresja',
        },
        {
            title:'Holofan3d',
            img: progresjaImg,
            imgTwo: progresjaImg,
            imgThree: progresjaImg,
            alt:'',
            color: "black",
            link: '/clients/progresja'
        },
        {
            title:'Instacorner',
            img: progresjaImg,
            imgTwo: progresjaImg,
            imgThree: progresjaImg,
            alt:'',
            color: "white",
            link: '/clients/progresja'
        },
        {
            title:'BeFriend',
            img: progresjaImg,
            imgTwo: progresjaImg,
            imgThree: progresjaImg,
            alt:'',
            color: "purple",
            link: '/clients/progresja'
        },
        {
            title:'ProTip Marketing',
            img: progresjaImg,
            imgTwo: progresjaImg,
            imgThree: progresjaImg,
            alt:'',
            color: "yellow",
            link: '/clients/progresja'
        },
    ]
    const myPhotos = [
        {
            title:'',
            img: progresjaImg,
            alt:''
        },
        {
            title:'',
            img: progresjaImg,
            alt:''
        },
        {
            title:'',
            img: progresjaImg,
            alt:''
        },
    ]

    //STYLES
    const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    height: 100%;
       
   -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;

    justify-content: space-between;    
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
    const StyledMain = styled.div`
      background-color: ${state.bgColor};
      will-change: background-color;
       transition: all 0.3s linear;
}
`

    function imgs(e : any, item: ProjectsElements) : void {
        setInterval(() => {(e : any) => (e.currentTarget.src = item.imgTwo)},300);
        setInterval(() => {(e : any) => (e.currentTarget.src = item.imgThree)},300);
        setInterval(() => {(e : any) => (e.currentTarget.src = item.img)},300);
    }



    return(
        <>
            <StyledMain>

            <Header bgColor={state.bgColor}/>
            <StyledHeader>
            <div className="text__holder">
                <h1 className="welcome"> Siema, jestem Hubert </h1>
                <h2 className="welcome__caption"> Zajmuję się tworzeniem stron internetowych, <br/> komunikacją marketingową i fotografią. </h2>
            </div>

            <img src={sun} className="sun" />
            {/*<img src={cloud} className="cloud" />*/}

            <div className="weather__holder">
                <p>{props.weather.name} , {props.weather.main.temp.toFixed() - 273}°C</p>
            </div>
        </StyledHeader>

        <SectionTitile title="PROJEKTY" bgColor={state.bgColor} styleVaribles={""}/>

            <StyledGrid >
                <div className="grid__container">
                    {projectsElements.slice(0,state.itemLimit).map(item => {
                        return (
<Link  href={item.link} >
                            <StyledTile >
                              <img className="client__image"
                                     src={item.img}
                                     alt={props.alt}
                                     onMouseEnter={() => changeColors(item.color)}
                                     onMouseOver={(e : any) => (e.currentTarget.src = item.imgTwo)}
                                     onMouseLeave={() => {changeColors("white")} }/>
                                <h3 className="client__name">{item.title}</h3>
                            </StyledTile>
</Link>
                        )
                    })}
                </div>
                {isMoreVisible()
                }

            </StyledGrid>

                <SectionTitile title=" POZNAJMY SIĘ " bgColor={state.bgColor} styleVaribles={"margin-top: 100px"}/>

                <StyledGrid>
                    <div className="grid__container grid__container--wide">
                        {myPhotos.slice(0,state.itemLimit).map(item => {
                            return (
                                <StyledTile >
                                    <img className="client__image"
                                         src={myPhotos[0].img}
                                         alt={props.alt}
                                         // onMouseEnter={() => changeColors(item.color)}
                                         // onMouseLeave={() => changeColors("white")}
                                    />
                                    <h3 className="client__name">{item.title}</h3>
                                </StyledTile>
                            )
                        })}
                    </div>
                </StyledGrid>

            </StyledMain>

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
            weather: data,
        }
    }
}

const StyledTile = styled.div`
        width: fit-content;
        margin: 4em;

        &:hover{
        
        }
         @media(max-width: 700px) {
        margin: 1em;
        }
        
        .client__name{
        font-size: 20px;
        margin-top: 5px;
        }
        
        .client__image{
        width: 20vw;

        @media(max-width: 700px) {
        width: 90vw;
        }
        }
    `
const StyledButton = styled.button`
    display: block;
      margin-left: auto;
      margin-right: auto;
      font-size: 20px;
      border: none;
      background-color: transparent;
      font-weight: 700;
      cursor: pointer;
`
const StyledGrid = styled.div`

   .grid__container{
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      margin: 0 auto;
      justify-content: center;
        @media(max-width: 700px) {
        width: 100vw;
        }
        &--wide{
         width: 100vw;
        }
   }
   
   .see__more__btn {
    display: block;
      margin-left: auto;
      margin-right: auto;
      font-size: 20px;
      border: none;
      background-color: transparent;
      font-weight: 700;
         &-active{
      cursor: pointer;

   }
   &-disable{
   opacity: 0.4;
   cursor: none;
   }
     
   }
`
