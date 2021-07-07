import React from "react";
import s from "./Form.module.css";
export const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.fromControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span  >{meta.error}</span>}

        </div>
    );
};
export const Teaxtaera = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <textarea   {...input}{...restProps} /></FormControl>
};
export const Input = (props) => {
    const { input, meta, ...restProps } = props;

    return <FormControl {...props}><input {...props.input}{...restProps} /></FormControl>
};
export default Teaxtaera;