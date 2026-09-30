# Rick & Morty: Archivo interdimensional

Landing responsive para explorar personajes de Rick and Morty. La primera página se obtiene de la API oficial y se prerenderiza con Astro; búsqueda y paginación consultan la API desde el navegador mediante una isla interactiva de React.

## Enlaces del proyecto

- Repositorio: [github.com/CesarToro45/rick-and-morty-astro](https://github.com/CesarToro45/rick-and-morty-astro)
- Demo: [rick-and-morty-astro-woad.vercel.app](https://rick-and-morty-astro-woad.vercel.app)
- API: [rickandmortyapi.com](https://rickandmortyapi.com/)

## Requisitos

- Node.js `>=22.12.0`
- npm

## Desarrollo

```sh
npm install
npm run dev
```

El servidor local queda disponible en `http://localhost:4321`.

## Producción

```sh
npm run build
npm run preview
```

El proyecto utiliza el modo estático predeterminado de Astro. La API debe estar disponible durante el build para incluir los primeros personajes en el HTML generado. La demo publicada se sirve desde Vercel.

## Tecnologías

- Astro para páginas, layout, SEO y renderizado inicial.
- React y TypeScript para búsqueda, filtros, paginación, modo oscuro y estados interactivos del explorador.
- Rick and Morty API para los datos e imágenes de personajes.
- CSS tradicional para estilos responsive y estados de foco.

## Estrategia de conexión

- La carga inicial se realiza durante el build de Astro para entregar contenido visible desde el HTML generado.
- Las búsquedas y cambios de página se realizan desde React contra la API oficial.
- Cada petición tiene un timeout de 8 segundos mediante `AbortController`.
- Los fallos de red y los timeouts disponen de un reintento automático antes de mostrar el estado de error.
- Las respuestas HTTP 404 se interpretan como un resultado vacío para las búsquedas sin coincidencias.
- Los filtros de estado y especie se envían a la API para evitar descargar y filtrar datos innecesarios en el cliente.
- El modo oscuro se controla desde React, respeta la preferencia del sistema y conserva la elección del usuario en `localStorage`.
- No se utiliza un proxy interno en la versión actual; el consumo directo funciona con la API pública y evita añadir infraestructura innecesaria al proyecto.

## Estructura del proyecto

```text
.
├── .vscode/
│   ├── extensions.json
│   └── launch.json
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── react/
│   │       ├── CharacterExplorer.tsx
│   │       └── ThemeToggle.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── services/
│   │   └── rickAndMorty.ts
│   ├── styles/
│   │   └── global.css
│   └── types/
│       └── character.ts
├── .gitignore
├── AGENTS.md
├── astro.config.mjs
├── CLAUDE.md
├── package-lock.json
├── package.json
├── Prueba Técnica — Frontend Developer Astro + React — NexoBite.md
├── README.md
└── tsconfig.json
```

El árbol muestra los archivos fuente y de configuración. Se omiten `node_modules/`, `.astro/` y `dist/` porque contienen dependencias o archivos generados.

## Decisiones técnicas

- El contenido del hero y la primera página del archivo se renderizan en Astro, sin enviar JavaScript para esas partes estáticas.
- `CharacterExplorer` es una isla React con hidratación `client:visible`: sus controles se activan cuando el explorador se acerca al viewport.
- React consulta páginas y búsquedas bajo demanda. No se descargan todas las páginas ni se filtran miles de registros en el cliente.
- El servicio conserva el 404 de búsqueda como un resultado vacío, pero propaga fallos de red y otros errores HTTP para que la interfaz pueda mostrar un estado de error real.
- Las imágenes tienen dimensiones declaradas para reservar espacio, carga diferida en las fichas y decodificación asíncrona. El retrato destacado prioriza la carga.
- Se incluyen etiquetas semánticas, textos alternativos, etiquetas de formulario, navegación por teclado, foco visible y metadatos Open Graph.

## Mejoras futuras

- Añadir pruebas automatizadas para los estados de búsqueda, paginación, error y resultados vacíos.
- Medir accesibilidad, rendimiento y Core Web Vitals en una demo desplegada; evaluar optimización de imágenes si el hosting permite servirlas localmente.
- Mejorar la resiliencia de la conexión con una capa proxy o una función server-side que permita centralizar caché, reintentos y control de disponibilidad sin depender de la conexión directa del cliente.
- Evaluar una estrategia de actualización del HTML estático para reflejar nuevos datos de la API sin depender exclusivamente del momento del build.