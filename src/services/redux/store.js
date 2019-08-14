import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "redux-immutable"
import { reducer as formReducer } from "redux-form/immutable"
import { composeWithDevTools } from "redux-devtools-extension"
import { routerReducer, routerMiddleware } from "react-router-redux"
import thunkMiddleware from "redux-thunk"
import reducers from "./reducers"

const createHistory = require("history").createBrowserHistory
const history = createHistory()

const routeMiddleware = routerMiddleware(history)
const middleware = [thunkMiddleware, routeMiddleware]

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
    form: formReducer
  }),

  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
)

export { store, history }
