import { compose, applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import { rootReducers } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

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

const middlewares = [process.env.NODE_ENV !== 'production' && loggerMiddleware].filter(Boolean)

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const composedEnhanced = composedEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhanced)

export const persistor = persistStore(store)