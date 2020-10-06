import {ProjectsGrid} from "../components/ProjectsGrid";
import jaOne from "../public/ja/ja1.jpg";
import SectionTitile from "../components/SectionTitle";
import {Header} from "../components/Header/Header";
import Paragraph from "../components/Paragraph";
import styled from "@emotion/styled";

export default function oMnie() {


    return (
        <>
        <StyledSection>

            <Header />
            <SectionTitile title={"O MNIE"} styleVaribles={""} />
            <StyledAbout>
                <StyledTile >
                    <img className="client__image" src={jaOne}/>
                </StyledTile>
            <Paragraph />
            </StyledAbout>
        </StyledSection>

         </>
    )
}

const StyledSection = styled.div`
background-color: black;
color: white;
`
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