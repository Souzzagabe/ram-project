import { Box } from "@mui/material";
import Header from "@components/header/Header";
import Home from "@components/pages/Home";
import Tabs from "./utils/Tabs";
import { Route, Routes } from "react-router-dom";
import CharacterCard from "@/components/pages/Characters";
import EpisodesCard from "@components/pages/Episodes";

function App() {
  return (
    <>
      <Header />
      <Tabs />
      <Box bgcolor="#E1B15C" px={2} py={1}>
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