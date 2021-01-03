
import React from 'react'
import ClientHeader from '../../components/ClientHeader'
import SectionTitile from '../../components/SectionTitle'
import styled from '@emotion/styled'

import main from  '../../public/kreatywnet/main-min.png';
import nums from '../../public/instacorner/nums-min.png'
import small from '../../public/instacorner/small-min.png'

import instaSQR from '../../public/instacorner/insta-sqr.jpeg'
import ClientIntro from '../../components/clientIntro/ClientIntro'
import {Header} from "../../components/Header/Header";

export default function Kreatywnet() {


    return (
        <>
            <Header bgColor={"BLACK"} />
            <div className="bg-black text-white">
                <ClientHeader title={"Kreatywnet"} img={main} alt={""} />

                <SectionTitile
                    title="O PROJEKCIE"
                    styleVaribles={"color:white; padding-bottom:0"}
                />


                <ClientIntro
                    market="Wyposarzenie Eventowe"
                    taskOne="Stworzenie strony www"
                    taskTwo= "Obróbka grafik"
                    taskThree=""
                    text= "Firma powstałą w 10/10/2010 roku aby w dobie dzisiejszych dynamicznych zmian wyróżniać marki, które poszukują profesjonalnego partnera biznesowego oraz wsparcia i fachowego doradztwa w zakresie digital marketingu. Z pewnością dobiorą dla Ciebie odpowiednie działania."
                    isUrl={true}
                    url="https://kreatywnet.marketing/"
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
                                   Kreatywnet - nowoczesna agencja marketingowa
                                </h1>
                                <div className="leading-relaxed">
                                    Jest nie tylko zachwycający, ale prosty w montażu.
                                    Konstrukcja składa się z kilku wytrzymałych paneli dzięki temu jest stabilna, prosta do złożenia i z łatwością będzie można ją przenieść.
                                </div>
                            </div>
                            <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2 ">
                                <h2 className="title-font font-bold text-3xl text-gray-100 ">
                                    10
                                </h2>
                                <p className="leading-relaxed">Lat na rynku</p>
                            </div>
                            <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-bold text-3xl text-gray-100">
                                    10+
                                </h2>
                                <p className="leading-relaxed">Klientów w portolio</p>
                            </div>
                            <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                              <h2 className="title-font font-medium text-3xl text-gray-100">
                                590
                              </h2>
                              <p className="leading-relaxed">Zrealizowanych projektów</p>
                            </div>
                            <div className="sm:p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-100">
                                    78%
                                </h2>
                                <p className="leading-relaxed">Wzrost u klientów</p>
                            </div>
                        </div>
                        <div className="lg:w-2/6 sm:w-1/3  rounded-lg overflow-hidden mt-12 sm:mt-6 sm:mt-0">
                            <img
                                className="object-cover object-center w-full h-full"
                                src={main}
                                alt="stats"
                            />
                        </div>
                    </div>
                </section>

                <SectionTitile
                    title="ZADANIA "
                    styleVaribles={"color:white; padding-bottom:0"}
                />
                <section className="text-gray-300 body-font pb-32">
                    <div className="container  pt-10 mx-auto">
                        <div className="text-center mb-20">
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Przygotowanie szkicu projektu</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Przygotowanie grafik</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Programowanie strony</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Optymalizacja</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium"> Analityka </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium"> Raportowanie postępów </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div>

        </>
    )
}


