import styled from "@emotion/styled";
import * as React from "react";

export default function ClientHeader(props: {
  title: string;
  img: string;
  alt: string;
}) {
  return (
    <>
      <StyledClinetHeader>
        <div>
          <h2 className="title">{props.title}</h2>
          <div className="img__wrapper">
          <img className="client__main__img" src={props.img} alt={props.alt} />
          </div>

        </div>
      </StyledClinetHeader>
    </>
  );
}

const StyledClinetHeader = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  .title {
    font-size: 8em;
    font-weight: 800;
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    margin-top: 10px;

    @media (max-width: 700px) {
      font-size: 3em;
      margin-top: 1em;
      position: absolute;
    }
  }
  
  .img__wrapper{
    //background-image: url("https://via.placeholder.com/150/0000FF/808080");
    //background-position: center;
    //background-size: cover;
    //width: 80%;
    //margin: 8em auto 0;
    //display: block;
    //max-width: 95vw;
    //min-width: 55vw;
    //height: 100vw;
  }
  .client__main__img {
    display: block;
    z-index: 0;
    margin: 8em auto 0;
    width: 80%;
    max-width: 95vw;
    min-width: 55vw;
    

    @media (max-width: 700px) {
      width: 95vw;
      margin: 3em auto;
    }
  }
`;
