import { createSlice } from '@reduxjs/toolkit'

let timerId = undefined

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
    if (timerId) {
      clearTimeout(timerId)
    }

    dispatch(setNotificationContent(content))
    timerId = setTimeout(() => {
      dispatch(setNotificationContent(''))
    }, duration * 1000)
  }
}

export default notificationSlice.reducer
