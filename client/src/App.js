import React from 'react';
import AppNavbar from './components/appnavbar';
import ShoppingList from './components/shoppinglist';
import ItemModal from './components/itemmodel'

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
  <Provider store={store}>
    <div>
      <AppNavbar/>
      <ItemModal/>
      <ShoppingList/>
    </div>
  </Provider>
  );
}

export default App;
