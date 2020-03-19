import axios from "axios";

const baseURL = "http://localhost:3000";
// Heroku URL

const instance = axios.create({
    baseURL
})

export default instance;