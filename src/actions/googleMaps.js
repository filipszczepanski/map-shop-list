export const GET_GOOGLE_MAPS_REQUESTED = 'GET_GOOGLE_MAPS_REQUESTED';
export const GET_GOOGLE_MAPS_SUCCESS = 'GET_GOOGLE_MAPS_SUCCESS';
export const GET_GOOGLE_MAPS_FAILED = 'GET_GOOGLE_MAPS_FAILED';

export function getGoogleMapsRequested() {
  return {
    type: GET_GOOGLE_MAPS_REQUESTED
  };
}

export function getGoogleMapsSuccess(maps) {
  return {
    type: GET_GOOGLE_MAPS_SUCCESS,
    maps
  };
}

export function getGoogleMapsFailed(error) {
  return {
    type: GET_GOOGLE_MAPS_FAILED,
    error
  };
}

export function getGoogleMaps(src) {
  return dispatch => {

    dispatch(getGoogleMapsRequested());

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = false;
    const body = document.getElementsByTagName('body')[0];

    script.onload = () => {
      dispatch(getGoogleMapsSuccess(window.google.maps));
    };
    script.onerror = (error) => {
      dispatch(getGoogleMapsFailed(error));
    };

    body.appendChild(script);

  }
}
