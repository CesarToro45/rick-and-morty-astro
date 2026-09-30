import type { APIResponse, Character } from '../types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';
const REQUEST_TIMEOUT_MS = 8000;
const MAX_ATTEMPTS = 2;

/**
 * Obtiene la lista paginada de personajes desde la API oficial.
 * @param page Número de página a consultar (default: 1)
 * @param name Filtro opcional por nombre
 */
export async function getCharacters(
  page: number = 1,
  name: string = '',
  status: Character['status'] | '' = '',
  species: string = '',
): Promise<APIResponse> {
  const url = new URL(`${BASE_URL}/character`);
  url.searchParams.append('page', page.toString());

  if (name.trim() !== '') {
    url.searchParams.append('name', name.trim());
  }

  if (status !== '') {
    url.searchParams.append('status', status.toLowerCase());
  }

  if (species.trim() !== '') {
    url.searchParams.append('species', species.trim());
  }

  let response: Response | null = null;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      response = await fetch(url.toString(), { signal: controller.signal });
      break;
    } catch (error) {
      if (attempt === MAX_ATTEMPTS) {
        throw error;
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  if (response === null) {
    throw new Error('No se recibió una respuesta de la API.');
  }

  if (!response.ok) {
    if (response.status === 404) {
      return {
        info: { count: 0, pages: 0, next: null, prev: null },
        results: [],
      };
    }
    throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
  }

  const data: APIResponse = await response.json();
  return data;
}