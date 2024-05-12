import React from 'react';
import { Container, Typography, AppBar } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#E1B15C', boxShadow: 'none', padding:'25px'}}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{ padding: '20px' }}>
          &copy; {new Date().getFullYear()} Rick and Morty. <a href='https://www.linkedin.com/in/gabriel-souza-web/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', fontWeight: 'bold', color:'white',}}>@Souzzagabe</a> Todos os direitos reservados.
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
