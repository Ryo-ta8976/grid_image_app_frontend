const initialState = {
    isFetching: false,
    images: [],
}

export default function imagesReducer(state = initialState, action: any): any{
    switch (action.type) {
        case 'GET_IMAGES_REQUEST':
          return { isFetching: true, images: [] }
        case 'GET_IMAGES_SUCCESS':
          return { isFetching: false, images: action.data }
        case 'GET_IMAGES_FAILURE':
          return { isFetching: false, images: action.error}
        case 'SEARCH_IMAGES':
          return { ...state, images: action.data}
        default:
          return state
      }
}
