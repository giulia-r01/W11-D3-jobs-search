import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favouriteReducer from "../reducers/favourites"
import resultReducer from "../reducers/results"

const uniqueReducer = combineReducers({
  favourites: favouriteReducer,
  results: resultReducer,
})

const store = configureStore({
  reducer: uniqueReducer,
})

export default store
