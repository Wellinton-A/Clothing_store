import { compose, applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import { rootReducers } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }

  console.log('type: ' , action.type)
  console.log('payload: ' , action.payload)
  console.log('currentState: ' , store.getState())

  next(action)

  console.log('nextState: ' , store.getState())
}
const middlewares = [loggerMiddleware]

const composedEnhanced = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducers, undefined, composedEnhanced)