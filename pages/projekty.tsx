import {ProjectsGrid} from "../components/ProjectsGrid";
import * as React from "react";
import SectionTitile from "../components/SectionTitle";
import {Header} from "../components/Header";
import Link from "next/link";
import styled from "@emotion/styled";

import progSmallOne from '../public/progresja/prog-small.jpg';
import progSmallTwo from '../public/progresja/prog-small2.jpg';
import progSmallThree from '../public/progresja/prog-small4.jpg';

import cfsSmallOne from '../public/cfs/cfs-small2.jpg';
import cfsSmallTwo from '../public/cfs/cfs-small3.jpg';
import cfsSmallThree from '../public/cfs/cfs-small4.jpg';

import gigSmallOne from '../public/gigcity/gig-small.jpg'
import gigSmallTwo from '../public/gigcity/gig-small2.jpg'
import gigSmallThree from '../public/gigcity/gig-small3.jpg'

import holoSmallOne from '../public/holo/holo-small.jpg'
import holoSmallTwo from '../public/holo/holo-small.jpg'
import holoSmallThree from '../public/holo/holo-small.jpg'

import instaSmallOne from '../public/instacorner/insta-small.png';
import instaSmallTwo from '../public/instacorner/insta-small2.png';
import instaSmallThree from '../public/instacorner/insta-small.png';

import jaOne from '../public/ja/ja1.jpg'
import jaTwo from '../public/ja/ja2.png'
import jaThree from '../public/ja/ja3.jpg'

import bFriendOne from '../public/bfriend/brfiend-small.jpg'
import bFriendTwo from '../public/bfriend/bfriend-small2.png'
import bFriendThree from '../public/bfriend/bfriend-small3.jpg'


export default function Projekty() {

    const projectsElements = [
        {
            title:' Progresja',
            img: progSmallOne,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'Chiński Festiwal Światła',
            img: cfsSmallOne,
            alt:'',
            link: '/clients/CFS'
        },
        {
            title:'GiGCity.Tv',
            img: gigSmallOne,
            alt:'',
            link: '/clients/gigCity'
        },
        {
            title:'Holofan3d',
            img: holoSmallOne,
            alt:'',
            link: '/clients/holofan3d'
        },
        {
            title:'Instacorner',
            img: instaSmallOne,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'BeFriend',
            img: bFriendOne,
            alt:'',
            link: '/clients/progresja'
        },
        {
            title:'ProTip Marketing',
            img: jaOne,
            alt:'',
            link: '/clients/progresja'
        },

    ]


    return(
        <>
        <StyledProjects >
            <Header />
            <SectionTitile title={"PROJEKTY"}styleVaribles={""} />
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
            </StyledProjects>
        </>
    )
}

const StyledProjects = styled.div`
background-color: black;
color: white;
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