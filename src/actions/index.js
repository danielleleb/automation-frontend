import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/';

export const FETCH_LIST = 'FETCH_LIST';
export const SET_SELECTED_PAIR = 'SET_SELECTED_PAIR';
export const GET_SELECTED_PAIR_INFO = 'GET_SELECTED_PAIR_INFO';

export function fetchList() {
  let request = axios.post(ROOT_URL);
  return {
      type: FETCH_LIST,
      payload: request
  }
}

export function setSelectedPair(selectedPair) {
  return {
    type: SET_SELECTED_PAIR,
    payload: selectedPair
  }
}

export function getSelectedPairInfo(selectedPair) {
  let request = axios.post(ROOT_URL + "ticker", {pair: selectedPair})
  return {
    type: GET_SELECTED_PAIR_INFO,
    payload: request
  }
}
