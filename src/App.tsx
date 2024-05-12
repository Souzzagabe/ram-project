import { Box } from "@mui/material";
import Header from "@components/header/Header";
import Home from "@components/pages/Home";
import Footer from "@components/footer/Footer";
import Table from "@components/pages/Table";

import { Route, Routes } from "react-router-dom";
import CharacterCard from "@components/cards/CharacterCard";
import EpisodesCard from "@components/cards/EpisodesCards";





function App() {
  
  return (
    <>
      <Header />
      <Table/>
      <Box bgcolor="#E1B15C" px={2} py={1}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/personagens" element={<CharacterCard />} />
          <Route path="/episodios" element={<EpisodesCard />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
