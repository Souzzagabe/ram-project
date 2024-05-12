import { Box, Grid, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import fotoDeMorty from '../../assets/foto de morty.jpg';
import fotoDeRick from '../../assets/foto de rick.jpg';

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  borderRadius: '5px',
  overflow: 'hidden',
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 0.8,
  },
  border: "1px solid white",
  '& img': {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
  },
}));

const Home = () => {
  
  return (
    <Box maxWidth="1000px" margin="auto" bgcolor="#E1B15C" minWidth="dvh">
      <Grid container spacing={0} minHeight="100%">
        <Grid item xs={12} sm={6}>
          <ImageList cols={1} rowHeight={555}>
            <StyledImageListItem>
              <img src={fotoDeMorty} alt="Morty" />
              <ImageListItemBar title="Morty" />
            </StyledImageListItem>
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageList cols={1} rowHeight={555}>
            <StyledImageListItem>
              <img src={fotoDeRick} alt="Rick" />
              <ImageListItemBar title="Rick" />
            </StyledImageListItem>
          </ImageList>
        </Grid>
      </Grid>
    </Box>
  );
};


export default Home;
