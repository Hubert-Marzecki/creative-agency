import * as React from "react";
import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import SectionTitile from "../components/SectionTitle";
import ProjectTile from "../components/ProjectTileGallery/ProjectTile";
import Page from 'react-page-loading'
import Link from "next/link";
// import ProjectTileHolder from "../components/ProjectTileGallery/ProjectTileHolder";
import EmailForm from "../components/Form/EmailForm";
import ClientsTestimonials from "../components/Testimonials/ClientsTestimonials";
import { projectsElements } from "../elements/projectsElements";
import { myPhotos } from "../elements/myPhotos";
import prog from '../public/progresja/main.png'

import lomax from '../public/lomax/main.png'
import cfs from '../public/cfs/main.png'
import gig from '../public/gigcity/main.png'
import insta from '../public/instacorner/main.png'
import krea from '../public/kreatywnet/main.png'
import holo from '../public/holo/main.png'
import ibwp from '../public/ibwp/main.png'
import AOS from "aos";
import "aos/dist/aos.css";


//  TODO - add IBWP Section
//  TODO - add ProTip Section
// color - yellow fcaf58
import ProjectTileFull from "../components/ProjectTileGallery/ProjectTileFull";
import jaImg from '../public/ja/ja3.jpg';
import {Header} from "../components/Header/Header";
import Slider from "../components/Slider/Slider";



export default function Home(props: any): JSX.Element {
  const [state, setState] = useState({
    bgColor: "black",
    itemLimit: 6,
    isTileHovered: false,
  });
  const StyledPage = styled.div`
  transition: background-color 2s ease;
  cursor: pointer;
`;
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const galleryItems = [
    {
      img: prog,
      alt: "dupa"
    },
    {
      img: lomax,
      alt: "dupa"
    },
    {
      img: krea,
      alt: "dupa"
    },
    {
      img: gig,
      alt: "dupa"
    },
    {
      img: insta,
      alt: "dupa"
    },
    {
      img: holo,
      alt: "dupa"
    },
    {
      img: ibwp,
      alt: "dupa"
    }
  ]

  // useEffect(() => {
  //   document.body.style.backgroundColor = state.bgColor;
  //   document.body.style.transition ="background-color 0.4s ease-in-out";
  //   // setTimeout(() => {
  //   //
  //   //   document.body.style.transition ="all 1s ease";
  //   // },1000)
  // },[state.isTileHovered])

  function changeBgColor(color: string) {
      setState(s =>  ({...s, bgColor: color, isTileHovered: true}))
  }

  function changeImage(e, item) {
    e.currentTarget.src = item.imgThree
  }

  //ELEMENTS
  function createTiles(elements): JSX.Element {
    return (
        <>
          {elements.slice(0, state.itemLimit).map((item) => (
              <Link href={`${item.link}`} key={item.link}
              >
                <div
                    className="proj__tile mx-6 sm:w-4/12  mb-10 px-4 transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-105 cursor-pointer hover:text-yellow-500">
                  <div className=" h-auto overflow-hidden transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
                    <img
                        // onMouseEnter={(e) => { changeBgColor(item.color)} }
                        // onMouseLeave={(e) => { e.preventDefault() ,  setState(s =>  ({...s, bgColor: "black", isTileHovered: false}))}}
                         // onMouseOver={(e) => changeImage(e, item)}

                        alt="content"
                        className="object-cover  object-center h-full w-full cursor-pointer"
                        src={item.img}
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-300 mt-6 mb-3 ">
                    {item.title}
                  </h2>

                </div>
              </Link>
          ))}
        </>
    );
  }
  function createNotMovingTiles(elements): JSX.Element {
    return (
        <>
          {elements.slice(0, state.itemLimit).map((item) => (
              <Link href={`${item.link}`} key={item.link}
              >
                <div

                    className="proj__tile mx-6 sm:w-4/12  mb-10 px-4  cursor-pointer hover:text-yellow-500">
                  <div className=" h-auto overflow-hidden ">
                    <img

                        // onMouseEnter={(e) => { changeBgColor(item.color)} }
                        // onMouseLeave={(e) => { e.preventDefault() ,  setState(s =>  ({...s, bgColor: "black", isTileHovered: false}))}}
                        // onMouseOver={(e) => changeImage(e, item)}

                        alt="content"
                        className="object-cover  object-center h-full w-full cursor-pointer"
                        src={item.img}
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-300 mt-6 mb-3 ">
                    {item.title}
                  </h2>

                </div>
              </Link>
          ))}
        </>
    );
  }
  return (
    <>
      <Header bgColor={state.bgColor}/>
      <StyledPage className={"bg-black"}>
        <section className="text-white body-font h-screen  ">
          <div className="container  mx-auto flex px-5  pt-10 md:pt-0 md:flex-row flex-col items-center">
            <div className="  lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="sm:text-6xl text-3xl mb-4 font-bold"
                  data-aos="fade-down"
              >
                Hej, jestem Hubert
                {/* <br class="hidden lg:inline-block" />readymade gluten */}
              </h1>
              <p className="mb-8 sm:text-3xl text-3xl leading-relaxed"
                 data-aos="fade-right"
              >
                {" "}
                Zajmuję się tworzeniem stron internetowych, fotografią i komunikacją marketingową.
              </p>
              <div className="flex justify-center">
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 w-full">
              <img
                  data-aos="fade-left"
                className="object-cover object-center rounded"
                alt="hero"
                src={jaImg}
              />
            </div>
          </div>

        </section>
        <div className="m-24 p-24 md:p-0 md:m-0">

        </div>

        <SectionTitile title="PROJEKTY" styleVaribles={"color:white"} />
        {/* Portfolio section */}
        {/*<ProjectTile*/}
        {/*  tile={projectsElements}*/}
        {/*  isButtonVisible={false}*/}
        {/*  ctaText="Zobacz Więciej"*/}
        {/*  isCtaBellow={false}*/}
        {/*  offset={state.itemLimit}*/}
        {/*/>*/}

        <section className="text-gray-700 body-font">
          <div className="container   mx-auto lg:w-7/12 ">
            <div className="flex flex-wrap  -mb-10 text-center justify-center  mx-auto ">
              {createTiles(projectsElements)}
            </div>
          </div>
        </section>


        <button
          className={
            state.itemLimit < projectsElements.length
              ? "flex mx-auto mt-10 text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg"
              : "hidden"
          }
          onClick={() =>
            setState((s) => ({ ...s, itemLimit: s.itemLimit + 10 }))
          }
        >
          Zobacz więcej
        </button>

        <SectionTitile
          title=" POZNAJMY SIĘ "
          styleVaribles={"margin-top: 100px; color:white "}
        />



        <section className="text-gray-700 body-font">
          <div className="container  mx-auto lg:w-7/12 ">
            <div className="flex flex-wrap md:flex-no-wrap -mb-10 text-center justify-center  mx-auto ">
              {createNotMovingTiles(myPhotos)}
            </div>
          </div>
        </section>

        <Link href="/omnie">
          <button className="flex mx-auto mt-4 text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 cursor-pointer ">
            Poznajmy się
          </button>
        </Link>


        {/*<SectionTitile*/}
        {/*  title=" KLIENCI O MNIE "*/}
        {/*  styleVaribles={*/}
        {/*    "margin-top: 50px;  margin-bottom: 0px; padding-bottom: 0px; color:white ; font-size: 3em"*/}
        {/*  }*/}
        {/*/>*/}
        {/*<ClientsTestimonials />*/}

        <SectionTitile
          title=" GLAERIA "
          styleVaribles={
            "margin-top: 50px;  margin-bottom: 0px; padding-bottom: 0px; color:white ;"
          }
        />

        <Slider carouselItems={galleryItems}/>

        <SectionTitile
          title=" KONTAKT "
          styleVaribles={"margin-top: 100px; color:white; padding-bottom: 0px"}
        />
        <EmailForm />
      </StyledPage>
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


