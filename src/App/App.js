import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import ShopList from '../components/ShopList';
import Map from '../components/Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Map />
          <ShopList />
        </div>
      </Provider>
    );
  }
}

export default App;
