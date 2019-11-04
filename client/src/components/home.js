import React from 'react';
import ShoppingList from './shoppinglist';
import ItemModal from './itemmodel'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';


const App = () => {
  return (

    <div>
      <ItemModal/>
      <ShoppingList/>
    </div>

  );
}

export default App;
