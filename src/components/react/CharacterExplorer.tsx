import { useState, type FormEvent } from 'react';
import { getCharacters } from '../../services/rickAndMorty';
import type { APIResponse, Character } from '../../types/character';

interface Props {
	initialResponse: APIResponse | null;
	initialError: boolean;
}

const statusLabels: Record<Character['status'], string> = {
	Alive: 'Vivo',
	Dead: 'Fallecido',
	unknown: 'Desconocido',
};

const genderLabels: Record<Character['gender'], string> = {
	Female: 'Femenino',
	Male: 'Masculino',
	Genderless: 'Sin género',
	unknown: 'Desconocido',
};

function CharacterCard({ character }: { character: Character }) {
	return (
		<article className="character-card">
			<img
				className="character-card__image"
				src={character.image}
				alt={`Retrato de ${character.name}`}
				width="300"
				height="300"
				loading="lazy"
				decoding="async"
			/>
			<div className="character-card__body">
				<div className="character-card__topline">
					<span className={`status status--${character.status.toLowerCase()}`}>
						<span aria-hidden="true" />{statusLabels[character.status]}
					</span>
					<span className="character-card__id">N.º {String(character.id).padStart(3, '0')}</span>
				</div>
				<h3>{character.name}</h3>
				<dl className="character-card__details">
					<div><dt>Especie</dt><dd>{character.species}</dd></div>
					<div><dt>Género</dt><dd>{genderLabels[character.gender]}</dd></div>
				</dl>
			</div>
		</article>
	);
}

export default function CharacterExplorer({ initialResponse, initialError }: Props) {
	const [characters, setCharacters] = useState(initialResponse?.results ?? []);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState(initialResponse?.info.pages ?? 0);
	const [query, setQuery] = useState('');
	const [activeQuery, setActiveQuery] = useState('');
	const [status, setStatus] = useState<Character['status'] | ''>('');
	const [species, setSpecies] = useState('');
	const [activeStatus, setActiveStatus] = useState<Character['status'] | ''>('');
	const [activeSpecies, setActiveSpecies] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(initialError);

	async function loadPage(
		page: number,
		name: string,
		statusFilter: Character['status'] | '' = activeStatus,
		speciesFilter: string = activeSpecies,
	) {
		setIsLoading(true);
		setHasError(false);

		try {
			const response = await getCharacters(page, name, statusFilter, speciesFilter);
			setCharacters(response.results);
			setCurrentPage(page);
			setPageCount(response.info.pages);
			setActiveQuery(name);
			setActiveStatus(statusFilter);
			setActiveSpecies(speciesFilter);
		} catch {
			setCharacters([]);
			setPageCount(0);
			setHasError(true);
		} finally {
			setIsLoading(false);
		}
	}

	function handleSearch(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		void loadPage(1, query.trim(), status, species);
	}

	function handleRetry() {
		void loadPage(currentPage, activeQuery, activeStatus, activeSpecies);
	}

	return (
		<div className="explorer" aria-busy={isLoading}>
			<form className="search-form" onSubmit={handleSearch} role="search">
				<label htmlFor="character-search">Buscar personaje</label>
				<div className="search-form__controls">
					<input
						id="character-search"
						name="name"
						type="search"
						placeholder="Ej. Rick Sanchez"
						value={query}
						onChange={(event) => setQuery(event.currentTarget.value)}
					/>
					<div className="filter-control">
						<label htmlFor="character-status">Estado</label>
						<select
							id="character-status"
							name="status"
							value={status}
							onChange={(event) => setStatus(event.currentTarget.value as Character['status'] | '')}
						>
							<option value="">Todos los estados</option>
							<option value="Alive">Vivo</option>
							<option value="Dead">Fallecido</option>
							<option value="unknown">Desconocido</option>
						</select>
					</div>
					<div className="filter-control">
						<label htmlFor="character-species">Especie</label>
						<input
							id="character-species"
							name="species"
							type="search"
							placeholder="Ej. Human"
							value={species}
							onChange={(event) => setSpecies(event.currentTarget.value)}
						/>
					</div>
					<button className="button button--dark" type="submit" disabled={isLoading}>
						Buscar <span aria-hidden="true">↗</span>
					</button>
				</div>
			</form>

			{isLoading && <p className="state-message" role="status">Consultando el portal...</p>}

			{hasError && (
				<div className="state-message state-message--error" role="alert">
					<p>No se pudo conectar con la API. Comprueba tu conexión e inténtalo de nuevo.</p>
					<button className="button button--outline" type="button" onClick={handleRetry} disabled={isLoading}>
						Reintentar
					</button>
				</div>
			)}

			{!isLoading && !hasError && characters.length === 0 && (
				<p className="state-message" role="status">
					No encontramos personajes{activeQuery ? ` para “${activeQuery}”` : ''}. Prueba con otro nombre.
				</p>
			)}

			{!hasError && characters.length > 0 && (
				<>
					<div className="character-grid">
						{characters.map((character) => <CharacterCard key={character.id} character={character} />)}
					</div>
					<nav className="pagination" aria-label="Paginación de personajes">
						<button
							className="button button--outline"
							type="button"
							disabled={isLoading || currentPage <= 1}
							onClick={() => void loadPage(currentPage - 1, activeQuery, activeStatus, activeSpecies)}
						>
							<span aria-hidden="true">←</span> Anterior
						</button>
						<p aria-live="polite">Página <strong>{currentPage}</strong> de <strong>{pageCount}</strong></p>
						<button
							className="button button--outline"
							type="button"
							disabled={isLoading || currentPage >= pageCount}
							onClick={() => void loadPage(currentPage + 1, activeQuery, activeStatus, activeSpecies)}
						>
							Siguiente <span aria-hidden="true">→</span>
						</button>
					</nav>
				</>
			)}
		</div>
	);
}