import React from 'react';
import ImgMediaCard from "../../../Validators/Card.helps"
import style from "../../../Module.css/Category/Telefon.module.css"
import img1 from "../../../img and video/bujiteriya/1.jpg"
import img2 from "../../../img and video/bujiteriya/5a7ef220a795d47e0ba61e1c618947a7--jewellery-rings-jewelry-box.jpg"
import talefon5 from "../../../img and video/bujiteriya/3.jpg"
import img3 from "../../../img and video/bujiteriya/4637_middle.jpg"
import telefon7 from "../../../img and video/bujiteriya/96ad60e01d527472fcdaf080610ac2d8.jpeg"
import telefon9 from "../../../img and video/bujiteriya/6.jpg"
import telefon10 from "../../../img and video/bujiteriya/7.jpg"
import kategoriya8 from "../../../img and video/bujiteriya/8.jpg"
import apple from "../../../img and video/bujiteriya/9.jpg"
const Bujiteriya = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard(" Бижутерия", img1, 196, 767.47)}
      {ImgMediaCard(" Бижутерия", telefon10, 16, 838.55)}
      {ImgMediaCard(" Бижутерия", apple, 98, 595.54)}
      {ImgMediaCard(" Бижутерия", img3, 276, 618.21)}
      {ImgMediaCard(" Бижутерия", kategoriya8, 31, 347.24)}
      {ImgMediaCard(" Бижутерия", img2, 51.362)}
      {ImgMediaCard(" Бижутерия", talefon5, 46, 597.25)}
      {ImgMediaCard(" Бижутерия", telefon9, 35, 477.45)}
      {ImgMediaCard(" Бижутерия", telefon7, 38, 548.63)}
    </div>
  );
};
export default Bujiteriya;