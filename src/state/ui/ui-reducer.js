import { TOGGLE_TRAY, SET_THEME } from "./ui-action"
import { createReducer } from "@reduxjs/toolkit"

export const initialUiState = {
  hasHero: undefined,
  tray: false,
  theme: 'default'
};

const toggleTray = (state = initialUiState, action) => {
  switch (action.type) {
    case TOGGLE_TRAY:
      return { ...state, tray: action.isVisible }
    
    default:
      return state
  }
};

const setTheme = (state = initialUiState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.theme }

    default:
      return state
  }
}

export const uiReducer = createReducer(initialUiState, {
  [TOGGLE_TRAY]: toggleTray,
  [SET_THEME]: setTheme
});
