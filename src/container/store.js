import {createStore} from 'redux';
import rootReducer from './reducers';
//craete store
const store= createStore(rootReducer);
export default store;