import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;