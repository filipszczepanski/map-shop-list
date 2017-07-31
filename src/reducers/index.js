import { combineReducers } from 'redux';
import shopListData from './shopListData-reducer';
import shopList from './shopList-reducer';

const rootReducer = combineReducers({shopListData, shopList});

export default rootReducer;
