import axios from 'axios';

export const FETCH_DATA_INIT = 'FETCH_DATA_INIT';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


// Actions Creators
export function fetchDataInit () {
  return {
    type: FETCH_DATA_INIT
  }
}

export function fetchDataSuccess (payload) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload
  }
}

export function fetchDataFailure (error) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  }
}

export function fetchData () {
  return async (dispatch) => {
    dispatch(fetchDataInit())
    try {
      const url = `//takaycms.wordlatin.com/json/seccion/lista.json`;
      const data = await axios.get(url, {
        method: 'HEAD',
        mode: 'no-cors',
      });
      if (data.status) {
        return dispatch(fetchDataSuccess(data.data))
      }
      return dispatch(fetchDataFailure(data.message))
    } catch (error) {
      return dispatch(fetchDataFailure(error))
    }
  }
};
