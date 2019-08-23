import { combineReducers } from 'redux';
import productsReducer from '../reducers/productsReducer';
import validationReducer from '../reducers/validationReducer';

export default combineReducers({
    products: productsReducer,
    error: validationReducer
});
