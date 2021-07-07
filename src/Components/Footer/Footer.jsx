import React from 'react';
import footer from '../../Module.css/Footer.module.css'
import apple from "../../img and video/footer/apple.jpg"
import smartwatch from "../../img and video/footer/smartwatch.jpg"
import airporst from "../../img and video/footer/airporst.jpg"
import acer from "../../img and video/footer/acer.jpg"
import footbolka from "../../img and video/footer/footbolka.jpg"
import krasofka from "../../img and video/footer/krasofka.jpg"
import AUTOYOUTH from "../../img and video/footer/AUTOYOUTH-9-4.jpg_q50.jpg"
import dres from "../../img and video/footer/dres.jpg"
import bag from "../../img and video/footer/bag.jpg"
import braslet from "../../img and video/footer/braslet.jpg"
import {
    Card, CardImg, CardText, CardBody, CardSubtitle
  } from 'reactstrap';
  
const Footer = () => {
    const map=[
        {src:apple,foiz:"  Топ-скидки",sum:"UZS 196,092.90" ,id:"1" },
        {src:smartwatch,foiz:"  -26%",sum:"UZS 46,092.90"   ,id:"2" },
        {src:airporst,foiz:"  -26%",sum:"UZS 26,092.90"     ,id:"3"},
        {src:acer,foiz:"  -6%",sum:"UZS 96,092.90"          ,id:"4"},
           {src:braslet,foiz:"  -66%",sum:"UZS 96,092.90"   ,id:"5"},
        {src:krasofka,foiz:"  -66%",sum:"UZS 96,092.90"     ,id:"6"},
        {src:AUTOYOUTH,foiz:" -66%",sum:"UZS 96,092.90"     ,id:"7"},
        {src:dres,foiz:"  -66%",sum:"UZS 96,092.90"         ,id:"8"},
        {src:bag,foiz:"  -66%",sum:"UZS 96,092.90"          ,id:"9"} ,
     
       {src:footbolka,foiz:"  -66%",sum:"UZS 96,092.90",id:10},
    ]
    const map2=map.map(a=>
           <Card key={a.id} className={footer.Card}>
        <CardImg top width="100%" src={a.src} alt="Card image cap" className={footer.CardImg} />
        <CardBody>
          <CardSubtitle tag="h6"  className="mb-2 text-muted">
             <p className={footer.foiz}>{a.foiz}</p> </CardSubtitle>
          <CardText className={footer.sum}>{a.sum}</CardText>
        </CardBody>
      </Card>      )
    return (
        <div className={footer.Footer}>
            <div className={footer.скидки}>
                <h5 className="">⤵ Топ-скидки</h5>
            </div>
            <div className={footer.img1}>
                <div className={footer.img}>
              {map2}
             
                </div>
            </div>
            <div className={footer.footer}>
            <div className={footer.text1}>
                 <p className={footer.text}>Политика Конфиденциальности - Карта сайта - Information for EU consumers - Пользовательские соглашения ©️ 2010-2021 AliExpress.ru. Все права защищены.</p>
            </div>
        </div>
        </div>
    );
};
export default Footer;