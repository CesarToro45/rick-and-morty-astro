# Rick & Morty: Archivo interdimensional

Landing responsive para explorar personajes de Rick and Morty. La primera página se obtiene de la API oficial y se prerenderiza con Astro; búsqueda y paginación consultan la API desde el navegador.

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

El proyecto utiliza el modo estático predeterminado de Astro. La API debe estar disponible durante el build para incluir los primeros personajes en el HTML generado.

## Tecnologías

- Astro para páginas, layout, SEO y renderizado inicial.
- React y TypeScript para búsqueda, paginación y estados interactivos del explorador.
- Rick and Morty API para los datos e imágenes de personajes.
- CSS tradicional para estilos responsive y estados de foco.

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
│   │   ├── astro/ (vacío)
│   │   └── react/
│   │       └── CharacterExplorer.tsx
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

## Con más tiempo

- Añadir pruebas automatizadas para los estados de búsqueda, paginación, error y resultados vacíos.
- Medir accesibilidad, rendimiento y Core Web Vitals en una demo desplegada; evaluar optimización de imágenes si el hosting permite servirlas localmente.
- Configurar una plataforma de despliegue y una estrategia de actualización del HTML estático para reflejar nuevos datos de la API.