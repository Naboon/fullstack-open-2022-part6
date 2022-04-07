import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      const filter = action.payload
      return (state = filter)
    }
  }
})

export const { setFilter } = filterSlice.actions

export const changeFilter = (filter) => {
  return (dispatch) => {
    dispatch(setFilter(filter))
  }
}

export default filterSlice.reducer
