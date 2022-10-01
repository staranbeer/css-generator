import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    styles: {
      'font-size': '16',
      paddingX: '20',
      paddingY: '10',
      'box-shadow':
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'border-width': 0,
      'border-type': 'solid',
      'border-color': '#000000',
      'border-radius': '5',
    },
  },

  reducers: {
    changeInputStyles: (state, action) => {
      const { property, value } = action.payload;
      state.styles[property] = value;
    },
  },
});

export const { changeInputStyles } = inputSlice.actions;
export default inputSlice.reducer;
