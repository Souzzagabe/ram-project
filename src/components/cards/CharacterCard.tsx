import { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import { fetchCharacters } from '../services/fetchRamService';
import { CharacterData } from '../types/types';

const CharacterCard = () => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await fetchCharacters();
        setCharacters(charactersData);
        setLoading(false);
      } catch (error) {
      }
    };
  
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" style={{ maxWidth: 1000, maxHeight: 555, overflowY: 'auto' }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {characters.map((character) => (
            <Grid item xs={12} sm={6} md={4} key={character.id}>
              <Card style={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={character.image}
                  alt={character.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Status: {character.status}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Species: {character.species}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gender: {character.gender}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CharacterCard;
