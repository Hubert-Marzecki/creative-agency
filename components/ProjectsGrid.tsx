import ProjectTile from "./ProjectTileGallery/ProjectTile";
import * as React from "react";
import {ProjectTileModel} from "../Model";
import styled from "@emotion/styled";
import {useState} from "react";
// @ts-ignore
import progresjaImg from '../public/prog.jpg'
// @ts-ignore
import GigCityImg from '../public/vovo.jpg'
// @ts-ignore
import CFS from '../public/chinki.jpg'
// @ts-ignore
import holofanImg from '../public/holofanmain.jpg'
import Link from "next/link";


export function ProjectsGrid(props: {elements: all[], styleVaribles:string, showAll:boolean}) : JSX.Element {

    const [ state, setState] = useState({
        offset: 10
    })

    const StyledGrid = styled.div`
   .grid__container{
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      margin: 0 auto;
      justify-content: center;
      ${props.styleVaribles};
      
        @media(max-width: 700px) {
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
   opacity: 0;
   cursor: none;
   }
     
   }
`


    return (
        <>
            <StyledGrid >

                <div className="grid__container">
                    {props.elements?.slice(0, state.offset).map(item => {
                        return   (
                                      <ProjectTile title={item.title} img={item.img} alt="foto" styleVaribles={props.styleVaribles} />
                        )
                    })}
                </div>
                {  props.showAll === false ? null :
                    <button className={ state.offset < props.elements?.length ? "see__more__btn see__more__btn-active" : "see__more__btn see__more__btn-disable" }
                                                                          onClick={() => setState( s => ({...s, offset: s.offset + 3}))}
                > Zobacz więcej </button>}


            </StyledGrid>
        </>
    )
}