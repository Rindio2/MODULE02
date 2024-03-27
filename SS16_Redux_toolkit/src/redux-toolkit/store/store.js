import { configureStore } from '@reduxjs/toolkit'
import  counter  from '../reducers/counter'

export const store1 = configureStore({
  reducer: {
    counter11:counter
  },
})