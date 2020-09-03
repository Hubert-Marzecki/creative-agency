import styled from "@emotion/styled";
import * as React from "react";

export default function ClientIntro(props: {market:string,  tasks:string, info: string}) {

return(
    <>
        <StyledIntro>
            <div className="col">
                <h3>BRANŻA</h3>
                <h4>{props.market} </h4>


                <h3>DZIAŁANIA</h3>
                <h4>{props.tasks} </h4>
            </div>
            <div className="col">
                <h3>O PROJEKCIE</h3>
                <h4>{props.info} </h4>
            </div>
        </StyledIntro>
        </>
)
}

const StyledIntro = styled.div`
  justify-content: center;
  display: flex;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  
     @media(max-width: 700px) {
        width: 90vw;
        }
  
  .col{
  width: 50%;
   @media(max-width: 700px) {
        width: 100vw;
        }
  
    h3{
    margin-top: 1em;
    font-weight: 800;
    }
    h4{
    line-height: 2em;
    margin-top: 0.5em;
    }
  }
`