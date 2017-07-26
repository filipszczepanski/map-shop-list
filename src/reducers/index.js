import { combineReducers } from 'redux';
import shopList from '../data/example.json';

const shopsData = (state = shopList, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({shopsData});

export default rootReducer;
