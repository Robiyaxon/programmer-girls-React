import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/notebook/OGRAATEXNIKA/OGRATEXNIKA1.jpg"
import img2 from "../../../img and video/notebook/OGRAATEXNIKA/ogratexnika2.jpg"
import talefon5 from "../../../img and video/notebook/OGRAATEXNIKA/ogratexnika3.jpg"
import img3 from "../../../img and video/notebook/OGRAATEXNIKA/ogratexnika4.jpg"
import telefon7 from "../../../img and video/notebook/OGRAATEXNIKA/ogratexnika5.jpg"
import telefon9 from "../../../img and video/notebook/OGRAATEXNIKA/ogratexnika6.jpg"
import telefon10 from "../../../img and video/notebook/OGRAATEXNIKA/ogratexnika7.jpg"
import kategoriya8 from "../../../img and video/notebook/OGRAATEXNIKA/ogratexnika8.jpg"
import apple from "../../../img and video/notebook/OGRAATEXNIKA/ogratexnika9.jpg"
const Telefon = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard(" Oргтехника",img1,196,767.47)} 
       {ImgMediaCard("Oргтехника",telefon9,35,477.45)}
      {ImgMediaCard(" Oргтехника",apple,98,595.54)}
      {ImgMediaCard(" Oргтехника",img3,276,618.21)}
      {ImgMediaCard(" Oргтехника",kategoriya8,31,347.24)} 
      {ImgMediaCard(" Oргтехника",img2,51.362)}
      {ImgMediaCard(" Oргтехника",telefon10,16,838.55)}
      {ImgMediaCard(" Oргтехника",talefon5,46,597.25)}
      {ImgMediaCard(" Oргтехника",telefon7,38,548.63)}
    
    </div>
  );
};
export default Telefon;