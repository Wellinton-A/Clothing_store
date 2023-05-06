import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, actions) {
      state.currentUser = actions.payload
    }
  }
})

export const { setCurrentUser } = userSlice.actions
export const userReducer = userSlice.reducer