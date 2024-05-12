import { Box, Typography } from '@mui/material';
import bannerImage from '../../assets/bannertam2.jpg';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '450px',
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
          variant="h3"
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
