import React from "react";
import Indicator from "react-carousel-indicator";
import watch from "../../../img and video/Indicator/Watch.jpg";
import shoe from "../../../img and video/Indicator/krasofka1.png";
import bujiteriya from "../../../img and video/maishiy texnika/elektronika7.jpg"
import sumka from "../../../img and video/sumka/1.jpg"
import sumka2 from "../../../img and video/sumka/8.jpg"
import koylak from "../../../img and video/qizlar koylak/koylak6.jpeg"
import style from "../../../Module.css/Indicator/Indicator.module.css";

export const Indicators = () => {
    return (
        <div className={style.Indicators}>
            <Indicator className={style.Img_body} itemsPerSlide={3} itemGap={3}>
                <img className={style.Indicators} style={{ width: 33 + '%' }} src={watch} alt="" />
                <img className={style.Indicators} style={{ width: 33 + '%' }} src={bujiteriya} alt="" />
                <img className={style.Indicators} style={{ width: 33 + '%' }} src={shoe} alt="" />
                <img className={style.Indicators} style={{ width: 33 + '%' }} src={sumka} alt="" />
                <img className={style.Indicators} style={{ width: 33 + '%' }} src={sumka2} alt="" />
                <img className={style.Indicators} style={{ width: 33 + '%' }} src={koylak} alt="" />
            </Indicator>
        </div>
    );
}
