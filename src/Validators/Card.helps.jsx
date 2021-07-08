import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { LstWrapper } from "./LstWrapper";
import style from "./Help.module.css";
const useStyles2 = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
withStyles({})((props) => <Checkbox color="default" {...props} />);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const button = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export default function ImgMediaCard(Name, img, sum) {
  const classes = useStyles2();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={style.Card}>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar style={{padding:0}} className={style.ee}>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Button style={{padding:0+"!important"}} autoFocus color="inherit" onClick={handleClose}>
              ❌
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <LstWrapper img={img} Name={Name} sum={sum} />
        </List>
      </Dialog>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia onClick={handleClickOpen}
            component="img"
            alt="Contemplative Reptile"
            height="180"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent onClick={handleClickOpen}>
            <Typography className={style.Title} gutterBottom variant="h5" component="h2">
              {Name}
            </Typography>
            <Typography style={{fontWeight:"bolder", color:"tomato"}} variant="body2" color="textSecondary" component="p">
             {sum} UZS 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
            />
          </FormGroup>
          <Button className={style.Learn} size="small" color="primary" onClick={handleClickOpen}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>);
}