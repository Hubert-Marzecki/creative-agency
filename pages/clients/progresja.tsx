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
import {Header} from "../../components/Header";
import BigCenterImg from "../../components/BigCenterImg";
import styled from "@emotion/styled";
import ClientText from "../../components/ClientText";
import {useEffect} from "react";
import TileWithText from "../../components/TileWithText";
import Link from "next/link";
import SectionTitile from "../../components/SectionTitle";


export default function ProgresjaCase() {

    const projectsElements = [

        {
            title:'Chiński Festiwal Światła',
            img: progSmall,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'GiGCity.Tv',
            img: progSmall,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'Holofan3d',
            img: progSmall,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'Instacorner',
            img: progSmall,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'BeFriend',
            img: progSmall,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'ProTip Marketing',
            img: progSmall,
            alt:'',
            link: '/clients/progresja'
        },

    ]

    const elementImg = [
        {
            img: progSmall,
            alt:''
        },
        {
            img: progSmall2,
            alt:''
        }
    ]
    const tileWithText = [
        {
            title: "",
            img: progSmall3,
            alt: "",
        },
        {
            title: "\"Cake Film & Photography has a knack for producing all kinds of immersive imagery. From tv commercials and editorial shoots, to digital campaigns, this team of visual pioneers can do it all.\\n\" +\n" +
                "                             \"\\n\" +\n" +
                "                             \"Their portfolio consists of captivating and beautiful content. We at Bolden were tasked to create a website that visually exhibits these high quality productio\\n\"",
            img: "",
            alt: "",
        }

    ]



    return (
        <>
                <StyledClient>

                <Header  />
                 <ClientHeader title={"Progresja"} img={progClientMain} alt={""} />
                <ClientIntro market={"Koncerty / Imprezy"}  tasks={"Social Media, Fotografia"}
                             info={"Cake Film & Photography has a knack for producing all kinds of immersive imagery. From tv commercials and editorial shoots, to digital campaigns, this team of visual pioneers can do it all.\n" +
                             "\n" +
                             "Their portfolio consists of captivating and beautiful content. We at Bolden were tasked to create a website that visually exhibits these high quality productio\n"}/>
                 <BigCenterImg img={progClientMain2} alt={""}/>
                 <ProjectsGrid elements={elementImg} styleVaribles={"margin-top:3em"} showAll={false}/>
                 <ClientText text={"Check the render method of `ProjectsGrid`. See https://fb.me/react-warning-keys for more information.\n" +
                 "    in ProjectTile (at ProjectsGrid.tsx:68)\n" +
                 "    in ProjectsGrid (at omnie.tsx:32)\n" +
                 "    in oMnie (at _app.tsx:26)\n" +
                 "    in ThemeProvider (at _app.tsx:25)\n" +
                 "    in MyApp\n" +
                 "    in ErrorBoundary (created by ReactDevOverlay)\n" +
                 "    in ReactDevOverlay (created by Container)\n" +
                 "    in Container (created by AppContainer)\n" +
                 "    in AppContainer\n" +
                 "    in Root"} styleVaribles={""} />
                    {/*<TileWithText text={"Cake Film & Photography has a knack for producing all kinds of immersive imagery. From tv commercials and editorial shoots, to digital campaigns, this team of visual pioneers can do it all.\n" +*/}
                    {/*"\n" +*/}
                    {/*"Their portfolio consists of captivating and beautiful content. We at Bolden were tasked to create a website that visually exhibits these high quality productio\n"}*/}
                    {/*              img={progresjaImg} alt={""} />*/}
                                  <ProjectsGrid elements={tileWithText} styleVaribles={"h3{margin-top:10px; font-size:1em} ; line-height:2em"} showAll={true} />


                                  <SectionTitile title="INNE PROJEKTY" bgColor="" styleVaribles="" />

                    <StyledGrid >
                        <div className="grid__container">
                            {projectsElements.map(item => {
                                return (
                                    <Link  href={item.link} >
                                        <StyledTile >
                                            <img className="client__image"
                                                 src={item.img}
                                                 alt={item.alt}
                                            />
                                            <h3 className="client__name">{item.title}</h3>
                                        </StyledTile>
                                    </Link>
                                )
                            })}
                        </div>

                    </StyledGrid>

                </StyledClient>

        </>

    )
}

const StyledClient = styled.div`
    background-color: black;
    color:white;
`

const StyledTile = styled.div`
        width: fit-content;
        margin: 4em;
        &:hover{
        
        }
         @media(max-width: 700px) {
        margin: 1em;
        }
        
        .client__name{
        font-size: 20px;
        margin-top: 5px;
        }
        
        .client__image{
        width: 20vw;

        @media(max-width: 700px) {
        width: 90vw;
        }
        }
    `
const StyledGrid = styled.div`

   .grid__container{
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      margin: 0 auto;
      justify-content: center;
        @media(max-width: 700px) {
        width: 100vw;
        }
        &--wide{
         width: 100vw;
        }
   }
   
   .see__more__btn {
    display: block;
      margin-left: auto;
      margin-right: auto;
      font-size: 20px;
      border: none;
      background-color: transparent;
      
      font-weight: 700;
         &-active{
      cursor: pointer;

   }
   &-disable{
   opacity: 0.4;
   cursor: none;
   }
     
   }
`