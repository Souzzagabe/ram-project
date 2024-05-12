import React from 'react';
import { Container, Typography, AppBar } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#E1B15C', boxShadow: 'none', padding:'22px'}}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{ padding: '20px' }}>
          &copy; {new Date().getFullYear()} Rick and Morty. Todos os direitos reservados.
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
