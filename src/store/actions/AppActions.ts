import axios from 'axios'

export const getImagesRequest = (): { type: string } => {
    return {
      type: 'GET_IMAGES_REQUEST'
    }
}

export const getImagesSuccess = (data: []): { type: string, data: []} => {
      return {
        type: 'GET_IMAGES_SUCCESS',
        data
      }
}

export const getImagesFailure = (error: Error): { type: string, error: Error } => {
      return {
        type: 'GET_IMAGES_SUCCESS',
        error
      }
}


export const getImages = () => {
    return async (dispatch: any) => {
      dispatch(getImagesRequest())
      try {
        const res = await axios.get('/images');
        return dispatch(getImagesSuccess(res.data));
      }
      catch (err) {
        return dispatch(getImagesFailure(err));
      }
    }
}

export const searchImages = (data: []): { type: string, data: []} => {
  return {
    type: 'SEARCH_IMAGES',
    data
  }
}