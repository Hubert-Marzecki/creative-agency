import {ProjectsGrid} from "../components/ProjectsGrid";
import * as React from "react";
import progresjaImg from "../public/prog.jpg";
import SectionTitile from "../components/SectionTitle";
import {Header} from "../components/Header";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Projekty() {

    const projectsElements = [
        {
            title:' Progresja',
            img: progresjaImg,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'Chiński Festiwal Światła',
            img: progresjaImg,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'GiGCity.Tv',
            img: progresjaImg,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'Holofan3d',
            img: progresjaImg,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'Instacorner',
            img: progresjaImg,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'BeFriend',
            img: progresjaImg,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'ProTip Marketing',
            img: progresjaImg,
            alt:'',
            link: '/clients/progresja'
        },

    ]


    return(
        <>
            <Header bgColor={"bgGray"}/>
            <SectionTitile title={"PROJEKTY"} bgColor={"btGray"} styleVaribles={""} />
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
        </>
    )
}

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
      width: 100%;
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