import {ProjectsGrid} from "../components/ProjectsGrid";
import progresjaImg from "../public/prog.jpg";
import SectionTitile from "../components/SectionTitle";
import {Header} from "../components/Header";
import Paragraph from "../components/Paragraph";

export default function oMnie() {

    const myPhotos = [
        {
            title:'',
            img: progresjaImg,
            alt:''
        },
        {
            title:'',
            img: progresjaImg,
            alt:''
        },
        {
            title:'',
            img: progresjaImg,
            alt:''
        },
    ]


    return (
        <>
            <Header bgColor={"bgBlue"}/>
            <SectionTitile title={"O MNIE"} bgColor={"bgBlue"} styleVaribles={""} />
            <ProjectsGrid elements={myPhotos} bgColor={"bgBlue"} styleVaribles={"width:100vw    "} showAll={true} />
            <Paragraph />
            </>
    )


}