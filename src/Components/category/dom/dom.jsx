import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/dom/1.jpg"
import img2 from "../../../img and video/dom/2.jpg"
import talefon5 from "../../../img and video/dom/3.jpeg"
import img3 from "../../../img and video/dom/4.jpg"
import telefon7 from "../../../img and video/dom/5.jpg"
import telefon9 from "../../../img and video/dom/6.jpg"
import telefon10 from "../../../img and video/dom/2065495.jpg"
import kategoriya8 from "../../../img and video/dom/1027869598.jpg"
import apple from "../../../img and video/dom/9.jpg"
const Dom = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard(" Дом",img1,196,767.47)} 
       {ImgMediaCard(" зоотовары",telefon10,16,838.55)}
      {ImgMediaCard(" зоотовары",apple,98,595.54)}
      {ImgMediaCard(" Дом",img3,276,618.21)}
      {ImgMediaCard(" зоотовары",kategoriya8,31,347.24)} 
      {ImgMediaCard(" Дом",img2,51.362)}

      {ImgMediaCard(" Дом",talefon5,46,597.25)}     
       {ImgMediaCard(" зоотовары",telefon9,35,477.45)}
      {ImgMediaCard(" зоотовары",telefon7,38,548.63)}
    
    </div>
  );
};
export default Dom;