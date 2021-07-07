import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/sport/1.jpg"
import img2 from "../../../img and video/sport/2.jpg"
import talefon5 from "../../../img and video/sport/3.jpg"
import img3 from "../../../img and video/sport/18679246_1993563304208129_1488479359_n-300x300.jpg"
import telefon7 from "../../../img and video/sport/5.jpeg"
import telefon9 from "../../../img and video/sport/6.jpg"
import telefon10 from "../../../img and video/sport/7.jpg"
import kategoriya8 from "../../../img and video/sport/8.jpg"
import apple from "../../../img and video/sport/9.jpeg"
const Sport = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard("  развлечения",img1,196,767.47)} 
       {ImgMediaCard(" Спорт ",telefon10,16,838.55)}
      {ImgMediaCard(" Спорт",apple,98,595.54)}
      {ImgMediaCard(" Спорт",img3,276,618.21)}
      {ImgMediaCard(" Спорт",kategoriya8,31,347.24)} 
      {ImgMediaCard(" Спорт",img2,51.362)}
      {ImgMediaCard(" Спорт",talefon5,46,597.25)}     
       {ImgMediaCard(" Спорт",telefon9,35,477.45)}
      {ImgMediaCard(" Спорт",telefon7,38,548.63)}
    
    </div>
  );
};
export default Sport;