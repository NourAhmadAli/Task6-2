import React, {useState} from 'react'
import "./carousel.css"
import { BsChevronLeft,BsChevronRight} from "react-icons/bs"


export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1  : slide - 1);
    };

    return(
    <div className='Carousel'>
       <div className='left'><BsChevronLeft className='arrow arrow-left' onClick={ prevSlide}/></div>
        {data.map((item,idx) =>{
            return( <img src={item.src}  alt={item.alt} key={idx} className={slide===idx ? "slide" : "slide slide-hidden"}/>
       );
        })}
      <div className='right'> <BsChevronRight className='arrow arrow-right' onClick={nextSlide}/></div>
      {
        <span className='indicators'>
            {data.map((_,idx) => {
                return <button key={idx} onClick={() => setSlide(idx)} className={slide===idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}
        </span>}
    </div>)



};

