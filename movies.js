const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();


const getMovies = async (query) => {

    try {
        const movie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_DB_API_KEY}&query=${query}`);
        return movie;

    }
    catch (error) {
        console.error(error);
    };
};

module.exports = {
    getMovies
}