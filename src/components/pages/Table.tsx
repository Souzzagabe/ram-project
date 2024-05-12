import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { fetchCharacters, fetchEpisodes } from "../services/fetchRamService";
import Cards from "../utils/Cards";
import { CharacterData, EpisodeData } from "../@types/Types";
import { useEffect } from "react";

const Table = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<any[]>([]);
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  useEffect(() => {
    fetchData(activeTab === 0 ? fetchCharacters : fetchEpisodes);
  }, [activeTab]);

  const fetchData = async (fetchFunction: () => Promise<any[]>) => {
    try {
      const responseData = await fetchFunction();
      setData(responseData);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };
  

  const handleTabChange = async (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Toolbar
      sx={{
        backgroundColor: '#E1B15C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiTabs-root': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '5px' : '10px',
          marginBottom: '5px',
          color: 'white',
          padding: isMobile ? '10px' : '30px',
        },
        '& .MuiTabs-indicator': {
          height: 4,
          bottom: 0,
        },
        '& .MuiTab-root': {
          height: '40px',
          borderRadius: '20px',
          borderColor: 'white',
          fontWeight: 800,
          textDecoration: 'none',
          color: 'inherit',
          width: isMobile ? '100px' : '200px',
          overflowWrap: 'break-word',
        },
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Tab label="Home" />
        </Link>
        <Tab label="Personagens" />
        <Tab label="Episódios" />
      </Tabs>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {data.map((item, index) => (
          <Cards key={index} data={item} />
        ))}
      </Box>
    </Toolbar>
  );
};

export default Table;
