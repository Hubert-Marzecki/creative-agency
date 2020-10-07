import {ProjectsGrid} from "../components/ProjectsGrid";
import * as React from "react";
import SectionTitile from "../components/SectionTitle";
import {Header} from "../components/Header/Header";
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
import { projectsElements } from "../elements/projectsElements";
import ProjectTileFull from "../components/ProjectTileGallery/ProjectTileFull";


export default function Projekty() {
    return(
        <>
        <div className="py-20 bg-black">
         <ProjectTileFull
            tile={projectsElements} 
            isButtonVisible={false}
            ctaText="Zobacz Więciej"
            isCtaBellow={false}
            offset={10}
       />
        </div>

        </>
    )
}
