const store = require("./app/store");
const cakeActions = require("./feautures/cake/cakeSlice").cakeActions;
const iceActions = require("./feautures/icecream/iceCreamSlice").iceActions;
console.log("initial state", store.getState());
const unSubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(cakeActions.ordered(3));
store.dispatch(cakeActions.restocked(3));
store.dispatch(iceActions.ordered(3));
store.dispatch(iceActions.restocked(5));
unSubscribe();
