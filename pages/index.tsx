import * as React from "react";
import { getWeather } from "../services/client";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import axios from "axios";
import { JSXElementConstructor, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Header } from "../components/Header";
import { ThemeProvider } from "emotion-theming";
import SectionTitile from "../components/SectionTitle";
import ProjectTile from "../components/ProjectTile";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { css, jsx, keyframes } from "@emotion/core";
import Link from "next/link";

import progSmallOne from "../public/progresja/prog-small.jpg";
import progSmallTwo from "../public/progresja/prog-small2.jpg";
import progSmallThree from "../public/progresja/prog-small4.jpg";

import cfsSmallOne from "../public/cfs/cfs-small2.jpg";
import cfsSmallTwo from "../public/cfs/cfs-small3.jpg";
import cfsSmallThree from "../public/cfs/cfs-small4.jpg";

import gigSmallOne from "../public/gigcity/gig-small.jpg";
import gigSmallTwo from "../public/gigcity/gig-small2.jpg";
import gigSmallThree from "../public/gigcity/gig-small3.jpg";

import holoSmallOne from "../public/holo/holo-small.jpg";
import holoSmallTwo from "../public/holo/holo-small.jpg";
import holoSmallThree from "../public/holo/holo-small.jpg";

import instaSmallOne from "../public/instacorner/insta-small.png";
import instaSmallTwo from "../public/instacorner/insta-small2.png";
import instaSmallThree from "../public/instacorner/insta-small.png";

import jaOne from "../public/ja/ja1.jpg";
import jaTwo from "../public/ja/ja2.png";
import jaThree from "../public/ja/ja3.jpg";

import bFriendOne from "../public/bfriend/brfiend-small.jpg";
import bFriendTwo from "../public/bfriend/bfriend-small2.png";
import bFriendThree from "../public/bfriend/bfriend-small3.jpg";

export default function Home(props: any): JSX.Element {
  interface ProjectsElements {
    title: string;
    img: string;
    imgTwo: string;
    imgThree: string;
    alt: string;
    color: string;
    link: string;
  }

  const [state, setState] = useState({
    isDay: false,
    isRain: false,
    isWind: false,
    bgColor: " black ",
    fontColor: "white",
    bgColorNew: "black",
    itemLimit: 6,
  });

  //ELEMENTS
  const projectsElements: ProjectsElements[] = [
    {
      title: " Progresja",
      img: progSmallOne,
      imgTwo: progSmallTwo,
      imgThree: progSmallThree,
      alt: "",
      color: " #004182",
      link: "/clients/progresja",
    },
    {
      title: "Chiński Festiwal Światła",
      img: cfsSmallOne,
      imgTwo: cfsSmallTwo,
      imgThree: cfsSmallThree,
      alt: "",
      color: " #8E0000",
      link: "/clients/CFS",
    },
    {
      title: "GiGCity.Tv",
      img: gigSmallOne,
      imgTwo: gigSmallTwo,
      imgThree: gigSmallThree,
      alt: "",
      color: " #7B436A",
      link: "/clients/gigCity",
    },
    {
      title: "Holofan3d",
      img: holoSmallOne,
      imgTwo: holoSmallTwo,
      imgThree: holoSmallThree,
      alt: "",
      color: " #612892",
      link: "/clients/holofan3d",
    },
    {
      title: "Instacorner",
      img: instaSmallOne,
      imgTwo: instaSmallOne,
      imgThree: instaSmallOne,
      alt: "",
      color: " #FF748C",
      link: "/clients/instacorner",
    },
    {
      title: "BeFriend",
      img: bFriendOne,
      imgTwo: bFriendTwo,
      imgThree: bFriendThree,
      alt: "",
      color: "  #289261",
      link: "/clients/progresja",
    },
    {
      title: "ProTip Marketing",
      img: progSmallOne,
      imgTwo: progSmallTwo,
      imgThree: progSmallThree,
      alt: "",
      color: "#fff968",
      link: "/clients/progresja",
    },
  ];
  const myPhotos = [
    {
      title: "",
      img: jaOne,
      alt: "",
    },
    {
      title: "",
      img: jaTwo,
      alt: "",
    },
    {
      title: "",
      img: jaThree,
      alt: "",
    },
  ];

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
  const bounce = keyframes`
    from, 0% {
    background-color: ${state.bgColorNew};
    }
      1% {
       background-color: ${state.bgColorNew};
      }
       100% {
       background-color: ${state.bgColor};
      }
`;
  const StyledMain = styled.div`
    background-color: ${state.bgColor};
    will-change: background-color;
    animation: ${bounce} 0.5s ease-in-out;
    animation-iteration-count: 1;
    color: ${state.fontColor};
    padding-bottom: 10em;
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
        <StyledButton
          onClick={() =>
            setState((s) => ({ ...s, itemLimit: s.itemLimit + 3 }))
          }
        >
          Zobacz więcej
        </StyledButton>
      );
    }
  }

  function replaceImg(e: any, item) {
    e.currentTarget.src = item.imgTwo;
  }
  function moveToAnotherImage(e: any, item) {
    e.currentTarget.src = item.imgThree;
    //   e.currentTarget.className
  }

  function imgs(e: any, item: ProjectsElements): void {
    setInterval(() => {
      (e: any) => (e.currentTarget.src = item.imgTwo);
    }, 300);
    setInterval(() => {
      (e: any) => (e.currentTarget.src = item.imgThree);
    }, 300);
    setInterval(() => {
      (e: any) => (e.currentTarget.src = item.img);
    }, 300);
  }

  return (
    <>
      <StyledMain>
        <Header />
        <StyledHeader>
          <div className="text__holder">
            <h1 className="welcome"> Siema, jestem Hubert </h1>
            <h2 className="welcome__caption">
              {" "}
              Zajmuję się tworzeniem stron internetowych, <br /> komunikacją
              marketingową i fotografią.{" "}
            </h2>
          </div>

          {/* <img src={sun} className="sun" /> */}
          {/*<img src={cloud} className="cloud" />*/}

          <div className="weather__holder">
            <p>
              {props.weather.name} , {props.weather.main.temp.toFixed() - 273}°C
            </p>
          </div>
        </StyledHeader>

        <SectionTitile title="PROJEKTY" styleVaribles={""} />

        <StyledGrid>
          <div className="grid__container">
            {projectsElements.slice(0, state.itemLimit).map((item) => {
              return (
                <Link href={item.link}>
                  <StyledTile>
                    <img
                      className="client__image"
                      src={item.img}
                      alt={props.alt}
                      /* onMouseEnter={() => changeColors(item.color)} */
                      onMouseOver={(e: any) => replaceImg(e, item)}
                      onMouseLeave={(e) => moveToAnotherImage(e, item)}
                    />
                    <h3 className="client__name">{item.title}</h3>
                  </StyledTile>
                </Link>
              );
            })}
          </div>
          {isMoreVisible()}
        </StyledGrid>

        <SectionTitile
          title=" POZNAJMY SIĘ "
          styleVaribles={"margin-top: 100px"}
        />

        <StyledGrid>
          <div className="grid__container grid__container--wide">
            {myPhotos.slice(0, state.itemLimit).map((item, index) => {
              return (
                <StyledTile>
                  <img
                    className="client__image"
                    src={myPhotos[index].img}
                    alt={props.alt}
                    // onMouseEnter={() => changeColors(item.color)}
                    // onMouseLeave={() => changeColors("white")}
                  />
                  <h3 className="client__name">{item.title}</h3>
                </StyledTile>
              );
            })}
          </div>
        </StyledGrid>
        <StyledButton> Poznajmy się </StyledButton>

        <SectionTitile title=" KONTAKT " styleVaribles={"margin-top: 100px"} />
        <StyledForm class="form">
          <h2>CONTACT US</h2>
          <p type="Name:">
            <input placeholder="Write your name here.." />
          </p>
          <p type="Email:">
            <input placeholder="Let us know how to contact you back.." />
          </p>
          <p type="Message:">
            <input placeholder="What would you like to tell us.." />
          </p>
          <button>Send Message</button>
          {/* <div>
            <span class="fa fa-phone"></span>001 1023 567
            <span class="fa fa-envelope-o"></span> contact@company.com
          </div> */}
        </StyledForm>
      </StyledMain>
    </>
  );
}

const StyledForm = styled.form`
     width: 50vw;
    height: 440px;
    /* background: #e6e6e6; */
    border-radius: 8px;
    box-shadow: 0 0 40px -10px #000;
    margin: calc(50vh - 220px) auto;
    padding: 20px 30px;
    max-width: calc(100vw - 40px);
    /* box-sizing: border-box; */
    /* font-family: "Montserrat", sans-serif; */
    position: relative;
    @media (max-width: 700px) {
        width: 90vw;
  }
  
  h2 {
    margin: 10px 0;
    padding-bottom: 10px;
    width: 180px;
    border-bottom: 3px solid #78788c;
  }
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s;
    border-bottom: 2px solid #bebed2;
    color: white;
  }
  input:focus {
    border-bottom: 2px solid #78788c;
  }

  p:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: white;
  }
  button {
    float: right;
    padding: 8px 12px;
    margin: 8px 0 0;
    font-family: "Montserrat", sans-serif;
    border: 2px solid #78788c;
    background: 0;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  }
  button:hover {
    background: #78788c;
    color: #fff;
  }
  div {
    content: "Hi";
    position: absolute;
    bottom: -15px;
    right: -20px;
    background: #50505a;
    color: #fff;
    width: 320px;
    padding: 16px 4px 16px 0;
    border-radius: 6px;
    font-size: 13px;
    box-shadow: 10px 10px 40px -14px #000;
  }
  span {
    margin: 0 5px 0 15px;
  }
`;
function url(city: string): string {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd7eb609b628174c76a482350679ebb2`;
}

export async function getServerSideProps() {
  const res = await fetch(url("warsaw"));
  const data = await res.json();
  return {
    props: {
      weather: data,
    },
  };
}

const StyledTile = styled.div`
  width: fit-content;
  margin: 4em;
  cursor: pointer;
  &:hover {
    h3 {
      font-weight: 600;
    }
  }
  @media (max-width: 700px) {
    margin: 1em;
  }

  .client__name {
    font-size: 20px;
    margin-top: 5px;
  }

  .client__image {
    /* width: 20vw; */
    height: 40vh;

    transform-origin: 0 0;
    transition: transform 0.25s, visibility 0.25s ease-in;
    cursor: pointer;
    /* &:hover{
           transform: scale(1.1);
      } */

    @media (max-width: 700px) {
      width: 90vw;
    height: auto;

    }
  }
`;
const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  border: none;
  background-color: transparent;
  font-weight: 700;
  cursor: pointer;
  color: white;
`;
const StyledGrid = styled.div`
  .grid__container {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
    @media (max-width: 700px) {
      width: 100vw;
    }
    &--wide {
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
    &-active {
      cursor: pointer;
    }
    &-disable {
      opacity: 0.4;
      cursor: none;
    }
  }
`;
