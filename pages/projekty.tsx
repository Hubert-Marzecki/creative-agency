import * as React from "react";
import Page from 'react-page-loading'



import { projectsElements } from "../elements/projectsElements";
import ProjectTileFull from "../components/ProjectTileGallery/ProjectTileFull";
import {Header} from "../components/Header/Header";


export default function Projekty() {
    return(
        <>
            <Header bgColor={"black"} />
            <div className="py-20 bg-black">
         <ProjectTileFull
            tile={projectsElements} 
            isButtonVisible={false}
            ctaText="Zobacz Więciej"
            isCtaBellow={false}
            offset={20}
       />
        </div>

        </>
    )
}
