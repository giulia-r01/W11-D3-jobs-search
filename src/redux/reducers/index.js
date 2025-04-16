const initialState = {
  favourite: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      if (
        !state.favourite.content.find(
          (c) => c.company_name === action.payload.company_name
        )
      ) {
        return {
          ...state,
          favourite: {
            content: [...state.favourite.content, action.payload],
          },
        }
      }
      return state

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourite: {
          content: state.favourite.content.filter(
            (c) => c.company_name !== action.payload
          ),
        },
      }

    default:
      return state
  }
}

export default mainReducer
