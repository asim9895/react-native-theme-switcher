import { SWITCH_THEME } from '../types';
import { lightTheme } from '../../screens/Theme';

const initialState = {
  theme: lightTheme,
};

export const themeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: actions.payload,
      };
    default:
      return state;
  }
};
