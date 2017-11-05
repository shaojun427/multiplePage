import { createStore } from 'redux';

let counter = (defaultState = {}, action) => {
  switch (action.type) {
    case 'TEST':
      defaultState.test = action.data.inputValue;
      break;
  }
  return defaultState;
}

let store = createStore(counter);

export default store;