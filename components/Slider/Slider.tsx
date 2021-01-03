import logo from '../../public/smallrose.png'
import Carousel from 'react-elastic-carousel'
import styled from "@emotion/styled";


export default function Slider({carouselItems}) {
    return (
       <SliderElement className="container mx-auto w-9/12">
           <Carousel itemsToShow={1} >
               {carouselItems.map(item => {
                   return (
                       <div className="carousel__item">
                           <img className={""} src={item.img} alt={item.alt} />
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