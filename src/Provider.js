import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer';

const store = createStore(productReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      {/* Your app components */}
    </Provider>
  );
};

export default App;
