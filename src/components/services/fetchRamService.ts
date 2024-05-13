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

export const fetchEpisodes = async () => {
  try {
    const allEpisodes = [];
    let nextPage = "https://rickandmortyapi.com/api/episode";

    while (nextPage) {
      const response = await axios.get(nextPage);
      const data = response.data;
      allEpisodes.push(...data.results);
      nextPage = data.info.next;
    }

    return allEpisodes;
  } catch (error) {
    console.error("Erro ao buscar os dados dos episódios:", error);
    throw error;
  }
};
