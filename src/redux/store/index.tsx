import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import reducers from '../reducers';
import {setAuthToken} from '../../@crema/services/auth/jwt-auth/jwt-api';

const createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();
const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState?: AppState) {
  const middleware = [thunk, routerMiddleware(history)];

  const enhancers = [];
  const windowIfDefined =
    typeof window === 'undefined' ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers),
  );
  let currentState = store.getState();
  store.subscribe(() => {
    // keep track of the previous and current state to compare changesAppLayout/index.j
    let previousState = currentState;
    currentState = store.getState();
    // if the token changes set the value in localStorage and axios headers
    if (previousState.auth.token !== currentState.auth.token) {
      const token = currentState.auth.token;
      setAuthToken(token);
    }
  });
  return store;
}

export {history};

// export type AppState = ReturnType<typeof rootReducer>;
