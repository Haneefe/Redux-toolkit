const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../feautures/cake/cakeSlice");
const iceReducer = require("../feautures/icecream/iceCreamSlice");
const userReducer = require("../feautures/user/userSlice");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
