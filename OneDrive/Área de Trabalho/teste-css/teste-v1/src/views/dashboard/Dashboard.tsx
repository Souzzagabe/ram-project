import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Main from "../../layout/main/Main";
import Selected from "../../layout/selected/Selected";
import logo from "../../assets/logo-teddy.png";

const drawerWidth = 240;

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (index: number) => {
    setSelectedIndex(index);
    setDrawerOpen(false);
  };

  // Conteúdo renderizado baseado no menu selecionado
  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return <Main />;
      case 1:
        return <Selected />;
      default:
        return <Typography>Selecione uma opção</Typography>;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      {/* Header */}
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Menu + Logo */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Box display="flex" alignItems="center">
              <img
                src={logo}
                alt="Teddy Logo"
                style={{ height: 32, marginRight: 8 }}
              />
            </Box>
          </Stack>

          {/* Center: Abas de navegação (opcional, pode remover) */}
          {/* Pode sincronizar aqui se quiser */}
          
          {/* Right: Saudação */}
          <Typography variant="body2">
            Olá, <strong>Usuário</strong>!
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: drawerWidth, backgroundColor: "#2c2c2c", color: "white" } }}
      >
        <Box sx={{ p: 3, textAlign: "center", borderBottom: "1px solid #444" }}>
          <img src={logo} alt="Teddy Logo" style={{ height: 32, marginBottom: 8 }} />
          <Typography variant="caption" sx={{ color: "#888" }}>
            OPEN FINANCE
          </Typography>
        </Box>

        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={() => handleMenuClick(0)}
              sx={{
                color: selectedIndex === 0 ? "#f15a24" : "#bbb",
                fontWeight: selectedIndex === 0 ? "bold" : "normal",
              }}
            >
              <ListItemIcon sx={{ color: selectedIndex === 0 ? "#f15a24" : "#bbb" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Clientes" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={() => handleMenuClick(1)}
              sx={{
                color: selectedIndex === 1 ? "#f15a24" : "#bbb",
                fontWeight: selectedIndex === 1 ? "bold" : "normal",
              }}
            >
              <ListItemIcon sx={{ color: selectedIndex === 1 ? "#f15a24" : "#bbb" }}>
                <PersonSearchIcon />
              </ListItemIcon>
              <ListItemText primary="Clientes selecionados" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                console.log("Logout");
                setDrawerOpen(false);
              }}
              sx={{ color: "#bbb" }}
            >
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Conteúdo principal */}
      <Box sx={{ flexGrow: 1, p: 3, mt: 8, overflowY: "auto" }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;
