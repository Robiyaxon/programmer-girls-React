import { CCarousel, CCarouselItem } from '@coreui/react';
import main from "../../../img and video/Carousel/Tmall.jpg"
import clean from "../../../img and video/Carousel/clean.png"
import auto from "../../../img and video/Carousel/auto product.png";
import 'react-carousel-indicator/dist/index.css'
import TV from "../../../img and video/Carousel/Tmall_tv.png";
import women from "../../../img and video/Carousel/women.png";
import realme from "../../../img and video/Carousel/realme.png";
import React from 'react'
import style from "../../../Module.css/Carousel/Carousel.module.css"
import { Indicators } from '../Indicator/Indicator';
export const Carousel = () => {
    let map = [
        { src: main, id: 1 },
        { src: women, id: 1 },
        { src: clean, id: 1 },
        { src: auto, id: 1 },
        { src: TV, id: 1 },
        { src: realme, id: 1 }]
    let maps = map.map(a => <CCarouselItem key={a.id}>
        <img src={a.src} className={style.Glavnaya_img} alt="" />
    </CCarouselItem>)
    return (
        <>
            <div className={style.Glavnaya}  >
                <CCarousel controls indicators >
                    {maps}
                </CCarousel>
            </div>
            <Indicators />
        </>
    )
}