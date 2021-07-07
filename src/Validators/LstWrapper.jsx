import React, { useState } from "react";
import style from "./Help.module.css";
import Button from "@material-ui/core/Button";
import { button } from "./Card.helps";
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));
export const LstWrapper = (props) => {
  const classes2 = useStyles();
  const [count, setCount] = React.useState(0);
  const classes = button();
  const [user, setUser] = useState("");
  const [number, setNumber] = useState(1);
  function increment() {
    setNumber(number + 1);
    ;
  }
  function dicriment() {
    setNumber(number - 1);
    if (number <= 1) {
      setNumber(1);
    }
  }
  return (
    <div className={style.Wrapper}>
      <div className={style.Wrapper_List}>
        <div className={style.IMGList}>
          <img src={props.img} alt="" className={style.List2} />
        </div>
        <div className={style.TextList}>
          <div className={style.karzinka}>
             <h1>{props.Name}</h1>
             <div className={classes2.root}>
      <div>
        <Badge color="secondary" badgeContent={count}>
        <AddShoppingCartIcon  className={style.Karzinka}/>
        </Badge>
      </div>
    </div>
          </div>
         
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum, veritatis sunt ea corporis  dolor sit amet consectetur adipisicing elit. Blanditiis harum, veritatis sunt ea corporis  dolor sit amet consectetur adipisicing elit. Blanditiis harum, veritatis sunt ea corporis  dolor sit amet consectetur adipisicing elit. Blanditiis harum, veritatis sunt ea corporis  dolor sit amet consectetur adipisicing elit. Blanditiis harum, veritatis sunt ea corporis nihil?
          <h3>  Доставка: UZS {number * props.sum}</h3>
          <div>
            <p>Доставка из:  {user} </p>
            <div className={classes.root}>
              <Button onClick={() => setUser("CHINA")} variant="outlined"> CHINA</Button>
              <Button onClick={() => setUser("Бельгия")} variant="outlined">Бельгия</Button>
              <Button onClick={() => setUser("Испания")} variant="outlined">Испания</Button>
              <Button onClick={() => setUser("Украина")} variant="outlined">Украина</Button>
            </div>
          </div>

          <p>Количество:</p>
          <div className={style.Math}>
            <p onClick={dicriment}>-</p>
            <p>{number}</p>
            <p onClick={increment}>+</p>
         
          </div>   <Button onClick={()=>setCount(count + 1)} variant="contained" color="secondary">Купит сейчас</Button>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};
