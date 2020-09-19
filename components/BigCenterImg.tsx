import styled from "@emotion/styled";
import * as React from "react";

export default function BigCenterImg(props:{img:string, alt:string}) {
    return (
        <>
            <StyledClinetHeader >
                <div>
                    <img className='client__main__img' src={props.img} alt={props.alt}/>
                </div>
            </StyledClinetHeader>
        </>
    )
}

const StyledClinetHeader = styled.div`
display: flex;
justify-content: center;

.client__main__img{
display: block;
z-index:0 ;
margin: 8em auto;
width: 65%;
max-width: 90vw;
 @media(max-width: 700px) {
    width: 90vw;
    margin: 2em auto;
        }
}
`
