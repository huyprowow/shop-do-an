import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import { Provider } from 'react-redux';
// // import {configureStore} from './store'
import store from './store'
// // const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,document.getElementById('root')
);
// export default store;