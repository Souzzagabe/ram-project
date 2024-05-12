import { Box, Typography, useMediaQuery } from '@mui/material';
import bannerImage from '../../assets/banner-ramedited.jpg';

const Header = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        position: 'relative',
        height: '300px',
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant={isSmallScreen ? 'h4' : 'h3'}
          sx={{
            fontWeight: 'bold',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            marginBottom: '8px',
          }}
        >
          Saiba tudo do universo de Rick and Morty
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
