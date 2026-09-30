import type { APIRoute } from 'astro';

const API_URL = 'https://rickandmortyapi.com/api/character';
const CACHE_CONTROL = 'public, max-age=300, s-maxage=3600';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
	const requestUrl = new URL(request.url);
	const upstreamUrl = new URL(API_URL);
	const page = requestUrl.searchParams.get('page');
	const name = requestUrl.searchParams.get('name');

	if (page) {
		upstreamUrl.searchParams.set('page', page);
	}

	if (name?.trim()) {
		upstreamUrl.searchParams.set('name', name.trim());
	}

	try {
		const response = await fetch(upstreamUrl);
		const body = await response.text();

		return new Response(body, {
			status: response.status,
			headers: {
				'Cache-Control': CACHE_CONTROL,
				'Content-Type': response.headers.get('Content-Type') ?? 'application/json',
			},
		});
	} catch {
		return new Response(JSON.stringify({ error: 'No fue posible conectar con la API.' }), {
			status: 502,
			headers: {
				'Cache-Control': CACHE_CONTROL,
				'Content-Type': 'application/json',
			},
		});
	}
};