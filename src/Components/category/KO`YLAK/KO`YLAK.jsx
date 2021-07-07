import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/qizlar koylak/koylak1.jpg"
import img2 from "../../../img and video/qizlar koylak/koylak1.png"
import talefon5 from "../../../img and video/qizlar koylak/koylak2.jpg"
import img3 from "../../../img and video/qizlar koylak/koylak3.jpg"
import telefon7 from "../../../img and video/qizlar koylak/koylak4.png"
import telefon9 from "../../../img and video/qizlar koylak/koylak5.png"
import telefon10 from "../../../img and video/qizlar koylak/koylak6.jpeg"
import kategoriya8 from "../../../img and video/qizlar koylak/koylak7.jpeg"
import apple from "../../../img and video/qizlar koylak/koylak8.png"
const Telefon = () => {
    return (
        <div className={style.ImgMediaCard}>
            {ImgMediaCard("  Одежда", img1, 16, 767.47)}
            {ImgMediaCard("  Одежда", kategoriya8, 81, 347.24)}
            {ImgMediaCard(" Одежда", telefon10, 16, 838.55)}
            {ImgMediaCard(" Одежда", telefon9, 35, 477.45)}
            {ImgMediaCard(" Одежда", img3, 76, 618.21)}
            {ImgMediaCard(" Одежда", apple, 98, 595.54)}
            {ImgMediaCard(" Одежда", img2, 51.362)}
            {ImgMediaCard("Одежда", talefon5, 46, 597.25)}
            {ImgMediaCard(" Одежда", telefon7, 38, 548.63)}
        </div>
    );
};
export default Telefon;