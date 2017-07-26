import { combineReducers } from 'redux';

const shopsData = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({shopsData});

export default rootReducer;
