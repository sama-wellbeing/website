export const TOGGLE_TRAY = 'TOGGLE_TRAY';

export const toggleTray = isVisible => ({
  type: TOGGLE_TRAY,
  isVisible,
})
