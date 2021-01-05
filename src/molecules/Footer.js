import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'lightBlue',
    position: "fixed",
    bottom: 0,
    "& .MuiBottomNavigationAction-root": {
        "@media (max-width: 768px)": {
          minWidth: "auto",
          padding: "6px 0"
        }
      }
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    
      <BottomNavigationAction component={Link}
        to="/recent" label="Recents" value="recents" icon={<RestoreIcon />} />

     
    <BottomNavigationAction  component={Link}
        to="/favourites" label="Favorites" value="favorites" icon={<FavoriteIcon />} />

    
    <BottomNavigationAction component={Link}
        to="/nearby" label="Nearby" value="nearby" icon={<LocationOnIcon />} />
 
    </BottomNavigation>
  );
}