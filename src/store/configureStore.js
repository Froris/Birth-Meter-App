import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import peopleReducer from '../reducers/people';
import filteredDataReducer from '../reducers/filteredData';
import monthsListReducer from '../reducers/monthsList';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      people: peopleReducer,
      peopleList: filteredDataReducer,
      months: monthsListReducer
    }),

    composeEnchancers(applyMiddleware(thunk))
  );

  return store;
};
