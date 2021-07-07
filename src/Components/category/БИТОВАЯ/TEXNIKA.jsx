import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/maishiy texnika/texnika1.jpeg"
import img2 from "../../../img and video/maishiy texnika/texnika2.jpg"
import talefon5 from "../../../img and video/maishiy texnika/texnika3.jpeg"
import img3 from "../../../img and video/maishiy texnika/texnika4.jpg"
import telefon7 from "../../../img and video/maishiy texnika/elektronika5.jpg"
import telefon9 from "../../../img and video/maishiy texnika/texnika6.jpg"
import telefon10 from "../../../img and video/maishiy texnika/elektronika7.jpg"
import kategoriya8 from "../../../img and video/maishiy texnika/texnika8.jpg"
import apple from "../../../img and video/maishiy texnika/texnika9.jpg"
const Telefon = () => {
    return (
        <div className={style.ImgMediaCard}>
            {ImgMediaCard("  Tехника", img1, 196, 767.47)}
            {ImgMediaCard("  Tехника", kategoriya8, 31, 347.24)}
            {ImgMediaCard(" Tехника", telefon10, 16, 838.55)}
            {ImgMediaCard(" Tехника", telefon9, 35, 477.45)}
            {ImgMediaCard(" Tехника", img3, 276, 618.21)}
            {ImgMediaCard(" Tехника", apple, 98, 595.54)}
            {ImgMediaCard(" Tехника", img2, 51.362)}
            {ImgMediaCard("Tехника", talefon5, 46, 597.25)}
            {ImgMediaCard(" Tехника", telefon7, 38, 548.63)}
        </div>
    );
};
export default Telefon;