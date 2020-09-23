import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"
import BigCenterImg from "../../components/BigCenterImg"
import ClientHeader from "../../components/ClientHeader"
import ClientIntro from "../../components/ClientIntro"
import ClientText from "../../components/ClientText"
import { Header } from "../../components/Header"
import { ProjectsGrid } from "../../components/ProjectsGrid"
import SectionTitile from "../../components/SectionTitle"





import progSmallOne from '../../public/progresja/prog-small.jpg'
import holoSmallOne  from '../../public/progresja/prog-small.jpg'
import instaSmallOne  from '../../public/progresja/prog-small.jpg'

import gigSmallOne from '../../public/gigcity/gig-small.jpg'
import gigSmallTwo from '../../public/gigcity/gig-small2.jpg'
import gigSmallThree from '../../public/gigcity/gig-small3.jpg'
import gigMain from '../../public/gigcity/gig-main.jpg'
import gigMainTwo from '../../public/gigcity/gig-main2.jpg'

import holoMain from '../../public/holo/holo-main.jpg'
import holoMainTwo from '../../public/holo/holo-main2.jpg'
import holoSmall from '../../public/holo/holo-small2.jpg'
import holoSmall2 from '../../public/holo/holo-small3.jpg'

export default function Holodan3d (){
    
    const projectsElements = [
        {
            title:'Progresja',
            img: progSmallOne,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'GiGCity.Tv',
            img: gigSmallOne,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'Holofan3d',
            img: holoSmallOne,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'Instacorner',
            img: instaSmallOne,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'BeFriend',
            img: instaSmallOne,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'ProTip Marketing',
            img: instaSmallOne,
            alt:'',
            link: '/clients/progresja'
        },

    ]

    const elementImg = [
        {
            img: holoSmall,
            alt:''
        },
        {
            img: holoSmall2,
            alt:''
        }
    ]
    const tileWithText = [
        {
            title: "",
            img: holoSmall,
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
    const tileWithTextTwo = [
        {
            title: "",
            img: holoSmall2,
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
         <ClientHeader title={"Holofan3d"} img={holoMain} alt={""} />

        <ClientIntro market={"Eventy / Rozrywka familijna"}  tasks={"Social Media, Fotografia, Video"}
                     info={"Cake Film & Photography has a knack for producing all kinds of immersive imagery. From tv commercials and editorial shoots, to digital campaigns, this team of visual pioneers can do it all.\n" +
                     "\n" +
                     "Their portfolio consists of captivating and beautiful content. We at Bolden were tasked to create a website that visually exhibits these high quality productio\n"}/>
        
         {/* <ProjectsGrid elements={elementImg} styleVaribles={"margin-top:3em"} showAll={false}/> */}
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
{/* <ProjectsGrid elements={tileWithTextTwo} styleVaribles={"h3{margin-top:10px; font-size:1em} ; line-height:2em"} showAll={true} /> */}
<BigCenterImg img={holoMainTwo} alt={""}/> 

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
                          {/* <ProjectsGrid elements={tileWithText} styleVaribles={"h3{margin-top:10px; font-size:1em} ; line-height:2em"} showAll={true} />*/}

    

            {/* <TileWithText text={"Cake Film & Photography has a knack for producing all kinds of immersive imagery. From tv commercials and editorial shoots, to digital campaigns, this team of visual pioneers can do it all.\n" +*/}
            {/*"\n" +*/}
            {/*"Their portfolio consists of captivating and beautiful content. We at Bolden were tasked to create a website that visually exhibits these high quality productio\n"}*/}
            {/*              img={progresjaImg} alt={""} /> */}

                          {/* <ProjectsGrid elements={tileWithTextTwo} styleVaribles={"h3{margin-top:10px; font-size:1em} ; line-height:2em"} showAll={true} /> */}

                          <SectionTitile title="INNE PROJEKTY"  styleVaribles="" />

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

        @media(max-width: 800px) {
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
      
        @media(max-width: 800px) {
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