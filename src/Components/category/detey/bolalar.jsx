import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/bolajonlar/bola1.jpg"
import img2 from "../../../img and video/bolajonlar/bola2.jpg"
import talefon5 from "../../../img and video/bolajonlar/bola3.jpg"
import img3 from "../../../img and video/bolajonlar/bola4.jpg"
import telefon7 from "../../../img and video/bolajonlar/bola5.jpg"
import telefon9 from "../../../img and video/bolajonlar/UGaIcT34Z-0.jpg"
import telefon10 from "../../../img and video/bolajonlar/bola7.jpg"
import kategoriya8 from "../../../img and video/bolajonlar/1717771.jpg"
import apple from "../../../img and video/bolajonlar/bolla9.jpg"
const Bolalar = () => {
    return (
        <div className={style.ImgMediaCard}>
            {ImgMediaCard("  детям", img1, 16, 767.47)}
            {ImgMediaCard("  детям", kategoriya8, 81, 347.24)}
            {ImgMediaCard(" детям", telefon10, 16, 838.55)}
            {ImgMediaCard(" детям", telefon9, 35, 477.45)}
            {ImgMediaCard(" детям", img3, 76, 618.21)}
            {ImgMediaCard(" детям", apple, 98, 595.54)}
            {ImgMediaCard(" детям", img2, 51.362)}
            {ImgMediaCard("детям", talefon5, 46, 597.25)}
            {ImgMediaCard(" детям", telefon7, 38, 548.63)}
        </div>
    );
};
export default Bolalar;