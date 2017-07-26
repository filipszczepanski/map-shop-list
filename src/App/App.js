import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store'

import ShopList from '../components/ShopList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ShopList />
        </div>
      </Provider>
    );
  }
}

export default App;
