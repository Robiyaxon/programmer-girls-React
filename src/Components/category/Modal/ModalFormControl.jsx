import React from "react";
import { Field } from "redux-form";
import { Input } from "../../../FormControlls/Teaxtaera"
import { maxlengthCreator, required } from "../../../Validators/validators";
let maxlength15 = maxlengthCreator(50);

export const ModalFormControl = (props) => {
  return (
    <form onSubmit={props.handleSubmit} style={{ textAlign: "center" }}>
      <Field style={{margin:0.5+"rem " + 0 +"rem", width:100+"%"}}
        name="email"
        component={Input}
        label="Email Address"
        validate={[required, maxlength15]}
        type="email"
        placeholder="Email"
      />
      <Field style={{margin:0.5+"rem " + 0 +"rem", width:100+"%"}}
        name="parol"
        component={Input}
        validate={[required, maxlength15]}
        type="password"
        placeholder="Parol"
      />
      <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-label"  >Регистрация</button>
    </form>
  );
};