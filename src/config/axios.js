import axios from "axios";

// const baseURL = "http://localhost:3000";
const baseURL = "http://ecommerce-server-juleshwa.herokuapp.com";


// Heroku URL

const instance = axios.create({
    baseURL
})

export default instance;