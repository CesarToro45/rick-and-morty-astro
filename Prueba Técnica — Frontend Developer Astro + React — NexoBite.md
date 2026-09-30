# Prueba Técnica — Frontend Developer Astro + React Objetivo

Desarrollar una landing page responsive utilizando Astro + React, consumiendo información de la Rick and Morty API. La prueba está diseñada para evaluar principalmente conocimientos, criterio técnico y buenas prácticas, más que la cantidad de funcionalidades o el resultado visual. Se espera que el candidato pueda explicar las decisiones tomadas durante el

desarrollo y justificar cuándo utilizar Astro y cuándo utilizar React.

## 1. Requerimiento

Crear una landing page relacionada con el universo de Rick and Morty.

La página debe consumir información desde:

## Rick and Morty API

La API puede consultarse en:

https://rickandmortyapi.com/

## Información mínima

La landing debe mostrar un listado de personajes obtenidos desde la API.

Cada personaje debe mostrar, como mínimo:

- Imagen

- Nombre

- Estado

- Especie

- Género

El diseño visual queda parcialmente a criterio del candidato. No se busca evaluar conocimientos de diseño gráfico, sino la capacidad para construir

una interfaz funcional, responsive y optimizada.


## 2. Requerimientos funcionales

## Landing

La página debe contener como mínimo:

- 1. Hero / encabezado.

- 2. Una sección de personajes.

- 3. Cards para representar los personajes.

- 4. Algún mecanismo para consultar más personajes.

El candidato puede decidir cómo implementar la navegación:

- Paginación.

- “Load more”.

- Infinite scroll.

- Otra alternativa técnicamente justificada.

## API

La información debe obtenerse desde la API real.

No se permite hardcodear los personajes como fuente principal de información.

Debe contemplarse:

- Loading state.

- Error state.

- Estado vacío cuando corresponda.

## 3. Responsive Design

La aplicación debe funcionar correctamente en:

- Mobile

- Tablet

- Desktop

Se recomienda probar como mínimo:

- 375px

- 768px

- 1024px

- 1440px


## Mobile First

Se espera que el candidato considere el uso en dispositivos móviles como una prioridad.

Evaluaremos especialmente:

- Adaptación del layout.

- Tamaño de textos.

- Tamaño de botones.

- Espaciado.

- Legibilidad.

- Imágenes.

- Interacciones táctiles.

- Ausencia de scroll horizontal.

- Uso correcto del viewport.

No es necesario replicar exactamente un diseño proporcionado.

## 4. Performance

La velocidad es uno de los principales objetivos de esta prueba.

El candidato debe prestar atención a:

## Imágenes

- Tamaños adecuados.

- Lazy loading cuando corresponda.

- Evitar cargar imágenes innecesariamente grandes.

- Uso correcto de width / height cuando sea pertinente.

- Evitar layout shifts.

## JavaScript

Debe evitarse enviar JavaScript al cliente sin necesidad.

Se espera que el candidato pueda explicar:

¿Qué parte de la aplicación necesita realmente ejecutarse en el navegador?

Una implementación que utilice Astro para renderizar contenido estático y React únicamente donde exista interacción tendrá especial interés para la evaluación.


## Carga inicial

La página inicial debe intentar minimizar:

- JavaScript innecesario.

- Requests innecesarios.

- Recursos bloqueantes.

- Componentes innecesariamente pesados.

## 5. Astro + React

Este punto es fundamental.

No se busca simplemente una aplicación React ejecutándose dentro de Astro.

El candidato debe demostrar que comprende las ventajas de utilizar Astro.

Durante la revisión se evaluará:

## Astro

- Estructura de páginas.

- Componentes Astro.

- Layouts.

- Server-side rendering / static rendering según la estrategia elegida.

- Manejo de datos.

- Uso adecuado de islands.

- Separación entre contenido estático e interactivo.

## React

React debe utilizarse cuando aporte valor.

Por ejemplo:

- Filtros interactivos.

- Búsqueda.

- Paginación dinámica.

- Modal de detalle.

- Componentes que requieran interacción del usuario.

No es necesario utilizar React para toda la página.

De hecho, parte de la evaluación consiste en determinar dónde NO utilizar React.


## 6. Arquitectura

El candidato debe organizar el proyecto de manera clara.

No se exige una arquitectura específica.

Sin embargo, debe existir una separación razonable entre:

- Páginas.

- Layouts.

- Componentes.

- Componentes interactivos.

- Lógica relacionada con API.

- Tipos/interfaces.

- Utilidades.

La estructura debe ser comprensible para otro desarrollador que tenga que continuar el proyecto.

## 7. Accesibilidad

Se evaluarán buenas prácticas básicas de accesibilidad.

Como mínimo:

- HTML semántico.

- Uso correcto de headings.

- alt en imágenes.

- Botones reales para acciones.

- Links cuando corresponda.

- Navegación mediante teclado.

- Contraste razonable.

- Estados de focus.

- Labels adecuados en inputs.

No se requiere WCAG AAA.

## 8. SEO

La landing debe incluir buenas prácticas básicas de SEO.


## Como mínimo:

- <title>

- Meta description

- Viewport

- HTML semántico

- Open Graph básico

- Headings correctamente estructurados

El candidato puede agregar mejoras adicionales si considera que aportan valor.

## 9. Manejo de estados

La aplicación debe contemplar los diferentes estados que pueden ocurrir durante el consumo de la API.

Como mínimo:

## Loading

Mostrar un estado apropiado mientras se obtiene la información.

## Success

Mostrar los personajes correctamente.

## Error

Mostrar un mensaje comprensible si la API falla.

## Empty

Contemplar el caso en el que una búsqueda o filtro no produzca resultados.

## 10. Funcionalidad adicional

Agregar funcionalidades adicionales es opcional.

Algunas posibilidades:

- Búsqueda de personajes.

- Filtro por estado.

- Filtro por especie.

- Filtro por género.


- Ordenamiento.

- Modal con información detallada.

- Infinite scroll.

- Favoritos.

- Dark mode.

Estas funcionalidades no son necesarias para aprobar la prueba.

Se valorará más una implementación pequeña, sólida y bien estructurada que una aplicación con muchas funcionalidades pero malas decisiones técnicas.

## 11. Requerimientos técnicos

## Obligatorio

- Astro

- React

- TypeScript

- Rick and Morty API

- Responsive design

- Git

## Recomendado

- ESLint

- Prettier

- Lighthouse

- DevTools para analizar performance

El uso de CSS puede realizarse mediante:

- CSS tradicional

- CSS Modules

- Tailwind

- Otra solución razonable

No se evaluará una herramienta específica.

## 12. Entregables

El candidato debe entregar:


## 1. Repositorio Git

Debe contener el código fuente completo.

## 2. README

El README debe incluir:

- Descripción del proyecto.

- Instrucciones para ejecutar localmente.

- Tecnologías utilizadas.

- Decisiones técnicas relevantes.

- Decisiones relacionadas con performance.

- Decisiones relacionadas con Astro y React.

- Qué mejoraría con más tiempo.

## 3. Demo

Idealmente una versión desplegada.

Puede utilizar cualquier plataforma de hosting compatible con Astro.

## 13. Criterios de evaluación

La prueba será evaluada principalmente por criterio técnico, no por cantidad de funcionalidades.

| Área | Peso |
| --- | --- |
| Astro + React / arquitectura | 25% |
| Performance | 20% |
| Responsive / Mobile | 20% |
| Calidad y buenas prácticas de | 15% |
| código |   |
| Consumo y manejo de API | 10% |
| Accesibilidad + SEO | 10% |

## 14. Regla principal

No buscamos la landing más bonita. Buscamos entender cómo piensa un desarrollador frontend.


Una implementación sencilla, rápida, responsive y técnicamente bien justificada tendrá más valor que una implementación visualmente espectacular pero con una arquitectura deficiente. Durante la entrevista técnica, el candidato deberá poder explicar y defender las

decisiones tomadas durante el desarrollo.
