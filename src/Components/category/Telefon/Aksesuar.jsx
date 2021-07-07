import React from "react";
import ImgMediaCard from "../../../Validators/Card.helps";
import style from "../../../Module.css/Category/Telefon.module.css";
import telefon1 from "../../../img and video/telefon/aksesuar/telefon10.jpg";
import aksesuar2 from "../../../img and video/telefon/aksesuar/aksesuar2.jpeg";
import telefon7 from "../../../img and video/telefon/aksesuar/telefon7.png";
import telefon13 from "../../../img and video/telefon/aksesuar/telefon13.jpg";
import telefon11 from "../../../img and video/telefon/aksesuar/telefon11.jpg";
import aksesuar4 from "../../../img and video/telefon/aksesuar/aksesuar4.jpg";
import aksesuar5 from "../../../img and video/telefon/aksesuar/aksesuar5.jpg";
import aksesuar6 from "../../../img and video/telefon/aksesuar/aksesuar6.jpg";
import aksesuar7 from "../../../img and video/telefon/aksesuar/telefon7.png";
const Aksesuar = () => {
    return (
        <div className={style.ImgMediaCard}>
             {ImgMediaCard(" Accessories",telefon1,19,767.47)}  
             {ImgMediaCard(" Accessories",aksesuar7,96,767.47)} 
             {ImgMediaCard(" Accessories",aksesuar2,9,767.47)} 
             {ImgMediaCard(" Accessories",telefon7,1,767.47)} 
             {ImgMediaCard(" Accessories",telefon13,6,767.47)} 
             {ImgMediaCard(" Accessories",telefon11,6,767.47)} 
             {ImgMediaCard(" Accessories",aksesuar4,96,767.47)} 
             {ImgMediaCard(" Accessories",aksesuar5,26,767.47)} 
             {ImgMediaCard(" Accessories",aksesuar6,36,767.47)} 
        </div>
    );
};
export default Aksesuar;