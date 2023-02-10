const createSlice = require("@reduxjs/toolkit").createSlice;

/*  Initial State */

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCream -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceActions = iceCreamSlice.actions;
