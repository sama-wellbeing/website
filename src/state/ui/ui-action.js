export const TOGGLE_TRAY = 'TOGGLE_TRAY';
export const SET_THEME = "SET_THEME"

export const toggleTray = isVisible => ({
  type: TOGGLE_TRAY,
  isVisible,
})

export const setTheme = theme => ({
  type: SET_THEME,
  theme,
})