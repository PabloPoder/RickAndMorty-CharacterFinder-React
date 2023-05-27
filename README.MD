# RICK AND MORTY: CHARACTER FINDER - useState, useEffect y mas ⚛️

Este proyecto lo hice como ejercicio práctico para familiarizarme con el uso de useState, useEffect, custom hooks y otros componentes y funciones utiles en React.

# Visitar página: 👀

- https://rickandmortycharacterfinder.surge.sh

# API: 👨🏻‍💻
- https://rickandmortyapi.com/


# Lista de características a desarrollar: 📝 

Requisitos:
✅ - Mostrar un input para buscar la pelicula y un boton para buscar. (el boton fue eliminado ya que la busqueda se convirto en automatica)
✅ - Lista los personajes encontradas y muestra el nombre, especie e imagen.
✅ - Hacer validacion de formulario.
✅ - Hacer fetch de datos.
✅ - Haz que los personajes se muestren en un grid responsive.

Primera iteracion:
✅ - Evitar que se haga la misma busqueda dos veces seguidas.
✅ - Haz que la busqueda se hada automaticamente al escribir.
✅ - Evita que se haga la busqueda continuamente al escribir (debounce).


# Pasos que segui para el desarrollo: 🧩
- Cree la estructura html de la pagina principal (main, h1, form, input, button).
- Cree un mock con los resultados de la api.
- Cree el componente Characters el cual renderiza la lista o un mensaje dependiendo de si la lista esta vacia a o no.
- Agregue mas datos para mostrar como la especia y el lugar de origen del personaje.
- Mappee la infomarcion de json para gaurdarla como a mi me intersa. De esta forma la UI no queda anclada a la API.
- Cree un estado para la validacion del formulario. El valor del estado lo seteo en value del input. Creo handleChange y handle Sumbmit. handleChange se encarga de no permitir empezar con espacio vacio.
- Cree un custom hook para las validaciones del input.
- Cree un custom hook para los personajes.
- Cree un service para el fetching de datos y el mapeo de la respuesta.
- Desde el custom hook useCharcters llame al servicio y actualice el estado.
- Cree dos estados nuevos para el custom hook de charactes, loading y error.
- Cree otro useRef para ver si se esta buscando con la misma query (dos veces la misma peticion). Si es asi entonces no la hago.
- Agregue un estado para el sort y agretgue el useMemo al custom hook para que no se ejecute nuevamente sortedCharacters
