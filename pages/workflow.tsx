import SectionTitile from "../components/SectionTitle";
import ClientText from "../components/ClientText";
// import flower from '../public/flower.png'
// import pion from '../public/dasd.png'
// import poziom from '../public/dasd-1.png'
// import tri from '../public/tri.png'
import styled from "@emotion/styled";
import {Header} from "../components/Header";
export default function WorkFlow() {


    function Section(elem: {title: string, text:string, img:string}) : JSX.Element{
    return (
        <>
            <h3>{elem.title}</h3>
            <ClientText text={elem.text}
                        styleVaribles={"margin: 2em auto;"} />
            <img className="" src={elem.img} />
            </>
    )
    }


    return (
            <>
                <Header bgColor={"black"}/>
                <StyledWorkflow>
                <SectionTitile title="WORKFLOW" bgColor={"black"} styleVaribles={""} />
                    {/*{section("rozmowa", 'Poznamy się i porozmawiajmy o tym gdzie moglibyśmy pomóc.Jeśli dojdziemy do podobnych wniosków podpisujemy umowę na określiony okres', pion)}*/}
                    <h3>Rozmowa</h3>
                     <ClientText text="Poznamy się i porozmawiajmy o tym gdzie moglibyśmy pomóc. Jeśli dojdziemy do podobnych wniosków podpisujemy umowę na określiony okres. "
                                 styleVaribles={"margin: 2em auto;"} />
                    <img className="" src={pion} />

                    <h3>Analiza</h3>
                    <ClientText text=" Our service is for free and does not require any software or registration. By using our service you are accepting our terms of use.

To convert a video, copy the YouTube video URL into our converter, choose a format and click the convert button. As soon as the conversion is finished you can download the file by clicking on the download button.

Enjoy! We hope you like our service. "
                                styleVaribles={"margin: 2em auto;"} />
                    <img className="" src={poziom} />

                    <h3>Umowa</h3>
                    <ClientText text=" By using our converter you can easily convert YouTube videos to mp3 (audio) or mp4 (video) files and download them for free - this service works for computers, tablets and mobile devices.

The videos are always converted in the highest available quality. Please note that we can only convert videos up to a length of 1 hour - the limitation is necessary, so the conversion of any video will not take more than a couple of minutes. "
                                styleVaribles={"margin: 2em auto;"}/>
                    <img className="" src={tri} />

                    <h3>Partnerstwo</h3>
                    <ClientText
                        text="Studia kierunkowe ukończyłem 3 lata temu na najelpszej placówce gastronomiczno - kosmiczno  - ekologicznej  wpołudniowej zabbabwi. Lubie lampki nocne i kolorowe koty () Lubię wiele rzeczy i rozwijaćsię w otoczeniu geniuszy "
                        styleVaribles={"margin: 2em auto;"} />
                    <img className="" src={flower} />

                </StyledWorkflow>

            </>
    )
}
const StyledWorkflow = styled.div`
    img{
    display:block;
    margin: 0 auto;
    height: 20vw;
    @media ( max-width: 700px) {
    width: 80vw;
    height: fit-content;
    }
    }
    
    h3{
    font-size: 2em;
    font-weight: 800;
     width: 30%;
    text-align: justify;
     margin: 0em auto;
     margin-top: 3em;
  
   @media ( max-width: 700px) {
    width: 100%;
     text-align: center;
    }
    }
`