import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://intense-reaches-25321.herokuapp.com'
})

export default instance
