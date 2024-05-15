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

export const fetchEpisodes = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
    return response.data?.results || [];
  } catch (error) {
    console.error("Erro ao buscar os dados dos episódios:", error);
    throw error;
  }
};