export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const FETCH_JOBS = "FETCH_JOBS"

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  }
}

export const removeFromFavouritesAction = (annuncio) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: annuncio.company_name,
  }
}

export const fetchJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      )
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: FETCH_JOBS,
          payload: data, // l'array dei lavori!
        })
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
