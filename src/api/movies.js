// api
import { get } from './api'

// api key
import { key } from './api'

export default {
  apiGetMovies: page => {
    return get(`3/movie/popular?api_key=${key}&page=${page}`)

  },
}
