import { useState } from "react";
import { Tab, Tabs, Toolbar, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const Table = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleTabChange = (newValue: any) => {
    setActiveTab(newValue);
  };

  return (
    <Toolbar
      sx={{
        backgroundColor: "#E1B15C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiTabs-root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "5px" : "10px",
          marginBottom: "5px",
          color: "white",
          padding: isMobile ? "10px" : "30px",
        },
        "& .MuiTabs-indicator": {
          height: 4,
          bottom: 0,
        },
        "& .MuiTab-root": {
          height: "40px",
          borderRadius: "20px",
          borderColor: "white",
          fontWeight: "bold", // Alterado de 800 para 500 para remover a fonte em negrito
          textDecoration: "none",
          color: "white", // Alterado de 'inherit' para 'white'
          width: isMobile ? "120px" : "200px", // Ajuste para dispositivos móveis
          overflowWrap: "break-word",
          borderBottom: "4px solid transparent",
        },
        "& .MuiTab-root.Mui-selected": {
          fontWeight: 800, // Adicionado para tornar o texto em negrito quando selecionado
        },
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => setActiveTab(0)}
        >
          <Tab label="Home" />
        </Link>
        <Link
          to="/personagens"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => setActiveTab(1)}
        >
          <Tab label="Personagens" />
        </Link>
        <Link to="/episodios">
          <Tab label="Episódios" onClick={() => setActiveTab(2)} />
        </Link>{" "}
      </Tabs>
    </Toolbar>
  );
};

export default Table;
