import React from "react";
import { Navbar } from "react-bootstrap";
import style from "../../../Module.css/MainCategory/MainCategory.module.css";
import Icon from "../../../img and video/Kategory_Icon.png";
import { NavLink } from "react-router-dom";

export const MainCategory = () => {
    return (
        <div className={style.MainCategory}>
            <Navbar.Brand className={style.CategoryTitle}>
                <img className={style.TitleIcon} src={Icon} alt="" /> Категории
            </Navbar.Brand>
            <div className={style.CategoryBoxBody} id="responsive-navbar-nav" style={{ flexDirection: "column" }}>
                <div className={style.CategoryBox} >
                    <NavLink to="/telefon" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 📱 </b> Телефоны и аксессуары
                    </NavLink>
                </div>
                
                <div className={style.CategoryBox} >
                    <NavLink to="/kompiyuter" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 💻 </b>  Компьютеры и оргтехника
                    </NavLink>
                </div>
                
                <div className={style.CategoryBox} >
                    <NavLink to="/elektronika" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 📸 </b> Электроника
                    </NavLink>
                </div>
                
                <div className={style.CategoryBox} >
                    <NavLink to="/texnika" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 📺 </b>  Бытовая техника
                    </NavLink>
                </div>
                
                <div className={style.CategoryBox} >
                    <NavLink to="/koylak" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 👗 </b>  Одежда для женщин
                    </NavLink>
                </div>
                
                <div className={style.CategoryBox} >
                    <NavLink to="/bollar" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 🧥 </b> Одежда для мужчин
                    </NavLink>
                </div>
                
                <div className={style.CategoryBox} >
                    <NavLink to="/bolalar" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 🍼 </b>Всё для детей
                    </NavLink>
                </div>
                <div className={style.CategoryBox} >
                    <NavLink to="/bujuteriya" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 💍 </b> Бижутерия и часы 
                    </NavLink>
                </div>
                <div className={style.CategoryBox} >
                    <NavLink to="/sumka" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 👜 </b> Сумки и обувь
                    </NavLink>
                </div>
                <div className={style.CategoryBox} >
                    <NavLink to="/dom" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 🛌🏻 </b>  Дом и зоотовары
                    </NavLink>
                </div>
                <div className={style.CategoryBox} >
                    <NavLink to="/avtomabil" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 🚓 </b> Автотовары
                    </NavLink>
                </div>
                <div className={style.CategoryBox} >
                    <NavLink to="/krasata" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> 💄 </b>  Красота и здоровье
                    </NavLink>
                </div>
                <div className={style.CategoryBox} >
                    <NavLink to="/sport" activeClassName={style.BoxHrefActive} className={style.BoxHref}>
                        <b> ⚽ </b> Спорт и развлечения
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
