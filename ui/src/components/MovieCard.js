import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MovieCard({ image, name, description }) {
    return (
        <Card sx={{ width: 350 }}>
            <CardActionArea>
                {image
                    ? <CardMedia
                        component="img"
                        height="140"
                        image={`http://image.tmdb.org/t/p/w500/${image}`}
                    />
                    : 'No image'}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}