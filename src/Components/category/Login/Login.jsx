import React from "react";
import "react-responsive-modal/styles.css";
import UserImg from "../../../img and video/Login/avatar.jpg"
import { Modal } from "../Modal/Modal";
import className from "../../../Module.css/Login/Login.module.css";
const Login = () => {
    return (
        <div className={className.Login}>
            <div className={className.UserImg}>
                <img src={UserImg} alt="" />
                <div className={className.Title1}>
                    <h3 className={className.Title}>Добро пожаловать в AliExpress</h3>
                </div>
            </div>
            <Modal />
        </div>
    )
}
export default Login


