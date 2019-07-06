import {SET_SELECTED_PAIR, GET_SELECTED_PAIR_INFO} from "../actions";

let selected = {
  selectedPair: "",
  selectedPairInfo: []
}

export default function (state = [selected], action) {
    switch (action.type) {
        case SET_SELECTED_PAIR:
          let newState = {
            selectedPair: action.payload,
            selectedPairInfo: []
          }
          return [newState, ...state]
        case GET_SELECTED_PAIR_INFO:
          console.log(action.payload)
          const resultObject = action.payload.data.result;
          console.log(state[0].selectedPairInfo)
          // newState;
          let newInfoItem = {
            price: resultObject[Object.keys(resultObject)].p[0],
            time: new Date()
          }
          let anotherNewState = {
            selectedPair: state[0].selectedPair,
            selectedPairInfo: [newInfoItem, ...state[0].selectedPairInfo]
          }
          return [anotherNewState, ...state];
          // const newState {
          //     selectedPai
          //   }          
          // return [{price: resultObject[Object.keys(resultObject)].p[0], time: new Date()}, ...state]
    }
    return state;

    // switch (action.type) {
    //     case SET_SELECTED_PAIR:
    //       return {
    //         ...state,
    //         selectedPair: action.payload
    //       }
    //     case GET_SELECTED_PAIR_INFO:
    //       // console.log(action.payload)
    //       const resultObject = action.payload.data.result;
    //       // console.log(state)
    //       return {
    //           ...state,
    //           selectedPairInfo: [resultObject[Object.keys(resultObject)].p[0], ...state.selectedPairInfo]
    //         }          
    //       // return [{price: resultObject[Object.keys(resultObject)].p[0], time: new Date()}, ...state]
    // }
    // return state;
}