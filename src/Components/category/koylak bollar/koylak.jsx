import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/bollar koylak/koylak1.jpg"
import img2 from "../../../img and video/bollar koylak/koylak2.jpg"
import talefon5 from "../../../img and video/bollar koylak/koylak3.jpg"
import img3 from "../../../img and video/bollar koylak/201911141832116114426.jpg"
import telefon7 from "../../../img and video/bollar koylak/koylak5.jpg"
import telefon9 from "../../../img and video/bollar koylak/koylak6.jpeg"
import telefon10 from "../../../img and video/bollar koylak/koylak7.jpg"
import kategoriya8 from "../../../img and video/bollar koylak/2811667347_w640_h640_cholovichij-odyag-zima.jpg"
import apple from "../../../img and video/bollar koylak/771627441_w200_h200_krasnyj-sviter-muzhskoj.jpg"
const Koylak = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard(" Одежда",img1,196,767.47)} 
       {ImgMediaCard(" Одежда",telefon9,35,477.45)}
      {ImgMediaCard(" Одежда",apple,98,595.54)}
      {ImgMediaCard(" Одежда",img3,276,618.21)}
      {ImgMediaCard(" Одежда",kategoriya8,31,347.24)} 
      {ImgMediaCard(" Одежда",img2,51.362)}
      {ImgMediaCard(" Одежда",telefon10,16,838.55)}
      {ImgMediaCard(" Одежда",talefon5,46,597.25)}
      {ImgMediaCard(" Одежда",telefon7,38,548.63)}
    
    </div>
  );
};
export default Koylak;