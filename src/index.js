import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './DataRedux/Store';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

// 1 injectar el store a la aplicacion
//2 conectar el store a la aplicacion
ReactDOM.render(
  <Provider store={store} >
      <App />
    </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
