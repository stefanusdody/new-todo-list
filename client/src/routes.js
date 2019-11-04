import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import AppNavbar from './components/appnavbar';
import Home from "./components/home";
import TechStack from "./components/techstack";

import {Provider} from 'react-redux';
import store from './store';

const Routes = () => {
  return(
 <Provider store={store}>
  <BrowserRouter>
     <AppNavbar />
       <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tech-stack" exact component={TechStack}/>
      </Switch>
   </BrowserRouter>
  </Provider>
 );
};

export default Routes;
