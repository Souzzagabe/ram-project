import axios, { AxiosResponse } from "axios";

async function fetchData(url: string, headers: Record<string, string> = {}): Promise<any[]> {
  try {
    const response: AxiosResponse<any> = await axios.get(url, { headers });
    return response.data || [];
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    throw new Error("Erro ao buscar os dados");
  }
}

export async function fetchCharacters(): Promise<any[]> {
  const url: string = "https://rickandmortyapi.com/api/character";
  return await fetchData(url);
}

export async function fetchEpisodes(): Promise<any[]> {
  const url: string = "https://rickandmortyapi.com/api/episode";
  return await fetchData(url);
}
