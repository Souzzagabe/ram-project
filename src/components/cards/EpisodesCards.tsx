import { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Container, Card, CardContent } from '@mui/material';
import { fetchEpisodes } from '../services/fetchRamService';
import { EpisodeData } from '../types/types';
import { useTranslation } from 'react-i18next';

const EpisodesCard = () => {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);
  const { t } = useTranslation();
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
                  {t('status')}: {episode.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {t('no ar')}: {episode.air_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {t('episodios')}: {episode.episode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {t('link')}: {episode.url}
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
