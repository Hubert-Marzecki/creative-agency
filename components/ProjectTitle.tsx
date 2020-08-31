import styled from "@emotion/styled";

export default function ProjectTitle(props: {title: string, img: string, alt:string}) :JSX.Element{
    const StyledTile = styled.div`
        width: fit-content;
        margin: 4em;
        
         @media(max-width: 700px) {
        margin: 1em;
        }
        
        .client__name{
        font-size: 20px;
        margin-top: 5px;
        }
        
        .client__image{
        width: 20vw;
        
        @media(max-width: 700px) {
        width: 90vw;
        }
        
        
        }
`
    return (
        <>
        <StyledTile>
                <img className="client__image" src={props.img} alt={props.alt}/>
                <h3 className="client__name">{props.title}</h3>
        </StyledTile>
        </>
    )

    }