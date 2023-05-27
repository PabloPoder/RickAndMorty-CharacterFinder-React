# RICK AND MORTY: CHARACTER FINDER - useState, useEffect ⚛️
Este proyecto lo hice como ejercicio práctico para familiarizarme con el uso de useState, useEffect, custom hooks y otros componentes y funciones utiles en React.

# Visitar página: 👀
https://rickandmortycharacterfinder.surge.sh

# API: 👨🏻‍💻
https://rickandmortyapi.com/

# Lista de características a desarrollar: 📝

✅ - Mostrar un input para buscar la película y un botón para buscar. (El botón fue eliminado ya que la búsqueda se convirtió en automática).

✅ - Listar los personajes encontrados y mostrar el nombre, especie e imagen.

✅ - Realizar validación del formulario.

✅ - Realizar fetch de datos.

✅ - Hacer que los personajes se muestren en un grid responsive.

Primera iteración:

✅ - Evitar que se realice la misma búsqueda dos veces seguidas.

✅ - Hacer que la búsqueda se realice automáticamente al escribir.

✅ - Evitar que se realice la búsqueda continuamente al escribir (debounce).




# Pasos que seguí para el desarrollo: 🧩

1. Creé la estructura HTML de la página principal (main, h1, form, input, button).
2. Creé un mock con los resultados de la API.
3. Creé el componente Characters, el cual renderiza la lista o un mensaje dependiendo de si la lista está vacía o no.
4. Agregué más datos para mostrar, como la especie y el lugar de origen del personaje.
5. Mapeé la información del JSON para guardarla según mis necesidades. De esta forma, la interfaz de usuario no queda anclada a la API.
6. Creé un estado para la validación del formulario. El valor del estado lo seteo en el atributo "value" del input. También creé las funciones handleChange y handleSubmit. handleChange se encarga de no permitir empezar con un espacio vacío.
7. Creé un custom hook para las validaciones del input.
8. Creé un custom hook para los personajes.
9. Creé un servicio para el fetching de datos y el mapeo de la respuesta.
10. Desde el custom hook useCharacters, llamé al servicio y actualicé el estado.
11. Creé dos estados nuevos para el custom hook de characters: loading y error.
12. Creé otro useRef para verificar si se está buscando con la misma query dos veces (es decir, la misma petición). Si es así, entonces no la realizo.
13. Agregué un estado para el ordenamiento (sort) y utilicé useMemo en el custom hook para que sortedCharacters no se ejecute nuevamente.
