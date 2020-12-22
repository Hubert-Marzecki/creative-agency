import React from "react"
import styled from "@emotion/styled"
import ClientHeader from "../../components/ClientHeader"
import SectionTitile from "../../components/SectionTitle"




import holoMain from '../../public/holo/holo-main.jpg'
import ClientIntro from "../../components/clientIntro/ClientIntro"
import main from  '../../public/protip/main-min.png';
import nums from '../../public/protip/nums-min.png'
import small from '../../public/protip/small-min.png'
import {Header} from "../../components/Header/Header";
export default function ProTip() {

    return (
        <>
          <Header bgColor={"black"} />
               <div className="bg-black text-white">
        <ClientHeader title={"ProTip"} img={main} alt={""} />

        <SectionTitile
          title="O PROJEKCIE"
          styleVaribles={"color:white; padding-bottom:0"}
        />


  <ClientIntro 
          market="Agecja marketingowa"
          taskOne="Kordynacja pracy 6 specjalistów"
          taskTwo= "Opieka klienta"
          taskThree="Tworzenie stron www i video"
          text="Protip Marketing to zespół zaangażowanych i doświadczonych ekspertów, których naczelną wartością jest wsparcie biznesowe obsługiwanych partnerów oraz klientów. Specjalizujemy się w marketingu internetowym, ze szczególnym umiłowaniem do narzędzi i platform Social Media. "
          isUrl={true}
          url="https://progresja.com/en/"
          />


        <SectionTitile
          title="O KLIENCIE"
          styleVaribles={"color:white; padding-bottom:0"}
        />

        <section className="text-gray-300 body-font">
          <div className="container px-12 sm:px-24 py-24 mx-auto flex flex-wrap ">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-4/6 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-gray-100 font-bold">
                  Czym może pochwalić się agencja
                </h1>
                <div className="leading-relaxed">
                Bardzo szybko rośniemy utrzymując średni wzrost na poziomie 10% w skali miesiąca. Każdego dnia ulepszamy technologie, rozwijamy zespół i dbamy monitorowanie algorytmów. Dzięki temu zawsze jesteśmy gotowi do działania!
                </div>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2 ">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  21%
                </h2>
                <p className="leading-relaxed">Wzrost sprzedaży</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  72%
                </h2>
                <p className="leading-relaxed">Wskaźnik poleceń</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                136% 
                </h2>
                <p className="leading-relaxed">Zwrot współpracy</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  94
                </h2>
                <p className="leading-relaxed">Aktywnych klientów</p>
              </div>
            </div>
            <div className="lg:w-2/6 sm:w-1/3  rounded-lg overflow-hidden mt-12 sm:mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src={nums}
                alt="stats"
              />
            </div>
          </div>
        </section>
{/* 
        <section className="text-gray-700 body-font ">
          <div className="container px-20  mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={holoMain}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={holoMain}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={holoMain}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={holoMain}
                  />
                </div>
              </div>
            </div>
            <p className="text-center pt-2">
              {" "}
              Wszystkie zdjęcia mojej produkcji{" "}
            </p>
          </div>
        </section> */}

<SectionTitile
          title="ZADANIA"
          styleVaribles={"color:white; padding-bottom:0"}
        />

        <section className="text-gray-300 body-font pb-32">
  <div className="container  mx-auto">
    <div className="text-center mb-20">
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Przygotowanie ston internetowych </span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium"> Obróbka grafik </span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Sesje zdjęciowe i nagrania video</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Zarządanie pracą 6 osobowego zespołu</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Obsługa ponad 10 klientów</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium"> Sprzedaż usłyg agencji </span>
        </div>
      </div>
    </div>
  </div>
</section>

      
{/* <SectionTitile
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
</section> */}


                 {/*<SectionTitile*/}
                 {/*    title="GALERIA"*/}
                 {/*    styleVaribles={"color:white; padding-bottom:40PX"}*/}
                 {/*/>*/}

        {/*<section className="text-gray-700 body-font ">*/}
        {/*  <div className="container px-20  mx-auto">*/}
        {/*    <div className="flex flex-wrap -mx-4 -mb-10 text-center">*/}
        {/*      <div className="sm:w-1/4 mb-10 px-4">*/}
        {/*        <div className="rounded-lg h-full overflow-hidden">*/}
        {/*          <img*/}
        {/*            alt="content"*/}
        {/*            className="object-cover object-center h-full w-full"*/}
        {/*            src={holoMain}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="sm:w-1/4 mb-10 px-4">*/}
        {/*        <div className="rounded-lg h-full overflow-hidden">*/}
        {/*          <img*/}
        {/*            alt="content"*/}
        {/*            className="object-cover object-center h-full w-full"*/}
        {/*            src={holoMain}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="sm:w-1/4 mb-10 px-4">*/}
        {/*        <div className="rounded-lg h-full overflow-hidden">*/}
        {/*          <img*/}
        {/*            alt="content"*/}
        {/*            className="object-cover object-center h-full w-full"*/}
        {/*            src={holoMain}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="sm:w-1/4 mb-10 px-4">*/}
        {/*        <div className="rounded-lg h-full overflow-hidden">*/}
        {/*          <img*/}
        {/*            alt="content"*/}
        {/*            className="object-cover object-center h-full w-full"*/}
        {/*            src={holoMain}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <p className="text-center pt-2">*/}
        {/*      {" "}*/}
        {/*      Wszystkie zdjęcia mojej produkcji{" "}*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</section>*/}



      </div>
</>
    )
}


