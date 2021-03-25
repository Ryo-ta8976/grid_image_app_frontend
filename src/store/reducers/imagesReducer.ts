const initialState = {
    isFetching: false,
    images: [],
}

export default function(state = initialState, action: any){
    switch (action.type) {
        case 'GET_IMAGES_REQUEST':
          return { isFetching: true, images: [] }
        case 'GET_IMAGES_SUCCESS':
          return { isFetching: false, images: action.data }
        case 'GET_IMAGES_FAILURE':
          return { isFetching: false, images: action.error}
        default:
          return state
      }
}
