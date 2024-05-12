import axios from "axios";

export async function fetchCharacters() {
  try {
    const response = await axios.get<any>(
      "https://rickandmortyapi.com/api/character"
    );
    return response.data?.results || [];
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    throw new Error("Erro ao buscar os dados");
  }
}

export async function fetchEpisodes() {
  try {
    const response = await axios.get<any>(
      "https://rickandmortyapi.com/api/episode",
    );
    return response.data?.results || [];
  } catch (error) {
    console.error("Erro ao buscar estatísticas mundiais:", error);
    throw new Error("Erro ao buscar estatísticas mundiais");
  }
}
