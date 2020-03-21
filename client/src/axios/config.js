import axios from "axios";

// const localhost = "http://localhost:3000";
const heroku = "https://ancient-reef-30300.herokuapp.com/";
const instance = axios.create({
  baseURL: heroku
});

export default instance;
