const store = require("./app/store");
const cakeActions = require("./feautures/cake/cakeSlice").cakeActions;
const iceActions = require("./feautures/icecream/iceCreamSlice").iceActions;
const fetchUsers = require("./feautures/user/userSlice").fetchUsers;
console.log("initial state", store.getState());
const unSubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered(3));
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceActions.ordered(3));
// store.dispatch(iceActions.restocked(5));
store.dispatch(fetchUsers());
// unSubscribe();
