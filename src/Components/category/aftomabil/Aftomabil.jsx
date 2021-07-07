import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/Автотовары/1.jpg"
import img2 from "../../../img and video/Автотовары/2.jpg"
import talefon5 from "../../../img and video/Автотовары/9.jpg"
import img3 from "../../../img and video/Автотовары/3.jpg"
import telefon7 from "../../../img and video/Автотовары/4.jpg"
import telefon9 from "../../../img and video/Автотовары/5.jpg"
import telefon10 from "../../../img and video/Автотовары/6.jpg"
import kategoriya8 from "../../../img and video/Автотовары/7.png"
import apple from "../../../img and video/Автотовары/8.jpg"
const Avtomabil = () => {
    return (
        <div className={style.ImgMediaCard}>
            {ImgMediaCard(" Автотовары", img1, 196, 767.47)}
            {ImgMediaCard(" Автотовары", telefon10, 16, 838.55)}
            {ImgMediaCard(" Автотовары", apple, 98, 595.54)}
            {ImgMediaCard(" Автотовары", img3, 276, 618.21)}
            {ImgMediaCard(" Автотовары", kategoriya8, 31, 347.24)}
            {ImgMediaCard(" Автотовары", img2, 51.362)}
            {ImgMediaCard(" Автотовары", talefon5, 46, 597.25)}
            {ImgMediaCard(" Автотовары", telefon9, 35, 477.45)}
            {ImgMediaCard(" Автотовары", telefon7, 38, 548.63)}
        </div>
    );
};
export default Avtomabil;