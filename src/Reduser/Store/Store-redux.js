import { reducer as formReducer } from "redux-form"
const { createStore, combineReducers } = require("redux");
let reducers = combineReducers({
    form: formReducer
});
let store = createStore(reducers);
export default store;
window.store = store;