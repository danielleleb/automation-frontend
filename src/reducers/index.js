import { combineReducers } from 'redux';
import ListReducer from './reducer_list';
import SelectedPairReducer from './reducer_selectedPair';

const rootReducer = combineReducers({
  list: ListReducer,
  selectedPair: SelectedPairReducer,
});

export default rootReducer;