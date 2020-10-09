import { createStore, AnyAction } from 'redux';
import { combineReducers } from 'redux';
import * as constants from './constants';
import { HomeStoreState } from './meta';

const defaultState: HomeStoreState = {
  title: 0,
};

const homeReducer = (state = defaultState, action: AnyAction): HomeStoreState => {
  switch (action.type) {
    case constants.CHANGE_TITLE:
      return {
        ...state,
        title: action.value,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  home: homeReducer,
});

const reduxDevtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxDevtools);

export default store;
