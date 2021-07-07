import React from "react";
import ImgMediaCard from "../../../Validators/Card.helps";
import style from "../../../Module.css/Category/Telefon.module.css";
import img1 from "../../../img and video/telefon/iPhone-11-Pro.jpg";
import img2 from "../../../img and video/telefon/smartfon_samsung_galaxy_a5_sm_a510f_zolotoy__1.jpg";
import talefon5 from "../../../img and video/telefon/nokia.jpg";
import img3 from "../../../img and video/telefon/redmi90.jpg";
import telefon7 from "../../../img and video/telefon/telefon9.jpg";
import telefon9 from "../../../img and video/telefon/telefon20.jpg";
import telefon10 from "../../../img and video/telefon/luna-g55-silver_3_1.jpg";
import kategoriya8 from "../../../img and video/telefon/kategoriya8.jpg";
import apple from "../../../img and video/telefon/apple.jpg";
const Telefon = () => {
  return (
    <div className={style.ImgMediaCard}>
      {ImgMediaCard("Apple", img1, 196, 767.47)}
      {ImgMediaCard("Phones", telefon9, 35, 477.45)}
      {ImgMediaCard("Apple", apple, 98, 595.54)}
      {ImgMediaCard("Redmi", img3, 276, 618.21)}
      {ImgMediaCard("Apple", kategoriya8, 31, 347.24)}
      {ImgMediaCard("Samsung", img2, 51.362)}
      {ImgMediaCard("Luna", telefon10, 16, 838.55)}
      {ImgMediaCard("Nokia", talefon5, 46, 597.25)}
      {ImgMediaCard("Phone", telefon7, 38, 548.63)}
    </div>
  );
};
export default Telefon;