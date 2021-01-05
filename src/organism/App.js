import React from "react";
import { createMuiTheme, Grid, Paper, ThemeProvider } from "@material-ui/core";
import Header from "../molecules/Header";
import Content from "../molecules/Content";
import Footer from "../molecules/Footer";
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../molecules/Home";

import { Switch as Toggle} from '@material-ui/core';

const App = () => {
  const [darkMode,setDarkMode] = React.useState(false)
  const theme = createMuiTheme ({
    palette:{
       type: darkMode ? "dark" : "light",
    },
    typography:{
      subtitle1: {
        fontSize: 20,
        fontFamily: 'Lucida Console, Courier, monospace',
      },
      button: {
        fontStyle: 'italic',
      },
    }
  });
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{height: "100vah" }}>
    <Router> 
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <br></br>
      <Grid item container style={{height:'760px'}}>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={8}>
  
        <Switch>
          <Route exact path="/">
            <Home name="Lappy Website"/>
          </Route>
          <Route path="/products">
            <Content />
          </Route>
          <Route path="/recent">
            <Home name="Recent Information"/>
          </Route>
          <Route path="/favourites">
            <Home name="favourites"/>
          </Route>
          <Route path="/nearby">
            <Home name="Location Information"/>
          </Route>
        </Switch>
    
        </Grid>
        <Grid item xs={false} sm={2} >
        <Toggle checked ={darkMode} onChange={toggleDarkMode} />
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
    </Router>  
    </Paper>
    </ThemeProvider>  
  );
};

export default App;
