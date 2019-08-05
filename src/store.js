import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import camReducer from "./reducers/camReducer";
import stuReducer from "./reducers/stuReducer";
import tarStuReducer from "./reducers/target-s-reducer";
import tarCamReducer from "./reducers/target-c-reducer";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const rootReducer = combineReducers({
  campuses: camReducer,
  students: stuReducer,
  targetStu: tarStuReducer,
  targetCam: tarCamReducer
});

const logger = createLogger({ collapsed: true });

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
