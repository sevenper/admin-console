import * as constants from './constants';

export const changeTitle = (value: Number) => ({
  type: constants.CHANGE_TITLE,
  value,
});
