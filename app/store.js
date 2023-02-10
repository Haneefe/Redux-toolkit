const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../feautures/cake/cakeSlice");
const iceReducer = require("../feautures/icecream/iceCreamSlice");
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
  },
});

module.exports = store;
