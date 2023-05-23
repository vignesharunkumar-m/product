// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// // import productReducer from './reducers/productReducer';
// import productReducer from './productReducer';

// const store = createStore(productReducer, applyMiddleware(thunk));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <Provider store={store}>
//         <App/>
//       </Provider>
//     );


// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './reducers/products';

import { Provider } from 'react-redux';
import { createStore, } from 'redux';
import allreducers from "./reducers"
// import productReducer from './reducers/productReducer';

const store = createStore(
  Products
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
        <App/>
      </Provider>
    );


reportWebVitals();
