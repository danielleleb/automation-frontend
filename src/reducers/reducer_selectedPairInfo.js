import {GET_SELECTED_PAIR_INFO} from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case GET_SELECTED_PAIR_INFO:
      console.log(action.payload.data)
      const resultObject = action.payload.data.result;
      let resultObjectString = Object.keys(resultObject)
      // let newItem;
      let newItem = 
      {
        price: resultObject[Object.keys(resultObject)].p[0], 
        time: new Date()
      }
      console.log(newItem)
      // console.log(state.findIndex(Object.keys(resultObject)))
      return [newItem, ...state];
    }
    return state;
}