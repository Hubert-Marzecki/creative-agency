import * as React from "react";
import ClientHeader from "../../components/ClientHeader";
import styled from "@emotion/styled";
import SectionTitile from "../../components/SectionTitle";


import cfsMainOne from '../../public/cfs/cfs-main.jpg'
import main from '../../public/cfs/main.png'
import nums from '../../public/cfs/nums.png'

import small1 from '../../public/cfs/small.png';
import small2 from '../../public/cfs/small-2.png';
import small3 from '../../public/cfs/small-3.png';
import small4 from '../../public/cfs/small-4.png';
import small5 from '../../public/cfs/small-5.png';
import small6 from '../../public/cfs/small-6.png';
import small7 from '../../public/cfs/small-7.png';

import ClientIntro from "../../components/clientIntro/ClientIntro";
import Slider from "../../components/Slider/Slider";


export default  function CFSCase() {

  const sliderItems = [small1, small2, small3, small4, small5, small6, small7];

    return (
        <>
        <StyledClient>

         <ClientHeader title={"CFS"} img={main} alt={""} />


         <ClientIntro 
        market="Wydarzenie publiczne"
        taskOne="Promocja w Sociel Media"
        taskTwo= "Fotografia"
        taskThree="Kontakt z Influencerami"
        text= "Jedno z największych wydarzeń przyblirzających kulturę dalekiego zachodu. Prosto z Chin przyjechało do Warszawy blisko 40 konstrukcji przedstawiających bliskie kulturze figury - ptaki, pandy itp. Teren wydarzenia zajął prawie całą przestrzeń Fortów Bema."
        isUrl={false}
        url="string"
        />


        <SectionTitile
          title="EFEKTY PROMOCJI"
          styleVaribles={"color:white; padding-bottom:0"}
        />

<section className="text-gray-300 body-font">
          <div className="container px-16 sm:px-40 py-20 mx-auto flex flex-wrap ">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-4/6 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-gray-100 font-bold">
                 Wystawca zagranicznych 
                </h1>
                <div className="leading-relaxed">
                  Podczas pracy na terenie wydarzenia, regualrnie zapraszałem influencerów, robiłem zdjęcia terenu i nagrywałem występy na naszej scenie.
                </div>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2 ">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                 10k 
                </h2>
                <p className="leading-relaxed">Obsługiwany Budżet</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  10+ 
                </h2>
                <p className="leading-relaxed">Kontaków z Influecerami</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  20+
                </h2>
                <p className="leading-relaxed">Nagranych występów</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  2
                </h2>
                <p className="leading-relaxed">Miesiące wystawy</p>
              </div>
            </div>
            <div className="lg:w-2/6 sm:w-1/3  rounded-lg overflow-hidden mt-12 sm:mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full w-screen"
                src={nums}
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
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Przez blisko 4 miesiace byłem odpowiedzialny za </p>
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
          <span className="title-font font-medium">Przygotowanie strategii eventów</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Fotografia wydarzeń </span>
        </div>
      </div>
    </div>
  </div>
</section>

<SectionTitile
          title="O WSPÓŁPRACY"
          styleVaribles={"color:white; padding-bottom:0"}
        />
<section className="text-gray-300 body-font">
  <div className="container px-5 pb-24 pt-10 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-100 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p className="text-gray-700 leading-relaxed">Senior Product Designer</p>
    </div>
  </div>
</section>
        </StyledClient>

</>
    )
}

const StyledClient = styled.div`
    background-color: black;
    color:white;
`
