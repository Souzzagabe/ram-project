import { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Container, Card, CardContent } from '@mui/material';
import { fetchEpisodes } from '../services/fetchRamService';
import { EpisodeData } from '../types/types';

const EpisodesCard = () => {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allEpisodes = await fetchEpisodes();
        setEpisodes(allEpisodes);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os dados dos episódios:', error);
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
          {episodes.map((episode) => (
            <Grid item xs={12} sm={6} md={4} key={episode.id}>
              <Card style={{ height: '100%' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Nome: {episode.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    No Ar: {episode.air_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Episódios: {episode.episode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Link: {episode.url}
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

export default EpisodesCard;
