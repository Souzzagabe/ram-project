import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, Toolbar, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Table = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();
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
          fontWeight: "bold",
          textDecoration: "none",
          color: "white",
          width: isMobile ? "120px" : "200px",
          overflowWrap: "break-word",
          borderBottom: "4px solid transparent",
        },
        "& .MuiTab-root.Mui-selected": {
          fontWeight: 800, 
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
          to="/home"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => setActiveTab(0)}
        >
          <Tab label={t('home')} />
        </Link>
        <Link
          to="/personagens"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => setActiveTab(1)}
        >
          <Tab label={t('character')} />
        </Link>
        <Link to="/episodios">
          <Tab label={t('episodes')} onClick={() => setActiveTab(2)} />
        </Link>
      </Tabs>
      <LanguageSwitcher />
    </Toolbar>
  );
};

export default Table;
