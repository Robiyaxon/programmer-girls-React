import React from "react";
import { Accordion, Nav, Navbar } from "react-bootstrap";
import style from "../../../Module.css/MainCategory/MainCategory.module.css";
import Object_herpers from "../../../Validators/object-herpers";
import Icon from "../../../img and video/Kategory_Icon.png";
export const MainCategory = () => {
    return (
        <Navbar style={{ flexWrap: "wrap" }} collapseOnSelect expand="sm" variant="dark">
            <Navbar.Brand className={style.CategoryTitle}>
                <img className={style.TitleIcon} src={Icon} alt="" /> Категории
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{ flexDirection: "column" }}>
                <Nav style={{ flexDirection: "column " }} className="mr-auto">
                    <Accordion defaultActiveKey="0">
                        {Object_herpers("📱 Телефоны и аксессуары", "/telefon", "Телефоны", "/accessories", "accessories", 1)}
                        {Object_herpers("💻 Компьютеры и оргтехника", "/kompiyuter", "Компьютеры", "/ogratexnika", "Oргтехника", 2)}
                        {Object_herpers("📸 Электроника", "/elektronika", " Электроника", "", "", 3)}
                        {Object_herpers("📺 Бытовая техника", "/texnika", " Бытовая техника", "", "", 4)}
                        {Object_herpers("👗 Одежда для женщин ", "/koylak", " Одежда для женщин","","", 5)}
                        {Object_herpers("🧥  Одежда для мужчин ", "/bollar", "Одежда для мужчин","","", 6)}
                        {Object_herpers("🍼 Всё для детей ", "/bolalar", "Всё для детей","","", 7)}
                        {Object_herpers("💍 Бижутерия и часы ", "/bujuteriya", " Бижутерия и часы","","", 8)}
                        {Object_herpers("👜 Сумки и обувь", "/sumka", " Сумки и обувь","","", 9)}
                        {Object_herpers("🛌🏻 Дом и зоотовары", "/dom", "Дом и зоотовары","","", 10)}
                        {Object_herpers("🚓 Автотовары", "/avtomabil", "Автотовары","","", 11)}
                        {Object_herpers("💄 Красота и здоровье", "/krasata", "Красота и здоровье","","", 12)}
                        {Object_herpers("⚽ Спорт и развлечения", "/Sport", "Спорт и развлечения","","", 13)}
                    </Accordion>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};