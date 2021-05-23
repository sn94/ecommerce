import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from  'redux-thunk';
 

import reducer from './Reducers/index';//reducer

//Crear el middleware
const composedEnhancer =  applyMiddleware(   thunkMiddleWare);

const store = createStore(reducer, composedEnhancer);

export default store;