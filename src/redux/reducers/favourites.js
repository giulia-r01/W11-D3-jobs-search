import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions"

const initialState = {
  content: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      if (
        !state.content.find(
          (c) => c.company_name === action.payload.company_name
        )
      ) {
        return {
          ...state,

          content: [...state.content, action.payload],
        }
      }
      return state

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,

        content: state.content.filter((c) => c.company_name !== action.payload),
      }

    default:
      return state
  }
}

export default favouriteReducer
