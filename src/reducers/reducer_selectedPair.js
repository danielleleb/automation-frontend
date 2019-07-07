import {SET_SELECTED_PAIR, GET_SELECTED_PAIR_INFO} from "../actions";

let selected = {
  selectedPair: "",
  selectedPairInfo: []
}

export default function (state = selected, action) {
  switch (action.type) {
    case SET_SELECTED_PAIR:
      let newState = {
        selectedPair: action.payload,
        selectedPairInfo: []
      }
      return newState;
      break;
    case GET_SELECTED_PAIR_INFO:
      const resultObject = action.payload.data.result;

      let newInfoItem = {
        price: resultObject[Object.keys(resultObject)].p[0],
        time: new Date()
      }

      let anotherNewState = {
        selectedPair: state.selectedPair,
        selectedPairInfo: [newInfoItem, ...state.selectedPairInfo]
      }
      return anotherNewState;
      break;
    default: 
      return state;
  }
}