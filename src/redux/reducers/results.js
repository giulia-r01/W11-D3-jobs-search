import { FETCH_JOBS } from "../actions"

const initialState = {
  results: [], // qui dentro devono finirci i 6 libri disponibili (fetch)
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        results: action.payload, // l'array di 6 libri arrivato dalla fetch
      }

    default:
      return state
  }
}

export default resultReducer
