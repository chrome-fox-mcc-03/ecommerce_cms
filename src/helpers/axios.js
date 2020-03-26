const axios = require("axios");

const hitScryfall = axios.create({
  baseURL: "https://api.scryfall.com"
});

const hitAPI = axios.create({
  baseURL: "https://tcg-ecommerce-cms.herokuapp.com"
});

// https://tcg-ecommerce-cms.herokuapp.com/ <--- e-commerce server
// http://localhost:3000 <--- localhost

module.exports = {
  hitScryfall,
  hitAPI
};
