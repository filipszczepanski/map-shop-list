import { combineReducers } from 'redux';
import {
  SET_CHOOSED_SHOP_ITEM,
  SHOP_LIST_DATA_REQUESTED,
  SHOP_LIST_DATA_LOADED,
  SHOP_LIST_DATA_FAILED } from '../actions/shopListItems';

const shopListData = (state = {data:[], isLoaded: false, isLoading:false, error:null}, action) => {

  switch (action.type) {
    case SHOP_LIST_DATA_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        isLoaded: true,
        data: [...action.data]
      });

    case SHOP_LIST_DATA_REQUESTED:
      return Object.assign({}, state, {
        isLoading: true,
        isLoaded: false,
      });

    case SHOP_LIST_DATA_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        isLoaded: false,
        error: action.error,
      });

    default:
      return state;
  }

}

const shopList = (state = { choosed:0}, action) => {
  switch (action.type) {

    case SET_CHOOSED_SHOP_ITEM:
      return Object.assign({}, state, {
        choosed: action.id
      });

    default:
      return state;
  }
}

const rootReducer = combineReducers({shopList, shopListData});

export default rootReducer;
