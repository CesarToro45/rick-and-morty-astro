// Define la estructura base de un personaje de la API
export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

// Define los metadatos de paginación devueltos por la API
export interface APIInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

// Estructura de respuesta principal de la API
export interface APIResponse {
  info: APIInfo;
  results: Character[];
}