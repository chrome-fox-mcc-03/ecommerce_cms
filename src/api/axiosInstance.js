import Axios from 'axios'

const Instance = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 60000
})

export default Instance
