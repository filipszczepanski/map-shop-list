import {
  GET_GOOGLE_MAPS_REQUESTED,
  GET_GOOGLE_MAPS_SUCCESS,
  GET_GOOGLE_MAPS_FAILED
} from '../actions/googleMaps';

const initialState = {
  maps: null,
  isLoading: false,
  error: null
}

const googleMaps = (state = initialState, action) => {

  switch (action.type) {

    case GET_GOOGLE_MAPS_REQUESTED:
    return Object.assign({}, state, {
      isLoading: true,
    });

    case GET_GOOGLE_MAPS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        maps: action.maps,
      });

    case GET_GOOGLE_MAPS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });

    default:
      return state;
  }

}

export default googleMaps;
