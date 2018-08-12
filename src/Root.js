import React from 'react';
import reducers from 'reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

const middlewares = [async, stateValidator];

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );

  return <Provider store={store}>{children}</Provider>;
};

// ,
//         compose(
//           applyMiddleware(...middleware),
//           window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
