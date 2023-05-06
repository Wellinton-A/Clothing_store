// import { compose, applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import { rootReducers } from "./root-reducer";
import { configureStore } from '@reduxjs/toolkit'

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

// const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const middlewares = [process.env.NODE_ENV !== 'production' && loggerMiddleware]

// const composedEnhanced = composedEnhancer(applyMiddleware(...middlewares))

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middlewares)
})