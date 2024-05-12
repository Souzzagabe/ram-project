// Cards.jsx

import React from 'react';
import { Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CharacterData, EpisodeData } from '../../components/@types/Types';

interface CharacterCardProps {
  data: CharacterData | EpisodeData;
}

const Cards: React.FC<CharacterCardProps> = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      {('name' in data && 'status' in data) ? (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {data.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Species: {data.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {data.gender}
          </Typography>
        </CardContent>
      ) : (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Episode: {data.episode}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Title: {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Air Date: {data.air_date}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default Cards;
