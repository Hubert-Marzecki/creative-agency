import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import BigCenterImg from "../../components/BigCenterImg";
import ClientHeader from "../../components/ClientHeader";
import ClientText from "../../components/ClientText";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header/Header";
import { ProjectsGrid } from "../../components/ProjectsGrid";
import SectionTitile from "../../components/SectionTitle";

import gigSmallOne from "../../public/gigcity/gig-small.jpg";
import gigSmallTwo from "../../public/gigcity/gig-small2.jpg";
import gigSmallThree from "../../public/gigcity/gig-small3.jpg";
import gigMain from "../../public/gigcity/gig-main.jpg";
import gigMainTwo from "../../public/gigcity/gig-main2.jpg";

import progSmallOne from "../../public/progresja/prog-small.jpg";
import holoSmallOne from "../../public/progresja/prog-small.jpg";
import instaSmallOne from "../../public/progresja/prog-small.jpg";
import ClientIntro from '../../components/ClientIntro/ClientIntro'


export default function gigCity() {
  return (
    <>
      <StyledClient>
        <ClientHeader title={"GIG City"} img={gigMain} alt={""} />
      
      <ClientIntro 
        market="Streaming Online"
        taskOne="Strategia promocji"
        taskTwo= "Social Media"
        taskThree="Fotografia"
        text= "Nowoczesna platforma streamingowa, której podstawowym zadaniem było odświerzyć muzyczną scenę w dobie pandemii! Uzytkownik, miał do dostęp do streamingu, w którym mógł swobodnie zarządzać obrazem z aż 8 kamer. Odwiedzili nas tacy artyści jak Mazolweski Kwintent czy VoVo."
        isUrl={false}
        url="string"
        />
        <SectionTitile
          title="O KLIENCIE"
          styleVaribles={"color:white; padding-bottom:0"}
        />

<section className="text-gray-300 body-font">
          <div className="container px-16 sm:px-40 py-20 mx-auto flex flex-wrap ">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-4/6 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-gray-100 font-bold">
                  Nowoczesna platforma streamingowa, pozwalająca na zmianę widoku między kamerami.
                </h1>
                <div className="leading-relaxed">
                  Pour-over craft beer pug drinking vinegar live-edge gastropub,
                  keytar neutra sustainable fingerstache kickstarter.
                </div>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2 ">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  8
                </h2>
                <p className="leading-relaxed">Kamer do wyboru</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                3
                </h2>
                <p className="leading-relaxed">Realizowane koncerty</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  35
                </h2>
                <p className="leading-relaxed">Specjalistów od stream</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  4
                </h2>
                <p className="leading-relaxed">Profile w Social Media</p>
              </div>
            </div>
            <div className="lg:w-2/6 sm:w-1/3  rounded-lg overflow-hidden mt-12 sm:mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full w-screen"
                src={gigMainTwo}
                alt="stats"
              />
            </div>
          </div>
        </section>

        <SectionTitile
          title="ZADANIA"
          styleVaribles={"color:white; padding-bottom:0"}
        />


        <section className="text-gray-300 body-font pb-32">
  <div className="container  pt-10 mx-auto">
    <div className="text-center mb-20">
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-200 mb-4">Zadania w ramach zlecenia</h1> */}
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Podczas pracy nad promocją pierwszych interaktywncych streamingów zajmowałem się głownie poniższymi działaniami.</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Kontakt z partnerami</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Prowadzenie profilu Facebook</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Prowadzenie kampanii reklamowych</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Prowadzenie Instagrama</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Przygotowanie strategii promocji koncertów</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Fotografia koncertowa </span>
        </div>
      </div>
    </div>
  </div>
</section>

<SectionTitile
          title="GALERIA"
          styleVaribles={"color:white; padding-bottom:1em; padding-top:0"}
        />

<section className="text-gray-700 body-font ">
          <div className="container px-20  mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={gigSmallOne}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={gigSmallTwo}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={gigSmallTwo}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={gigSmallTwo}
                  />
                </div>
              </div>
              
            </div>
            <p className="text-center pt-2">
      
              Więcej zdjęć na <a className="text-yellow-500 cursor-pointer"  href="#">Instagram</a>
            </p>
          </div>
        </section>




      </StyledClient>
    </>
  );
}

const StyledClient = styled.div`
  background-color: black;
  color: white;
`;
