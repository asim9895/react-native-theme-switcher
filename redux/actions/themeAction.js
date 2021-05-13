import { SWITCH_THEME } from '../types';

export const switch_theme = (theme) => async (dispatch) => {
  dispatch({
    type: SWITCH_THEME,
    payload: theme,
  });
};
