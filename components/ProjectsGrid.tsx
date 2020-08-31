import ProjectTitle from "./ProjectTitle";
import * as React from "react";
import {ProjectTile} from "../Model";
import styled from "@emotion/styled";
import {useState} from "react";

export function ProjectsGrid(props) : JSX.Element {
    console.log(props)

    const [ state, setState] = useState({
        offset: 0
    })
    const LIMIT = 6;

    const StyledGrid = styled.div`
    background-color: ${props.bgColor};
   
   .grid__container{
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      margin: 0 auto;
      justify-content: center;
      
        @media(max-width: 700px) {
        width: 100vw;
        }
   }
   
   .see__more__btn-active{
      display: block;
      margin-left: auto;
      margin-right: auto;
      font-size: 20px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-weight: 700;
   }
`
    return (
        <>
            <StyledGrid >
                <div className="grid__container">
                    {/*{props.props.items.slice(state.offset,LIMIT).map( (item,index)=> {*/}
                    {/*    return (*/}
                    {/*            <ProjectTitle title={item.fields.clientName} img={item.fields.clientImg.fields.file.url} alt={props.title} key={index}/>*/}
                    {/*    )*/}
                    {/*})}*/}
                </div>
                <button className="see__more__btn-active"> Zobacz więcej </button>
            </StyledGrid>
        </>
    )
}