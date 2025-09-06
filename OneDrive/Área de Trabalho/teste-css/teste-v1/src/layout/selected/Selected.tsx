import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Pagination,
  Select,
  MenuItem,
  Stack,
  Skeleton,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import MainService from "../../services/main/index";
import type { SelectChangeEvent } from "@mui/material/Select";

interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt: string;
  updatedAt: string;
}

export default function ClientPage() {
  const [client, setClient] = useState<Client[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(16);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClient(page, perPage);
  }, [page, perPage]);

  const fetchClient = async (page: number, limit: number) => {
    try {
      setLoading(true);
      const response = await MainService.chargeAmount(page, limit);
      const data = response.data;
      setClient(data.clients);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await MainService.deleteUser(id);
      setClient((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  };

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangePerPage = (event: SelectChangeEvent<number>) => {
    setPerPage(Number(event.target.value));
    setPage(1);
  };

  // Gerar skeletons do mesmo tamanho dos cards
  const skeletons = Array.from({ length: perPage }, (_, i) => (
    <Card
      key={i}
      variant="outlined"
      sx={{
        height: 138,
        borderRadius: "8px",
        boxShadow: "none",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Skeleton variant="text" width="60%" height={24} sx={{ mx: "auto" }} />
        <Skeleton variant="text" width="80%" height={18} sx={{ mx: "auto" }} />
        <Skeleton variant="text" width="70%" height={18} sx={{ mx: "auto" }} />
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mt: 1,
          px: 1,
        }}
      >
        <Skeleton variant="circular" width={28} height={28} />
        <Skeleton variant="circular" width={28} height={28} />
        <Skeleton variant="circular" width={28} height={28} />
      </Box>
    </Card>
  ));

  return (
    <Box maxWidth={1200} mx="auto" p={3}>
      {/* Top bar */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        mt={8}
        pr={1}
      >
        <Typography variant="h6">
          <strong>{client.length}</strong> clientes encontrados:
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography>Clientes por página:</Typography>
          <Select<number>
            value={perPage}
            onChange={handleChangePerPage}
            size="small"
            sx={{ width: 80 }}
          >
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </Stack>
      </Stack>

      {/* Área dos cards + botão dentro */}
      <Box
        sx={{
          width: 1200,
          display: "grid",
          gridTemplateColumns: "repeat(4, 285px)",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {loading
          ? skeletons
          : client.map((cliente) => (
              <Card
                key={cliente.id}
                variant="outlined"
                sx={{
                  height: 138,
                  borderRadius: "8px",
                  boxShadow: "none",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <CardContent
                  sx={{
                    padding: 0,
                    "&:last-child": { paddingBottom: 0 },
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold" mb={0.5}>
                    {cliente.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Salário: R$
                    {cliente.salary.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </Typography>
                  <Typography variant="body2">
                    Empresa: R$
                    {cliente.companyValuation.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    mt: 1,
                    px: 1,
                  }}
                >
                  <IconButton size="small" color="default" aria-label="Adicionar">
                    <Add fontSize="medium" />
                  </IconButton>

                  <IconButton size="small" color="default" aria-label="Editar">
                    <Edit fontSize="medium" />
                  </IconButton>

                  <IconButton
                    size="small"
                    sx={{ color: "#f44336" }}
                    aria-label="Excluir"
                    onClick={() => handleDelete(cliente.id)}
                  >
                    <Delete fontSize="medium" />
                  </IconButton>
                </Box>
              </Card>
            ))}

        {/* Botão Criar Cliente ocupando toda a largura do grid */}
        <Box sx={{ gridColumn: "1 / -1" }}>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              height: 40,
              borderRadius: "4px",
              border: "2px solid #ED6C02",
              color: "#ED6C02",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
                borderColor: "#ED6C02",
              },
            }}
          >
            Criar cliente
          </Button>
        </Box>
      </Box>

      {/* Paginação */}
      <Box mt={3} display="flex" justifyContent="center" alignItems="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": {
              fontWeight: "normal",
              color: "#000",
              borderRadius: 0,
              minWidth: 32,
              height: 32,
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "#000",
            },
            "& .Mui-selected": {
              backgroundColor: "#ED6C02",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: 4,
              "&:hover": {
                backgroundColor: "#d75c00",
              },
            },
            "& .MuiPaginationItem-icon": {
              color: "#ED6C02",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(237, 108, 2, 0.1)",
            },
          }}
        />
      </Box>
    </Box>
  );
}
