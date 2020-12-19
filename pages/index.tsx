import * as React from "react";
import { useState } from "react";
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

//  TODO - add IBWP Section
//  TODO - add ProTip Section
// color - yellow fcaf58
import ProjectTileFull from "../components/ProjectTileGallery/ProjectTileFull";
import jaImg from '../public/ja/ja3.jpg';

export default function Home(props: any): JSX.Element {
  const [state, setState] = useState({
    isDay: false,
    isRain: false,
    isWind: false,
    itemLimit: 6,
  });

  //ELEMENTS

  return (
    <>
      <StyledPage>
        <section className="text-white body-font h-screen bg-black ">
          <div className="container  mx-auto flex px-5 pt-40 md:flex-row flex-col items-center">
            <div className="  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="sm:text-6xl text-3xl mb-4 font-bold">
                Hej, jestem Hubert
                {/* <br class="hidden lg:inline-block" />readymade gluten */}
              </h1>
              <p className="mb-8 sm:text-3xl text-3xl leading-relaxed">
                {" "}
                Zajmuję się tworzeniem stron internetowych, fotografią i komunikacją marketingową.
              </p>
              <div className="flex justify-center">
                {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button> */}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 w-full">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={jaImg}
              />
            </div>
          </div>
          {/*<div className="container -mt-64 mx-auto flex px-5 pt-40 md:flex-row flex-col items-center">*/}
          {/*  <p className="hidden md:block">*/}
          {/*    {props.weather.name} , {props.weather.main.temp.toFixed() - 273}°C*/}
          {/*  </p>*/}
          {/*</div>*/}
        </section>
        <div className="m-24 p-24 md:p-0">

        </div>

        <SectionTitile title="PROJEKTY" styleVaribles={"color:white"} />
        {/* Portfolio section */}
        <ProjectTile
          tile={projectsElements}
          isButtonVisible={false}
          ctaText="Zobacz Więciej"
          isCtaBellow={false}
          offset={state.itemLimit}
        />
        <button
          className={
            state.itemLimit < projectsElements.length
              ? "flex mx-auto mt-10 text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg"
              : "null"
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

        <ProjectTileFull
          tile={myPhotos}
          isButtonVisible={false}
          ctaText="Poznajmy się"
          isCtaBellow={false}
          offset={state.itemLimit}
        />

        <Link href="/omnie">
          <button className="flex mx-auto  text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 cursor-pointer ">
            Poznajmy się
          </button>
        </Link>


        <SectionTitile
          title=" KLIENCI O MNIE "
          styleVaribles={
            "margin-top: 50px;  margin-bottom: 0px; padding-bottom: 0px; color:white ; font-size: 3em"
          }
        />
        <ClientsTestimonials />


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

const StyledPage = styled.div`
  background-color: black;
  cursor: pointer;
`;
