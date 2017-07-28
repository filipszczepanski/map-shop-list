export const SET_CHOOSED_SHOP_ITEM = 'SET_CHOOSED_SHOP_ITEM';
export const SHOP_LIST_DATA_REQUESTED = 'SHOP_LIST_DATA_REQUESTED';
export const SHOP_LIST_DATA_LOADED = 'SHOP_LIST_DATA_LOADED';
export const SHOP_LIST_DATA_FAILED = 'SHOP_LIST_DATA_FAILED';

export function setChoosedShopItem(id) {
  return {
    type: SET_CHOOSED_SHOP_ITEM,
    id
  }
}

export function shopListDataRequested() {
  return {
    type: SHOP_LIST_DATA_REQUESTED
  };
}

export function shopListDataLoaded(data) {
  return {
    type: SHOP_LIST_DATA_LOADED,
    data
  };
}

export function shopListDataFailed(error) {
  return {
    type: SHOP_LIST_DATA_FAILED,
    error
  };
}

export function getShopListData(src) {
  return dispatch => {
    dispatch(shopListDataRequested());
    fetch(src, {mode: 'no-cors'})
      .then((response) => response.json())
      .then((data) => {
        dispatch(shopListDataLoaded(data))
      })
      .catch((error) => {
        dispatch(shopListDataFailed(error));
      });
  }
}
