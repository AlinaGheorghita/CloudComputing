import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';


const SearchList = ({ movies }) => {
    return (
        <div style={{ marginTop: '50px' }}>
            <Paper sx={{ width: '100%', height: '300px', maxWidth: 280, bgcolor: 'background.paper', padding: '5px', overflow: 'auto' }}>
                <div>Latest searches</div>
                {movies.length
                    ? movies.map((movie) => (
                        <List key={movie.entryID}>
                            <Divider />
                            <ListItem>
                                <span style={{ fontSize: '12px' }}>
                                    {`${movie.userName} searched ${movie.movieName} on ${movie.searchDate?.split('T')[0]}`}
                                </span>
                            </ListItem>
                        </List>
                    ))
                    : 'No movies were searched'}
            </Paper>
        </div>
    );
}

export default SearchList;