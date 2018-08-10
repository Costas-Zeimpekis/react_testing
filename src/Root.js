import React from 'react';
import reducers from 'reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';

const initialState = {};
const middleware = [reduxPromise];

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );

  return <Provider store={store}>{children}</Provider>;
};

// ,
//         compose(
//           applyMiddleware(...middleware),
//           window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
