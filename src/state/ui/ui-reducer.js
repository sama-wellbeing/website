import { TOGGLE_DARKMODE } from "./ui-action"
import { createReducer } from "@reduxjs/toolkit"

export const initialUiState = {
  hasHero: undefined,
  isDarkMode: false,
};

const toggleDarkMode = (state = initialUiState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode };
    default:
      return state;
  }
};


export const uiReducer = createReducer(initialUiState, {
  [TOGGLE_DARKMODE]: toggleDarkMode,
});
