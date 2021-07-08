import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/notebook/notebook/kompiyuter1.jpeg"
import img2 from "../../../img and video/notebook/notebook/kompiyuter3.jpg"
import talefon5 from "../../../img and video/notebook/notebook/kompiyuter3.jpg"
import img3 from "../../../img and video/notebook/notebook/kompiyuter4.jpg"
import telefon7 from "../../../img and video/notebook/notebook/kompiyuter5.jpg"
import telefon9 from "../../../img and video/notebook/notebook/kompiyuter6.jpg"
import telefon10 from "../../../img and video/notebook/notebook/kompiyuter7.jpg"
import kategoriya8 from "../../../img and video/notebook/notebook/kompiyuter8.jpg"
import apple from "../../../img and video/notebook/notebook/kompiyuter10.jpeg"
const Telefon = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard("notebook", img1, 196, 767.47)}
      {ImgMediaCard("notebook", telefon9, 35, 477.45)}
      {ImgMediaCard("notebook", apple, 98, 595.54)}
      {ImgMediaCard("notebook", img3, 276, 618.21)}
      {ImgMediaCard("notebook", kategoriya8, 31, 347.24)}
      {ImgMediaCard("notebook", img2, 51.362)}
      {ImgMediaCard("notebook", telefon10, 16, 838.55)}
      {ImgMediaCard("notebook", talefon5, 46, 597.25)}
      {ImgMediaCard("notebook", telefon7, 38, 548.63)}

    </div>
  );
};
export default Telefon;