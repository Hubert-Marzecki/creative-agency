import jaOne from "../public/ja/ja1.jpg";
import SectionTitile from "../components/SectionTitle";
import React, {useEffect, useState} from "react";
import TabContent from "../components/tabContent/TabContent";
import styled from "@emotion/styled";
import {Header} from "../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function oMnie(): JSX.Element {
  const [openTab, setOpenTab] = useState<number>(1);
  const [bgColor, setBgColor] = useState("black");

    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);
    // useEffect(() => {
    //     document.body.style.backgroundColor = "black";
    //     if(openTab === 1 ) {
    //         document.body.style.backgroundColor = "black";
    //         setBgColor("black")
    //         document.body.style.transition ="background-color 0.4s ease-in-out";
    //     } else if( openTab === 2 ) {
    //         document.body.style.backgroundColor = "#000001";
    //         setBgColor("red")
    //
    //         document.body.style.transition ="background-color 0.4s ease-in-out";
    //     }
    // },[openTab])

    const StyledAbout  = styled.div`
        background-color: ${bgColor};
    `

  function displayTab(tabOpen: number) {
    switch (tabOpen) {
      case 1:
        return (
          <>
            <p className="leading-relaxed text-gray-600 mb-4"
               data-aos="zoom-in"
            >
              Na studiach nauczyłem się racjonalnie przeprowadzać analizy rynkowe i działalności biznesowej. Na codzienń korzystam z tej wiedzy
              i na jej podstawie dokonuje decyzji wgledem design-u i komunikacji marketingowej. Swoje umiejętności rozwijałem przy przeszło współpracując z 20. firmami z różnych branż.
              Programuje strony w nowoczesnych techologiach (Next.js, React), ale w razie potrzeby jestem w stanie szybko i skutecznie stworzyć stronę w WordPress.
            </p>
            <div className="flex border-t border-gray-300 py-2"  data-aos="zoom-in">
              <span className="text-gray-500">Studia </span>
              <span className="ml-auto text-gray-600">
                Koźmiński - Marketing
              </span>
            </div>

            <div className="flex border-t border-gray-300 py-2"   data-aos="zoom-in">
              <span className="text-gray-500">Przeprowadzone projekty</span>
              <span className="ml-auto text-gray-700">30</span>
            </div>

            <div className="flex border-t border-gray-300 py-2"  data-aos="zoom-in">
              <span className="text-gray-500">Szkolenia marketingowe</span>
              <span className="ml-auto text-gray-700">4</span>
            </div>

            <div className="flex border-t border-gray-300 py-2"   data-aos="zoom-in">
              <span className="text-gray-500">Szkolenia Front-end</span>
              <span className="ml-auto text-gray-700">3</span>
            </div>

            <div className="flex border-t border-b mb-6 border-gray-300 py-2"  data-aos="zoom-in">
              <span className="text-gray-500">Lat doświadczenia </span>
              <span className="ml-auto text-gray-700">2+</span>
            </div>

            {/* <div className="flex"> */}
            {/* <span className="title-font font-medium text-2xl text-gray-900">$58.00</span> */}
            {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Zadzwoń</button> */}
            {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
            {/* </div> */}
          </>
        );
        break;

      case 2:
        return (
          <>
            <p className="leading-relaxed text-gray-600 mb-4"
               data-aos="zoom-in"

            >
                    Tworzyć ciekawe projekty.
                <br/>
                Przedewszystkim działać na korzyść klienta.
                <br/>
                Terminowo wykonywać powierzone działania.
                <br/>
                Podchodzić do projektów z zachowaniem etyki zawodowej.
                <br/>
                Rozwijać siebie i działalność klienta.
                <br/>
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">

            </p>
            {/* <div className="flex border-t border-gray-300 py-2">
          <span className="text-gray-500"> Studia </span>
          <span className="ml-auto text-gray-600">Koźmiński - Marketing</span>
        </div> */}
            {/* 
        <div className="flex border-t border-gray-300 py-2">
          <span className="text-gray-500">Przeprowadzone projekty</span>
          <span className="ml-auto text-gray-700">30</span>
        </div>

        <div className="flex border-t border-gray-300 py-2">
          <span className="text-gray-500">Szkolenia marketingowe</span>
          <span className="ml-auto text-gray-700">4</span>
        </div>

        <div className="flex border-t border-gray-300 py-2">
          <span className="text-gray-500">Szkolenia Front-end</span>
          <span className="ml-auto text-gray-700">3</span>
        </div>
        
      
        <div className="flex border-t border-b mb-6 border-gray-300 py-2">
          <span className="text-gray-500">Lat doświadczenia </span>
          <span className="ml-auto text-gray-700">2+</span>
        </div>
       */}

            {/* <div className="flex"> */}
            {/* <span className="title-font font-medium text-2xl text-gray-900">$58.00</span> */}
            {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Zadzwoń</button> */}
            {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
            {/* </div> */}
          </>
        );
        break;

      case 3:
        return (
          <>
            <p className="leading-relaxed text-gray-600 mb-4" data-aos="zoom-in">
           Bez problemu mogę stwierdzić, że moim hobby jest programowanie, fotografia i biznes. Ciężko znaleźć miejsce pracy, które wymaga tych kwalifikacji, dlatego jestem zdecydowany rozwijać działalność jako freelancer.
          <br/> Kiedy nie pracuję maluje, trochę piszę i odkładam na campera. Wiele lat jeździłem autostopem i jestem szczerze zakochany w róznorodności jaką oferuję nam cały świat.
            </p>
            <div className="flex border-t border-gray-300 py-2" data-aos="zoom-in">
              <span className="text-gray-500"> Fotografia </span>
              {/* <span className="ml-auto text-gray-600">Koźmiński - Marketing</span> */}
            </div>

            <div className="flex border-t border-gray-300 py-2" data-aos="zoom-in">
              <span className="text-gray-500"> Malarstwo </span>
              {/* <span className="ml-auto text-gray-700">30</span> */}
            </div>

            <div className="flex border-t border-gray-300 py-2" data-aos="zoom-in">
              <span className="text-gray-500">Front-end</span>
              {/* <span className="ml-auto text-gray-700">4</span> */}
            </div>

            <div className="flex border-t border-gray-300 py-2" data-aos="zoom-in">
              <span className="text-gray-500">Pozdróże autostopowe</span>
              {/* <span className="ml-auto text-gray-700">3</span> */}
            </div>

            <div className="flex border-t border-b mb-6 border-gray-300 py-2" data-aos="zoom-in">
              <span className="text-gray-500"> Wspinaczka </span>
              {/* <span class="ml-auto text-gray-700">2+</span> */}
            </div>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start" data-aos="zoom-in">
              <a className="text-gray-500 hover:text-yellow-500 cursor-pointer"
              href={"https://www.facebook.com/hubert.marzecki.5"}
                 target="_blank" rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>

              <a className="ml-3 text-gray-500 hover:text-yellow-500 cursor-pointer"
                 href={"https://www.instagram.com/jamarzec/"}
                 target="_blank" rel="noopener noreferrer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 hover:text-yellow-500 cursor-pointer"
                 href={"https://www.linkedin.com/in/hubert-marzecki-98139016b/"}
                 target="_blank" rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>

            {/* <div class="flex"> */}
            {/* <span class="title-font font-medium text-2xl text-gray-900">$58.00</span> */}
            {/* <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Zadzwoń</button> */}
            {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
            {/* </div> */}
          </>
        );
        break;
    }
  }

  return (
    <>
        <Header bgColor={"BLACK"}/>

        <StyledAbout>
        <SectionTitile
          title="O mnie"
          styleVaribles="color:white; padding-bottom: 0; "
        />

        <section className="text-gray-700 body-font overflow-hidden">
          <div className="container px-5 md:py-24 py-3 mx-auto pl-">
            <div className="lg:w-4/5 mx-auto flex flex-wrap ">
              <img

                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto lg:h-64 object-cover object-center rounded sm:pr-8"
                src={jaOne}
              />

              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 mt-4">
                <h2 className="text-sm  text-gray-700 tracking-widest font-bolder">
                  FRONT-END | MARKETING{" "}
                </h2>
                <h1 className="text-gray-200 mt-2 text-3xl title-font font-bold mb-4">
                  Hubert Marzecki
                </h1>
                <div className="flex mb-4 ">
                  <a
                    onClick={() => setOpenTab(1)}
                    className={
                      openTab === 1
                        ? "font-bold cursor-pointer flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1"
                        : "font-bold cursor-pointer flex-grow text-gray-300 border-b-2 border-yellow-500 py-2 text-lg px-1"
                    }
                  >
                    Wykształcenie
                  </a>
                  <a
                    onClick={() => setOpenTab(2)}
                    className={
                      openTab === 2
                        ? "font-bold cursor-pointer flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1"
                        : "font-bold cursor-pointer flex-grow text-gray-300 border-b-2 border-yellow-500 py-2 text-lg px-1"
                    }
                  >
                    Misja
                  </a>
                  <a
                    onClick={() => setOpenTab(3)}
                    className={
                      openTab === 3
                        ? "font-bold cursor-pointer flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1"
                        : " font-bold cursor-pointer  flex-grow text-gray-300 border-b-2 border-yellow-500 py-2 text-lg px-1"
                    }
                  >
                    Hobby
                  </a>
                </div>

                {displayTab(openTab)}
              </div>
            </div>
          </div>
        </section>

{/*<section className="text-gray-700 body-font">*/}
{/*  <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">*/}
{/*    <div className="flex mx-auto flex-wrap mb-20">*/}

{/*      <a*/}
{/*      onClick={() => setOpenTab(1)}*/}
{/*      className={openTab === 1 ?*/}
{/*        "cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-yellow-500 inline-flex items-center leading-none border-yellow-500 text-gray-800 tracking-wider "*/}
{/*      :*/}
{/*      "cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-100 tracking-wider"}*/}
{/*      >        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">*/}
{/*          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>*/}
{/*        </svg> WYKSZTAŁCENIE*/}
{/*      </a>*/}
{/*      <a*/}
{/*       onClick={() => setOpenTab(2)}*/}
{/*      className={openTab === 2 ?*/}
{/*        "cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-yellow-500 inline-flex items-center leading-none border-yellow-500 text-gray-800 tracking-wider "*/}
{/*      :*/}
{/*      "cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-100 tracking-wider"}*/}
{/*      >*/}
{/*        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">*/}
{/*          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>*/}
{/*        </svg> MISJA*/}
{/*      </a>*/}
{/*      <a*/}
{/*       onClick={() => setOpenTab(3)}*/}
{/*       className={openTab === 3 ?*/}
{/*        "cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-yellow-500 inline-flex items-center leading-none border-yellow-500 text-gray-800 tracking-wider "*/}
{/*      :*/}
{/*      "cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-100 tracking-wider"}*/}
{/*      >        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">*/}
{/*          <circle cx="12" cy="5" r="3"></circle>*/}
{/*          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>*/}
{/*        </svg> CZEGO NIE LUBIĘ*/}
{/*      </a>*/}
{/*      <a*/}
{/*       onClick={() => setOpenTab(4)}*/}
{/*       className={openTab === 4 ?*/}
{/*        "cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-yellow-500 inline-flex items-center leading-none border-yellow-500 text-gray-800 tracking-wider "*/}
{/*      :*/}
{/*      "cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-100 tracking-wider"}*/}
{/*      >        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">*/}
{/*          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>*/}
{/*          <circle cx="12" cy="7" r="4"></circle>*/}
{/*        </svg>HOBBY*/}
{/*      </a>*/}

{/*    </div>*/}
{/*  </div>*/}
{/*</section>*/}

        {/*  */}
        {/* <section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
      <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section> */}
        {/* 

<section className="text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl  title-font mb-4 text-white font-bold tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
            <h3 className="text-gray-500 mb-3">Designer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 className="text-gray-500 mb-3">Designer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

        {/* <SectionTitile 
    title="W prau słowach o mnie"  
    styleVaribles="color:white; padding-bottom: 0; "
    /> */}
      </StyledAbout>

    </>
  );
}
