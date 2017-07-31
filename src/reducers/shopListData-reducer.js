import {
  SHOP_LIST_DATA_REQUESTED,
  SHOP_LIST_DATA_LOADED,
  SHOP_LIST_DATA_FAILED } from '../actions/shopListData';

const shopListData = (state = {data:[], isLoading:false, error:null}, action) => {

  switch (action.type) {
    case SHOP_LIST_DATA_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        data: [...action.data]
      });

    case SHOP_LIST_DATA_REQUESTED:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case SHOP_LIST_DATA_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });

    default:
      return state;
  }

}

export default shopListData;
