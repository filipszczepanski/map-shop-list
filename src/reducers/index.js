import { combineReducers } from 'redux';
import { SET_CHOOSED_SHOP_ITEM } from '../actions/shopListItems';

import shopListDataJSON from '../data/example.json';

const shopListData = (state = [...shopListDataJSON], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const shopList = (state = { choosed:0 }, action) => {
  switch (action.type) {
    case SET_CHOOSED_SHOP_ITEM:
      return Object.assign({}, state, {
        choosed: action.id
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({shopListData, shopList});

export default rootReducer;
