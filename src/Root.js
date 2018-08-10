import React from 'react';
import reducers from 'reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const initailState = {};
const middleware = [];

export default props => {
  return (
    <Provider
      store={createStore(
        reducers,
        initailState,
        compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )}
    >
      {props.children}
    </Provider>
  );
};
