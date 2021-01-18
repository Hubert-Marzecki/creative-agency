import logo from '../../public/smallrose.png'
import Carousel from 'react-elastic-carousel'
import styled from "@emotion/styled";
import SectionTitile from "../SectionTitle";
import * as React from "react";


export default function Slider({carouselItems}) {

    const breakPoints = [
        { width: 1, itemsToShow: 1 , pagination: true, showArrows: false},
        { width: 550, itemsToShow: 1, itemsToScroll: 1,  },
        { width: 850, itemsToShow: 1  },
        { width: 1150, itemsToShow: 1, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 1 },
        { width: 1750, itemsToShow: 1 },
    ]

    return (
       <SliderElement className="hidden sm:visible container mx-auto w-9/12">
           <SectionTitile
               title=" GALERIA "
               styleVaribles={
                   "margin-top: 50px;  margin-bottom: 0px; padding-bottom: 0px; color:white ;"
               }
           />
           <Carousel breakPoints={breakPoints}>
               {carouselItems.map(item => {
                   return (
                       <div className="carousel__item">
                           <img className={"image"} src={item.img} alt={item.alt} />
                       </div>
                       )

               })}
           </Carousel>
       </SliderElement>
    )
}

const SliderElement = styled.div`
        img{
          padding: 2em;
        }
  .rec-dot{
    background-color: white;
    &_active{
      background-color: white;
      box-shadow:  0 0 1px 3px white
    }
  }

  .rec-arrow{
    background-color: black;
    &:hover{
      background-color: black !important
    }
  }
   
  
    
`