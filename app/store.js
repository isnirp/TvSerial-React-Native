import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { navMiddleware } from "./nav/routes";

const initState = {};

//const middleware = [thunk, navMiddleware];

export default createStore(rootReducer, applyMiddleware(thunk));

//export default createStore(rootReducer, initState, applyMiddleware(thunk));

/*export default createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);*/

//const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
