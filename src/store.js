import {createStore,combineReducers} from "redux";
import todoReducer from "./reducers/todoReducer";

const rootReducer=combineReducers({todoReducer}),
store = createStore(rootReducer);

export default store;