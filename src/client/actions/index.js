import axios from 'axios';
import config from '../../../config';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = source => async dispatch => {
  const url = `https://radio.rpp.pe/now/live?rpIds=43`;
  const res = await axios.get(url);

  dispatch({
    type: FETCH_DATA,
    payload: res.data
  });
};
