import { configureStore } from '@reduxjs/toolkit'
import { rootReducer as reducer } from './rootReducer'

export const store = configureStore({
  reducer,
})

export type AppDispatch = typeof store.dispatch
