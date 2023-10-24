					GIF-EXPERT-APP-VITE


- vite > Is a compilation tool that aims to provide a faster and more agile development experience for modern web projects.

	> Improves the start time of the development server by first dividind the modules of an application into two categories: Dependencies and source code. 

	> Dependencies are mostly plain javascript code that doesn't change frequently during development.

------------------------------------------------------------------------------------------------------------



- yarn create vite > Crea proyecto desde 0
- yarn dev > inicia
- yarn add prop-types
- RAFC > Functional component 
- yarn build > Despliega APP 



-----------------------------------------------------------------------------------------------------------


					COMPONENTES


AddCategory > Añade un input donde se introducirá la categoría que se quiere mostrar con gifs

GifGrid > Se encarga de mostrar el GRID de imagenes de la categoría introducida, hace el fetch (Que se encuentra en otro subcomponente dentro del directorio helpers >> GetGifs.js)

-------------------------------------------------------------------------------------------------------------
Objetivos cumplidos

> Manejar un formulario dentro de un componente
> Capturamos el valor y lo asociamos 
> Hacemos que todos los cambios sucedan en una sola via, evitando el two way data binding.
