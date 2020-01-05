import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import peoplesReducer from '../reducers/peoples';
import filteredDataReducer from '../reducers/filteredData';
import monthsListReducer from '../reducers/monthsList';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      peoples: peoplesReducer,
      filteredData: filteredDataReducer,
      months: monthsListReducer
    }),

    composeEnchancers(applyMiddleware(thunk))
  );

  return store;
};
