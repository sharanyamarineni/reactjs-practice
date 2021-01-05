import React from "react";
import { AppBar,   Toolbar, Typography} from "@material-ui/core";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/styles";
import { NavLink} from 'react-router-dom';
import CardButton from "../atoms/CardButton";



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginLeft: '10px',
  },
});



const Header = () => {
    const classes = useStyles();
    return (
    
      <AppBar position="static">
        <Toolbar>
          <Typography variant="subtitle1">
            LAPPY
            <AcUnitRoundedIcon />
          </Typography>
          <div className="navbar-start">
      
            <NavLink to="/" exact  >
              <CardButton className={classes.root} >Home</CardButton>
            </NavLink>

            <NavLink to="/products" exact >
              <CardButton className={classes.root}>Products</CardButton>
            </NavLink>
            
            
          </div>
        </Toolbar>
      </AppBar>
      
    );
  };
  
  export default Header;