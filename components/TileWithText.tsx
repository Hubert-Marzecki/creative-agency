import styled from "@emotion/styled";

export default function TileWithText(props: {text:string, img:string, alt:string}) {

    const StyledTileWithText = styled.div`

         display: flex;
      flex-wrap: nowrap;
      width: 70%;
      margin: 0 auto;
      justify-content: center;
      
        .client__image{
        width: 20vw;
        }
        .client__text{
        min-width: 20vw;
        }
`
    return (
        <>
            <StyledTileWithText >
                <img className="client__image" src={props.img} alt={props.alt} />
                <p className="client__text">{props.text}</p>
            </StyledTileWithText>
        </>
    )
}