import styled from "@emotion/styled";

export default function ProjectTile(props: {title: string, img: string, alt:string, styleVaribles:string}) :JSX.Element{
    const StyledTile = styled.div`
        max-width: 30%;
        //width: fit-content;
        margin: 4em;
        &:hover{
        
        }
         @media(max-width: 700px) {
          min-width: 90vw;
          max-width: 100vw;
           margin: 1em;
        }
        
        .client__name{
        font-size: 20px;
        margin-top: 5px;
        }
        
        .client__image{
        max-width: 20vw;
        word-break: break-all;
        
        
        @media(max-width: 700px) {
        width: 90vw;
        max-width: 90vw;
        }
        
        
        }
`
    return (
        <>
        <StyledTile >
                <img className="client__image" src={props.img}/>
                <h3 className="client__name">{props.title}</h3>
        </StyledTile>
        </>
    )

    }