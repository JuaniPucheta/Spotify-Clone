# Spotify Clone
> [!NOTE]
> Based on: https://www.youtube.com/watch?v=WRc8lz-bp78

## Description
This is a clone of the Spotify web app. It was created using Astro 3, React JS, Svelte and Tailwind CSS.

> [!TIP]
> 1) **transition:name**. Para hacer las transiciones entre paginas, nos tenemos que asegurar que el nombre de la transicion sea el mismo en ambas paginas. Es importante que haya una transicion para un elemento de la siguiente pagina
> - Ejemplo: `[id].astro` y `PlayListItemCard.astro`
> 2) `<Player client:load transition:name="media-player" transition:persist/>`
> - ***client:load*** es un hook que se ejecuta cuando el componente se carga en el cliente
> - ***transition:name*** es el nombre de la transicion que se va a ejecutar
> - ***transition:persist*** es para que el componente persista al navegar entre paginas
> 3) **zustand** es una libreria para manejar el estado global de la aplicacion. Usada en `/src/store/playerStore.js` para manejar el estado del reproductor de musica