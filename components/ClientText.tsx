import styled from "@emotion/styled";

export default function ClientText(props:{text:string, styleVaribles:string}) {


    const StyledText = styled.div`
  width: 30%;
  text-align: justify;
  margin: 8em auto;
  font-size: 1em;
  line-height: 2em;
  ${props.styleVaribles}
  
        @media(max-width: 700px) {
        width: 90%;
        }
`

return(
    <StyledText>
        <p>{props.text}</p>
    </StyledText>
)


}
