import _ from 'lodash'

export const getThemeClass = (theme) => {
  return _.camelCase(theme);
};