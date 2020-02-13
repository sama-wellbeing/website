import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import { initialUiState } from "./ui/ui-reducer";
import { rootReducer } from "./index"

export const mockInitialState = {
  ui: initialUiState,
}

const initialState = _.cloneDeep(mockInitialState);

const createStore = () => reduxCreateStore(rootReducer, initialState);

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
