import axios from "axios";
import { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Container, Card, CardContent, Box, Pagination, styled } from '@mui/material';
import { EpisodeData } from '../types/types';
import { useTranslation } from 'react-i18next';
import Footer from "../footer/Footer";

const StyledPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    color: 'white', // Altera a cor para azul
    fontSize: '1.2rem',
    padding:'10px',
    display:'flex',
    alignItems: 'center' // Altera o tamanho da fonte
  },
  position: 'relative', // Remove a posição fixa
  marginTop: '30px', // Adiciona margem superior
  textAlign: 'center', // Alinha ao centro
  display: 'flex',
  justifyContent: 'center', // Centraliza horizontalmente
});

const fetchEpisodes = async (page = 1) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
    return response.data?.results || [];
  } catch (error) {
    console.error('Erro ao buscar os dados dos episódios:', error);
    throw error;
  }
};

const EpisodesCard = () => {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  const fetchData = async (pageNumber: number) => {
    try {
      const allEpisodes = await fetchEpisodes(pageNumber);
      setEpisodes(allEpisodes);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar os dados dos episódios:', error);
    }
  };

  const handlePageChange = (e: React.ChangeEvent<unknown>, pageNumber: number) => {
    setPage(pageNumber);
    setLoading(true);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <Box>
      <Container maxWidth="lg" style={{ maxWidth: 1000, maxHeight: 555, overflowY: 'auto', position: 'relative' }}>
        <Box minHeight="80vh" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={3}>
              {episodes.map((episode) => (
                <Grid item xs={12} sm={6} md={4} key={episode.id}>
                  <Card style={{ height: '100%', position: 'relative' }}>
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
        </Box>
      </Container>
      <StyledPagination count={3} page={page} onChange={handlePageChange} />
      <Footer />
    </Box>
  );
};

export default EpisodesCard;
