import { SET_CHOOSED_SHOP_ITEM } from '../actions/shopList';

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

export default shopList;
