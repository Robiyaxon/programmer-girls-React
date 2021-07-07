import { Route } from "react-router-dom";
import React from 'react';
import { Carousel } from './Carousel/Carousel';
import Login from './Login/Login';
import style from '../../Module.css/Category/Category.module.css';
import { MainCategory } from "./MainCategory/MainCategory";
import Telefon from "./Telefon/Telefon";
import Aksesuar from "./Telefon/Aksesuar";
import kompiyuter from "./Kompiyuter/Kompiyuter";
import Ogratexnika from "./Kompiyuter/Ogratexnika";
import Elektronika from "./Elektronika/Elektronika";
import TEXNIKA from "./БИТОВАЯ/TEXNIKA";
import koylak from "./KO`YLAK/KO`YLAK";
import bollar from "./koylak bollar/koylak";
import Bolalar from "./detey/bolalar";
import Bujuteriya from "./Bujuteriya/Bujiteriya";
import Sumka from "./Cumka/Sumka";
import Dom from "./dom/dom";
import Avtomabil from "./aftomabil/Aftomabil";
import Krasata from "./krasata/Krasata";
import Sport from "./Spotr/Sport";
const Category = () => {
    return (
        <div className={style.Body} >
            <div className={style.Category_Body}>
                <div className={style.Category_Menu}>
                    <div className={style.Cotegory_Link}  >
                        <MainCategory />
                    </div>
                </div>
                <div className={style.Category_Shop}>
                    <Route path='https://robiyaxon.github.io/programmer-girls-React/'  component={Carousel} />
                    <Route path='/telefon' component={Telefon} />
                    <Route path='/accessories' component={Aksesuar} />
                    <Route path='/kompiyuter' component={kompiyuter} />
                    <Route path='/ogratexnika' component={Ogratexnika} />
                    <Route path='/elektronika' component={Elektronika} />
                    <Route path='/texnika' component={TEXNIKA} />
                    <Route path='/koylak' component={koylak} />
                    <Route path='/bollar' component={bollar} />
                    <Route path='/bolalar' component={Bolalar} />
                    <Route path='/bujuteriya' component={Bujuteriya} />
                    <Route path='/sumka' component={Sumka} />
                    <Route path='/dom' component={Dom} />
                    <Route path='/avtomabil' component={Avtomabil} />
                    <Route path='/krasata' component={Krasata} />
                    <Route path='/sport' component={Sport} />
                </div>
                <Login />
            </div>
        </div>
    );
}
export default Category;