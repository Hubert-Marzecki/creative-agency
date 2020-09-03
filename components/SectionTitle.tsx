import styled from "@emotion/styled";

export default function SectionTitile(props:{title:string,  styleVaribles:string}) {


    const StyledTitle = styled.h2`
  font-size: 5em;
  font-weight: 800;
  background-color: ${props.bgColor};
  text-align: center;
  padding:  1em;
  ${props.styleVaribles};
  
   @media(max-width: 700px) {
        font-size: 2em;
        }
  
  `
        return (
            <StyledTitle>
                {props.title}
                </StyledTitle>
        )



}
