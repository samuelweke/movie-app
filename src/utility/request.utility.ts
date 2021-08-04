import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_TMDB_API_URL,
})

instance.interceptors.request.use(config => {
  config.params = {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    ...config.params,
  }

  return config
})

export { instance as axiosRequest }
