import {ProjectsGrid} from "../components/ProjectsGrid";
import progresjaImg from "../public/prog.jpg";
import SectionTitile from "../components/SectionTitle";
import {Header} from "../components/Header";
import Paragraph from "../components/Paragraph";
import styled from "@emotion/styled";

export default function oMnie() {

    const myPhotos = [
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
            <StyledAbout>
                <StyledTile >
                    <img className="client__image" src={progresjaImg}/>
                </StyledTile>
            <Paragraph />
            </StyledAbout>
         </>
    )
}

        const StyledAbout = styled.div`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 80%;
              margin: 0 auto;
              flex-wrap: wrap;
              
                @media(max-width: 700px) {
        width: 90vw;
        }
        
            
            `

const StyledTile = styled.div`
        max-width: 30%;
        //width: fit-content;
        margin: 4em;
        &:hover{
        
        }
         @media(max-width: 700px) {
          min-width: 90vw;
            margin: 0em;
        }
        
        .client__name{
        font-size: 20px;
        margin-top: 5px;
        }
        
        .client__image{
        max-width: 30vw;
        word-break: break-all;
        display: block;
        margin: 0 auto;
        
        
        @media(max-width: 700px) {
        width: 90vw;
        max-width: 90vw;
        }
        
        
        }
`