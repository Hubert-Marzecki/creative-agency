import * as React from "react";



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
