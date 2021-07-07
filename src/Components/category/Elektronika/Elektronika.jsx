import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/Elektronika/elektronika1.jpg"
import img2 from "../../../img and video/Elektronika/elektronika2.jpg"
import talefon5 from "../../../img and video/Elektronika/elektronika3.jpg"
import img3 from "../../../img and video/Elektronika/elektronika4.jpg"
import telefon7 from "../../../img and video/Elektronika/elektronika5.jpg"
import telefon9 from "../../../img and video/Elektronika/elektornika6.jpg"
import telefon10 from "../../../img and video/Elektronika/elektronika7.jpg"
import kategoriya8 from "../../../img and video/Elektronika/electronic3-1024x683.jpg"
import apple from "../../../img and video/Elektronika/elektronika9.jpg"
const Telefon = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard(" Электроника",img1,196,767.47)} 
       {ImgMediaCard(" Электроника",telefon9,35,477.45)}
      {ImgMediaCard(" Электроника",apple,98,595.54)}
      {ImgMediaCard(" Электроника",img3,276,618.21)}
      {ImgMediaCard(" Электроника",kategoriya8,31,347.24)} 
      {ImgMediaCard(" Электроника",img2,51.362)}
      {ImgMediaCard(" Электроника",telefon10,16,838.55)}
      {ImgMediaCard(" Электроника",talefon5,46,597.25)}
      {ImgMediaCard(" Электроника",telefon7,38,548.63)}
    
    </div>
  );
};
export default Telefon;