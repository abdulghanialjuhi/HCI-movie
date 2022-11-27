import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import movieStyle from '../styles/movies.module.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Router from 'next/router';

const IMAGE_URL = "https://image.tmdb.org/t/p/w1280";


export default function Panner({ data }) {

    // console.log(data);
    // const firstFive = []
    const [firstFive, setFirstFive] = useState([])

    const slideRef = useRef()


  useEffect(() => {
    for(let i = 0; i < 5; i++) {
        // firstFive.push(data[i].backdrop_path)
        setFirstFive(firstFive => [...firstFive, data[i]])
    }
  }, [])

    // console.log(firstFive);

    const properties = {
        duration: 5000,
        autoplay: true,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: "ease",
        // indicators: (i) => <div className="indicator">{i + 1}</div>
      };

      const back = () => {
        slideRef.current.goBack();
      }
    
      const next = () => {
        slideRef.current.goNext();
      }

      const handleMovieInfo = (index) => {
        // console.log(firstFive[index]);
        Router.push(`movie/${firstFive[index].id}`)
      }

    return (
        <div className={movieStyle.pannerContainer}>
            <div className={movieStyle.panner}>
                <div className="slide-container">
                    <Slide ref={slideRef} {...properties}>
                        {firstFive.map((each, index) => (
                            <div key={index} className={movieStyle.pannerInside}>
                                <div className="each-slide">
                                    <img className="lazy" style={{width: '100%'}} src={IMAGE_URL+each.backdrop_path} alt="sample" />
                                </div>
                                <div className={movieStyle.info}>
                                    <span> Play</span>
                                    <span onClick={handleMovieInfo.bind(this, index)}> Info</span>
                                </div>
                            </div>
                        ))}
                    </Slide>
                    <div className={movieStyle.left}>
                        <AiOutlineLeft style={{cursor: 'pointer'}} onClick={back} size={35}  />
                    </div>
                    <div className={movieStyle.right}>
                        <AiOutlineRight style={{cursor: 'pointer'}} onClick={next} size={35}  />
                    </div>

              
                </div>
            </div>
        </div>
    )
}
