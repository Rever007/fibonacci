# Fibonacci Sequence REST API

Un proyecto que tiene una ruta de /fibonacci

## Como empezar

- Clonar el repositorio
- `npm install` para instalar las dependencias
- `npm start` para arrancar el servidor local en localhost:8000

### Pre-requisitos

- Node.js
```
https://nodejs.org/en/
```

### Como probarlo

- Entrar con un software para hacer peticiones por GET, en mi caso Postman.
- Colocar http://localhost:8000/fibonacci?index={n} <-- el {n} se tiene que reemplazar por un numero entero
- La respuesta va ser en JSON mostrando un array con la llave "result_fibonacci" y el numero dependiendo del index que se le paso.