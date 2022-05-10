import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieSection from './MovieSection';
import Header from './Header';

function MainPage() {
    const [movies, setMovies] = useState([]);

    const updateMovies = async () => {
        const result = await axios.get(
            `${process.env.REACT_APP_API_URL}/movies/searchedMovies`,
        );

        if (result.data.movies) {
            setMovies(result.data.movies);
        }
    };

    useEffect(() => {
        updateMovies();
    }, []);

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <MovieSection movies={movies} updateMovies={updateMovies} />
            </div>
        </div>
    );
}

export default MainPage;