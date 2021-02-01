import SectionTitile from "../components/SectionTitle";
import WorkFlowStep from "../components/workflowSteps/WorkFlowStep";
import { workflowStep } from "../elements/workflowStep";
import progSmallOne from '../public/progresja/prog-small.jpg';
import {Header} from "../components/Header/Header";
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function WorkFlow() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      disable: 'mobile'
    });
  }, []);

    return (
            <>
              <Header bgColor={"black"} />
<div className="bg-black w-screen">

<SectionTitile 
        title="JAK PRACUJE" 
        styleVaribles={"color:white; padding-bottom: 0; padding-top: 1em"} 
        />

<WorkFlowStep items={workflowStep} />

<SectionTitile 
        title="W SKRÓCIE" 
        styleVaribles={"color:white; padding-bottom: 0; margin-top: 1em"} 
        />


{/* SUMMARY */}
<section className="text-gray-700 body-font w-100">
  <div className="px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 sm:mx-auto" data-aos="fade-right">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-200 mb-1 tracking-wider">OMAWIANIE CELÓW</h2>
            <p className="leading-relaxed">Spisujemy założenia projektu i nadajemy im priorytety.  </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-200 mb-1 tracking-wider">PODPISANIE UMOWY</h2>
            <p className="leading-relaxed">Podpisujemy krótką umowę (zazwyczaj na zlecenie). W razie nowych projektów mogę obniżyć standardową stawkę.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-200 mb-1 tracking-wider">WSPÓŁPRACA</h2>
            <p className="leading-relaxed">Kiedy wykonuje zadania, stale jesteśmy w kontakcie i na bieżąco informuje o postępach.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">ANALIZA DZIAŁAŃ</h2>
            <p className="leading-relaxed">Analizujemy wykonaną pracę i wprowadzamy ewentualne poprawki.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-white  mb-1 tracking-wider">KOLEJNE DECYZJE</h2>
            <p className="leading-relaxed">Decydujemy, czy kontynuujemy współpracę, albo co należy usprawnić w naszej kooperacji</p>
          </div>
        </div>
      </div>
      <img className="lg:w-3/12 md:w-1/2 mr-auto rounded-lg md:mt-0 mt-12 " src={progSmallOne} alt="step" />
    </div>
  </div>
</section>

</div>

              </>
    )
}