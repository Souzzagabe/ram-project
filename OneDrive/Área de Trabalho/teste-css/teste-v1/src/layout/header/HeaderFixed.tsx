import { useState, useMemo, useEffect } from "react";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSearchParams, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-teddy.png"; 
import Main from "../main/Main";
import Selected from "../selected/Selected";

const HeaderFixed: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const userName = searchParams.get("name") || "Usuário";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // simula carregamento
    return () => clearTimeout(timer);
  }, [currentTab]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 2) {
      navigate("/");
      return;
    }
    setLoading(true);
    setCurrentTab(newValue);
  };

  const CurrentComponent = useMemo(() => {
    switch (currentTab) {
      case 0:
        return <Main />;
      case 1:
        return <Selected />;
      default:
        return null;
    }
  }, [currentTab]);

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{ height: "100px" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: "1400px",
            height: "100px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <Box display="flex" alignItems="center">
              <img
                src={logo}
                alt="Teddy Logo"
                style={{ width: 100, height: 49, marginRight: 8 }}
              />
            </Box>
          </Stack>

          <Tabs
            value={currentTab}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": { backgroundColor: "#ED6C02" },
              minHeight: 40,
              height: 40,
            }}
          >
            <Tab label="Clientes" sx={{ minHeight: 40, height: 40 }} />
            <Tab label="Clientes selecionados" sx={{ minHeight: 40, height: 40 }} />
            <Tab label="Sair" sx={{ minHeight: 40, height: 40 }} />
          </Tabs>

          <Typography variant="body2">
            Olá, <strong>{userName}</strong>!
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          mt: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 100px)",
        }}
      >
        {loading ? (
          <CircularProgress
            sx={{ color: "#f37021" }} // mesma cor do loading do login
            size={40}
            thickness={5}
          />
        ) : (
          CurrentComponent
        )}
      </Box>
    </>
  );
};

export default HeaderFixed;
