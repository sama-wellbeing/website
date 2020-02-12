import { combineReducers } from 'redux';
import { uiReducer } from "./ui/ui-reducer"

export const rootReducer = combineReducers({
  ui: uiReducer
});

export default combineReducers({ rootReducer });
