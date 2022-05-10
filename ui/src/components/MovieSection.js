import * as React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MovieCard from './MovieCard';
import SearchList from './LastSearch';
import ContactForm from './Form';


export default function MovieSection({ updateMovies, movies }) {
    const [value, setValue] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [isFormVisible, setIsFormVisible] = React.useState(false);
    const [matchingMovies, setMatchingMovies] = React.useState([]);

    const getDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate() + 1;

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return `${yyyy}-${mm}-${dd}`;
    }

    const searchMovie = async () => {
        const result = await axios.post(
            `${process.env.REACT_APP_API_URL}/movies`, { query: value }
        );
        await axios.post(
            `${process.env.REACT_APP_API_URL}/movies/movies`, {
            movieName: value,
            searchDate: getDate(),
            userName: name
        }
        );

        setMatchingMovies(result.data.movies.results);
        setIsFormVisible(false);
        updateMovies();
    };

    return (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TextField onChange={(e) => setValue(e.target.value)} label="Search your movie" style={{ margin: '10px' }} />
                <TextField onChange={(e) => setName(e.target.value)} label="Enter your name" />
                <Button disabled={!value || !name} style={{ margin: '15px', width: '100px', height: '40px' }} onClick={() => searchMovie()} variant="contained">Search</Button>
                <Button style={{ margin: '15px', width: '300px', height: '40px' }} onClick={() => setIsFormVisible(true)} variant="contained">Didn't find your movie?</Button>
            </div>
            {isFormVisible
                ? <ContactForm />
                : <div style={{ width: '100%', marginTop: '50px', display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <SearchList movies={movies} />
                    </div>
                    <div>
                        {matchingMovies
                            ? matchingMovies.map((movie) =>
                                <span key={movie.id} style={{ padding: '15px' }}>
                                    <MovieCard image={movie.poster_path} name={movie.title} description={movie.overview} />
                                </span>
                            )
                            : null
                        }
                    </div>
                </div>
            }
        </div>
    );
}
