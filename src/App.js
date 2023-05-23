// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//my method
// import ProductList from './ProductList';
// import ProductDetails from './ProductDetails';
// import Allproducts from './alloriducts';

// const App = () => {
//   return (
//     <div>
//       <h1>Product List</h1>
//       {/* <ProductList /> */}
//       <Allproducts/>
//       {/* <h1>Product Details</h1> */}
//       {/* <ProductDetails /> */}
//     </div>
//   );
// };

// export default App;


//toolkit

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './toolkit/store';

import ProductList from "./toolkit/productlist";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Product List</h2>
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;
