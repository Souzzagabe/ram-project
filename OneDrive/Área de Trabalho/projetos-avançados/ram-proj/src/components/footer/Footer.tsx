import React from 'react';
import { Container, Typography, AppBar, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#E1B15C' }}>
      <Container maxWidth="lg">
        <Box sx={{ padding: '20px' }}>
          <Typography variant="body1" align="center">
            &copy; {new Date().getFullYear()} Rick and Morty. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;

