
import * as React from "react";
import progClientMain from "../../public/progresja/prog-main.jpg";
import progClientMain2 from "../../public/progresja/prog-main2-img.jpg";
import progSmall from "../../public/progresja/prog-small.jpg";
import progSmall2 from "../../public/progresja/prog-small2.jpg";
import progSmall3 from "../../public/progresja/prog-small3.jpg";
import progSmall4 from "../../public/progresja/prog-small4.jpg";

import ClientHeader from "../../components/ClientHeader";
import SectionTitile from "../../components/SectionTitle";
import ClientIntro from "../../components/clientIntro/ClientIntro";

export default function ProgresjaCase() {
  return (
    <>
      <div className="bg-black text-white">
        <ClientHeader title={"Progresja"} img={progClientMain} alt={""} />

        <SectionTitile
          title="O PROJEKCIE"
          styleVaribles={"color:white; padding-bottom:0"}
        />

        <ClientIntro
          market="Koncerty"
          taskOne="Kompleksowa obsług social media"
          taskTwo="Fotografia"
          taskThree="Video"
          text="Progresja to największy klub koncertowy w Warszawie i jedno z najbardziej rozpoznawalnych miejsc w muzycznym półświatku Polski. W samym zeszłym roku klub odpowedziły m.in. takie gwiazdy jak Zakk Sabbath, Alzemo (były wokaliza Pantery), MachineGun Kelly i Opeth. Podczas pracy dla klubu wielokrotnie wykonywałem zdjęcia z koncertów oraz prowadziłem płatne kampanie."
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
                  Największy klub koncertowy w Warszawie 
                </h1>
                <div className="leading-relaxed">
                Podczas ponad 1.5 rocznej współpracy miałem szczęście opiekować się miejscem o mega klimacie. 
                </div>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2 ">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  45 000
                </h2>
                <p className="leading-relaxed">Polubień na FB</p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  5000
                </h2>
                <p className="leading-relaxed">Followers na IG </p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  5000 + 
                </h2>
                <p className="leading-relaxed"> Uczestików koncertów </p>
              </div>
              <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-100">
                  60
                </h2>
                <p className="leading-relaxed">Fotografowanych koncertów</p>
              </div>
            </div>
            <div className="lg:w-2/6 sm:w-1/3  rounded-lg overflow-hidden mt-12 sm:mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src={progClientMain2}
                alt="stats"
              />
            </div>
          </div>
        </section>

        <section className="text-gray-700 body-font ">
          <div className="container px-20  mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={progSmall}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={progSmall2}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={progSmall3}
                  />
                </div>
              </div>
              <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={progSmall4}
                  />
                </div>
              </div>
            </div>
            <p className="text-center pt-2">
              {" "}
              Wszystkie zdjęcia mojej produkcji{" "}
            </p>
          </div>
        </section>

        <SectionTitile
          title="O WSPÓŁPRACY"
          styleVaribles={"color:white; padding-bottom:0"}
        />

        <section className="text-gray-300 body-font">
          <div className="container px-5 pb-24 pt-10 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-gray-100 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Senior Product Designer
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
