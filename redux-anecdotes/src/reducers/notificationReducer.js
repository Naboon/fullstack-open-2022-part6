import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotificationContent(state, action) {
      return (state = action.payload)
    }
  }
})

export const { setNotificationContent } = notificationSlice.actions

export const setNotification = (content, duration) => {
  return (dispatch) => {
    dispatch(setNotificationContent(content))
    setTimeout(() => {
      dispatch(setNotificationContent(''))
    }, duration * 1000)
  }
}

export default notificationSlice.reducer
