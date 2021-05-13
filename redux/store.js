import { createStore, combineReducers, applyMiddleware } from 'redux';
import { themeReducer } from './reducers/themeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  theme: themeReducer,
});

const middleware = [thunk];

export const store = createStore(reducers, applyMiddleware(thunk));
