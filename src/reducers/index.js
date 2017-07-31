import { combineReducers } from 'redux';
import shopListData from './shopListData-reducer';
import shopList from './shopList-reducer';
import googleMaps from './googleMaps-reducer';

const rootReducer = combineReducers({googleMaps, shopListData, shopList});

export default rootReducer;
