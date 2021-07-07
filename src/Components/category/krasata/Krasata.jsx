import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/krasata/1.jpeg"
import img2 from "../../../img and video/krasata/2.jpeg"
import talefon5 from "../../../img and video/krasata/3.jpg"
import img3 from "../../../img and video/krasata/4.jpg"
import telefon7 from "../../../img and video/krasata/5.jpeg"
import telefon9 from "../../../img and video/krasata/6.jpg"
import telefon10 from "../../../img and video/krasata/7.jpg"
import kategoriya8 from "../../../img and video/krasata/8.jpg"
import apple from "../../../img and video/krasata/9.jpg"
const Krasata = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard(" Красота",img1,196,767.47)} 
       {ImgMediaCard(" здоровье",telefon10,16,838.55)}
      {ImgMediaCard(" здоровье",apple,98,595.54)}
      {ImgMediaCard("  здоровье",img3,276,618.21)}
      {ImgMediaCard(" Красота ",kategoriya8,31,347.24)} 
      {ImgMediaCard("  здоровье",img2,51.362)}
      {ImgMediaCard(" Красота",talefon5,46,597.25)}     
       {ImgMediaCard(" Красота ",telefon9,35,477.45)}
      {ImgMediaCard("  здоровье",telefon7,38,548.63)}
    
    </div>
  );
};
export default Krasata;