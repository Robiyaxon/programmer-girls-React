import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { reduxForm } from "redux-form";
import { ModalFormControl } from "./ModalFormControl";
import moduleName from "../../../Module.css/Modal/Modal.module.css";

export const Modal = () => {
  const [open, setOpen] = React.useState(false);
  const Login = (values) => {
    if(values.email!=="")
    toggle()
  };

  const toggle = () => setOpen(!open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={moduleName.btn_body}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Регистрация
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Регистрация</DialogTitle>
        <DialogContent>
          <ModalReduxFrom onSubmit={Login} />
        </DialogContent>
      </Dialog>
    </>
  );
}

const ModalReduxFrom = reduxForm({ form: 'modal' })(ModalFormControl)
