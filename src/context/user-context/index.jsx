import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const USER_ACTIONS_TYPES  = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action
  const { SET_CURRENT_USER } = USER_ACTIONS_TYPES

  switch(type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type ${type}`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}

const UserProvider = ({ children }) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const {SET_CURRENT_USER} = USER_ACTIONS_TYPES

  const setCurrentUser = (user) => {
    dispatch({type: SET_CURRENT_USER, payload: user})
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
      console.log(user)
    })
    return unsubscribe
  }, [])

  return (
    <userContext.Provider value={value}>{ children }</userContext.Provider>
  )
}

export default UserProvider