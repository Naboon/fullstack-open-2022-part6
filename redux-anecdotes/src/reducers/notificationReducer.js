import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Test notification'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      const notification = action.payload
      state = notification
    }
  }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer
