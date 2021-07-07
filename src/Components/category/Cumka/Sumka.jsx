import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/sumka/1.jpg"
import img2 from "../../../img and video/sumka/20170228_182033-e1515676642350.jpg"
import talefon5 from "../../../img and video/sumka/3.jpg"
import img3 from "../../../img and video/sumka/4.jpg"
import telefon7 from "../../../img and video/sumka/5.jpg"
import telefon9 from "../../../img and video/sumka/6.jpg"
import telefon10 from "../../../img and video/sumka/7.jpg"
import kategoriya8 from "../../../img and video/sumka/8.jpg"
import apple from "../../../img and video/sumka/9.jpg"
const Sumka = () => {
    return (
        <div className={style.ImgMediaCard}>
            {ImgMediaCard(" Сумки ", img1, 196, 767.47)}
            {ImgMediaCard(" обувь", telefon10, 16, 838.55)}
            {ImgMediaCard(" Сумки ", apple, 98, 595.54)}
            {ImgMediaCard(" Сумки", img3, 276, 618.21)}
            {ImgMediaCard(" обувь ", kategoriya8, 31, 347.24)}
            {ImgMediaCard(" обувь", img2, 51.362)}
            {ImgMediaCard(" обувь ", telefon9, 35, 477.45)}
            {ImgMediaCard(" Сумки", talefon5, 46, 597.25)}
            {ImgMediaCard(" обувь", telefon7, 38, 548.63)}
        </div>
    );
};
export default Sumka;