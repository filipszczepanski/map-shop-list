import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { getShopListData } from '../actions/shopListData';
import Layout from './Layout';

const SHOP_LIST_DATA_SRC = 'data/example.json';

class App extends Component {
  constructor() {
    super()
    store.dispatch(getShopListData(SHOP_LIST_DATA_SRC));
  }
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
