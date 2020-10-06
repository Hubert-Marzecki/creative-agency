import * as React from "react";
import { getWeather } from "../services/client";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import axios from "axios";
import { JSXElementConstructor, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Header } from "../components/Header/Header";
import { ThemeProvider } from "emotion-theming";
import SectionTitile from "../components/SectionTitle";
import ProjectTile from "../components/ProjectTileGallery/ProjectTile";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { css, jsx, keyframes } from "@emotion/core";
import Link from "next/link";

import ProjectTileHolder from "../components/ProjectTileGallery/ProjectTileHolder";
import { ProjectsElementsInterface } from "../Model";
import EmailForm from "../components/Form/EmailForm";
import ClientsTestimonials from "../components/Testimonials/ClientsTestimonials";
import {projectsElements} from '../elements/projectsElements'
import {myPhotos} from '../elements/myPhotos'
//  TODO - add IBWP Section
//  TODO - add ProTip Section
// 


export default function Home(props: any): JSX.Element {

  const [state, setState] = useState({
    isDay: false,
    isRain: false,
    isWind: false,
    itemLimit: 6,
  });

  //ELEMENTS


  //STYLES
  const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    height: 100%;
    justify-content: space-between;
    @media (max-width: 700px) {
      min-height: 60vh;
    }

    .text__holder {
      margin-left: 100px;
      margin-top: 150px;
      max-width: 100vw;
      @media (max-width: 700px) {
        margin-left: 10px;
        margin-top: 40px;
      }

      .welcome {
        font-size: 4em;
        font-weight: 800;
        line-height: normal;
        @media (max-width: 700px) {
          font-size: 3em;
        }
      }

      .welcome__caption {
        font-size: 3em;
        line-break: normal;
        line-height: normal;
        font-weight: 300;
        //color:white;
        //-webkit-text-stroke: 2px black;

        @media (max-width: 700px) {
          font-size: 1em;
          -webkit-text-stroke: 1px transparent;
          color: black;
          margin-top: 10px;
        }
      }
    }

    .weather__holder {
      justify-self: flex-end;
      margin-left: 100px;
      margin-bottom: 10px;
      @media (max-width: 700px) {
        margin-left: 10px;
        margin-top: 40px;
      }
    }

    .sun {
      position: fixed;
      z-index: 0;
      top: 20%;
      left: 85%;
      width: 300px;
      height: 300px;
    }
  `;
 

  //FUNCTIONS
  function changeColors(color: string): void {
    setState((s) => ({ ...s, bgColor: color }));
    // setInterval( setState(s => ({...s, bgColorNew: s.bgColor})),6000);
  }
  function isMoreVisible(): null | JSX.Element {
    if (projectsElements.length < state.itemLimit) {
      return null;
    } else {
      return (
        <button
          onClick={() =>
            setState((s) => ({ ...s, itemLimit: s.itemLimit + 3 }))
          }
        >
          Zobacz więcej
        </button>
      );
    }
  }


  return (
    <>
    <div className="bg-black">

        <Header />
        <StyledHeader>
          <div className="text__holder text-white">
            <h1 className="welcome"> Hej, jestem Hubert </h1>
            <h2 className="welcome__caption">
              {" "}
              Zajmuję się tworzeniem stron internetowych, <br /> komunikacją
              marketingową i fotografią.{" "}
            </h2>
          </div>

          {/* <img src={sun} className="sun" /> */}
          {/*<img src={cloud} className="cloud" />*/}

          <div className="weather__holder text-white">
            <p >
              {props.weather.name} , {props.weather.main.temp.toFixed() - 273}°C
            </p>
          </div>
        </StyledHeader>

        <SectionTitile 
        title="PROJEKTY" 
        styleVaribles={"color:white"} 
        />
      
        {/* Portfolio section */}
       <ProjectTile
       tile={projectsElements} 
       isButtonVisible={true}
       ctaText="Zobacz"
       isCtaBellow={false}
       />


        <SectionTitile
          title=" POZNAJMY SIĘ "
          styleVaribles={"margin-top: 100px; color:white"}
        />

      <ProjectTile
       tile={myPhotos} 
       isButtonVisible={false}
       ctaText="Poznajmy się"
       isCtaBellow={false}
       />
           <SectionTitile
          title=" KLIENCI O MNIE "
          styleVaribles={"margin-top: 50px;  margin-bottom: 0px; padding-bottom: 0px; color:white ; font-size: 3em"}
        />
    <ClientsTestimonials />
    <button className="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Poznajmy się</button>


        <SectionTitile
          title=" KONTAKT "
          styleVaribles={"margin-top: 100px; color:white"}
        />
    <EmailForm/>
    </div>

    </>
  );
}

  export async function getServerSideProps() {
    function url(city: string): string {
        return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd7eb609b628174c76a482350679ebb2`;
      }
    const res = await fetch(url("warsaw"));
    const data = await res.json();
    return {
      props: {
        weather: data,
      },
    };
  }

