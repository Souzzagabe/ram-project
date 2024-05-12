import { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Container, Card, CardContent } from '@mui/material';
import { fetchEpisodes } from '../services/fetchRamService';
import { EpisodeData } from '../@types/Types';


const EpisodesCard = () => {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const episodesData = await fetchEpisodes();
        setEpisodes(episodesData);
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
          {episodes.map((episodes) => (
            <Grid item xs={12} sm={6} md={4} key={episodes.id}>
              <Card style={{ height: '100%' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Nome: {episodes.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Foi ao ar: {episodes.air_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Episódios: {episodes.episode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Link: {episodes.url}
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
