import {ProjectsGrid} from "../components/ProjectsGrid";
import * as React from "react";
import progresjaImg from "../public/prog.jpg";
import SectionTitile from "../components/SectionTitle";
import {Header} from "../components/Header";

export default function Projekty() {

    const projectsElements = [
        {
            title:' Progresja',
            img: progresjaImg,
            alt:''
        },
        {
            title:'Chiński Festiwal Światła',
            img: progresjaImg,
            alt:''
        },
        {
            title:'GiGCity.Tv',
            img: progresjaImg,
            alt:''
        },
        {
            title:'Holofan3d',
            img: progresjaImg,
            alt:''
        },
        {
            title:'Instacorner',
            img: progresjaImg,
            alt:''
        },
        {
            title:'BeFriend',
            img: progresjaImg,
            alt:''
        },
        {
            title:'ProTip Marketing',
            img: progresjaImg,
            alt:''
        },

    ]


    return(
        <>
            <Header bgColor={"bgGray"}/>
            <SectionTitile title={"PROJEKTY"} bgColor={"btGray"} styleVaribles={""} />
            <ProjectsGrid  elements={projectsElements} bgColor={"bgGray"} styleVaribles={"width: 100vw"} showMore={false}/>
        </>
    )
}