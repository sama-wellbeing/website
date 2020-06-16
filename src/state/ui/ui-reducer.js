import { TOGGLE_TRAY } from './ui-action';
import { createReducer } from "@reduxjs/toolkit"

export const initialUiState = {
  hasHero: undefined,
  tray: false,
};

const toggleTray = (state = initialUiState, action) => {
  switch (action.type) {
    case TOGGLE_TRAY:
      return { ...state, tray: action.isVisible }
    
    default:
      return state
  }
};

export const uiReducer = createReducer(initialUiState, {
  [TOGGLE_TRAY]: toggleTray,
});
