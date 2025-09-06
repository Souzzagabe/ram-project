import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Por favor, digite seu nome.");
      return;
    }

    setError("");
    // Redireciona com o nome na URL (query string)
    navigate(`/Header?name=${encodeURIComponent(name)}`);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          width: 380,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 500 }}>
          Olá, seja bem-vindo!
        </Typography>

        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Digite o seu nome:"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!error}
              helperText={error}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#f37021",
                fontWeight: "bold",
                ":hover": { backgroundColor: "#e65b00" },
                py: 1.2,
              }}
              fullWidth
            >
              Entrar
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
