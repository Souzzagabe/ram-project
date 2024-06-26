export interface CharacterData {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  id: number;
}

export interface EpisodeData {
  episode: string;
  title: string;
  air_date: string;
  id: number;
  name: string;
  url: string;
}

export interface TabData {
  label: string;
  path: string;
  component: React.ComponentType;
}

export interface CustomTabsProps {
  tabs: TabData[];
}