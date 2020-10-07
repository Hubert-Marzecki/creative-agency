import {ProjectsGrid} from "../../components/ProjectsGrid";
// @ts-ignore

import * as React from "react";
import progClientMain from '../../public/progresja/prog-main.jpg'
import progClientMain2 from '../../public/progresja/prog-main2.jpg'
import progSmall from '../../public/progresja/prog-small.jpg'
import progSmall2 from '../../public/progresja/prog-small2.jpg'
import progSmall3 from '../../public/progresja/prog-small3.jpg'
import progSmall4 from '../../public/progresja/prog-small4.jpg'


import ClientHeader from "../../components/ClientHeader";
import ClientIntro from "../../components/ClientIntro";
import {Header} from "../../components/Header/Header";
import BigCenterImg from "../../components/BigCenterImg";
import styled from "@emotion/styled";
import ClientText from "../../components/ClientText";
import {useEffect} from "react";
import TileWithText from "../../components/TileWithText";
import Link from "next/link";
import SectionTitile from "../../components/SectionTitle";


export default function ProgresjaCase() {

    return (
        <>
        <div className="bg-black">

            <ClientHeader title={"Progresja"} img={progClientMain} alt={""} />

            <SectionTitile 
        title="O PROJEKCIE" 
        styleVaribles={"color:white; padding:0"} 
        />

            <section className="text-gray-700 body-font py-20">
  <div className="container  mx-auto flex flex-col">
    <div className="lg:w-5/6 mx-auto w-3/4">
      {/* <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
      </div> */}
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-base sm:pr-8 sm:py-8">
          {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div> */}
          <div className="flex flex-col">
            <h2 className="font-medium title-font mt-4 text-gray-100 text-lg font-bold">Branża</h2>
            <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-1"></div>
            <p className="text-base text-gray-400 leading-relaxed ">Eventy / Koncerty</p>

            <h2 className="font-medium title-font mt-4 text-gray-100 text-lg font-bold">Zakres działań</h2>
            <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
            <p className="text-base text-gray-400 leading-relaxed ">Social Media</p>
            <p className="text-base text-gray-400 leading-relaxed ">Fotografia</p>
            <p className="text-base text-gray-400 leading-relaxed ">Video</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a className="text-yellow-500 inline-flex items-center">Zobacz stonę
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<SectionTitile 
        title="o KLIENCIE" 
        styleVaribles={"color:white; padding-bottom:0"} 
        />


<section class="text-gray-700 body-font py-20">
  <div class="container px-12 sm:px-24 py-24 mx-auto flex flex-wrap ">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-4/6 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
    <div class="lg:w-2/6 sm:w-1/3  rounded-lg overflow-hidden mt-12 sm:mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src={progClientMain2} alt="stats"/>
    </div>
  </div>
</section>


<SectionTitile 
        title="GALERIA" 
        styleVaribles={"color:white; padding:0"} 
        />

<section class="text-gray-700 body-font py-20">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/4 mb-10 px-4">
        <div class="rounded-lg h-full overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={progSmall}/>
        </div>
      </div>
      <div class="sm:w-1/4 mb-10 px-4">
        <div class="rounded-lg h-full overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={progSmall2}/>
        </div>
      </div>
      <div class="sm:w-1/4 mb-10 px-4">
        <div class="rounded-lg h-full overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={progSmall3}/>
        </div>
      </div>
      <div class="sm:w-1/4 mb-10 px-4">
        <div class="rounded-lg h-full overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={progSmall4}/>
        </div>
      </div>

      {/* <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
      </div> */}
     
    </div>
  </div>
</section>




</div>


        </>

    )
}
