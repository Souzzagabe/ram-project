import { Box, CssBaseline } from "@mui/material";
import Header from "@components/header/Header";
import Home from "@components/pages/Home";
import Table from "@/utils/Table";

import { Route, Routes } from "react-router-dom";
import CharacterCard from "@components/cards/CharacterCard";
import EpisodesCard from "@components/cards/EpisodesCards";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        bgcolor="#E1B15C"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Table />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personagens" element={<CharacterCard />} />
          <Route path="/episodios" element={<EpisodesCard />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
