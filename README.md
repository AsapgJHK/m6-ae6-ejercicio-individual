# 🌡️ Conversor de Temperatura (Node.js con Yargs y Chalk)

Este es un ejercicio individual para desarrollar una aplicación de línea de comandos (CLI) en Node.js, diseñada para convertir temperaturas entre grados Celsius (°C) y Fahrenheit (°F). La aplicación utiliza el paquete **Yargs** para el manejo de argumentos y validaciones, y **Chalk** para mejorar la legibilidad de los mensajes de consola con colores.

## 🎯 Objetivos del Ejercicio

* Dominar la configuración y el manejo de argumentos de línea de comandos con **Yargs**.
* Implementar validaciones robustas (parámetros obligatorios, tipo de dato).
* Manejar errores de forma controlada y legible.
* Mejorar la experiencia del usuario (UX) mediante la coloración de la consola con **Chalk**.
* Utilizar el sistema de **Módulos ES (ESM)** de Node.js (`import`/`export`).

---

## ⚙️ Estructura del Proyecto

```

conversor-temperatura/
├── app.js             \# Punto de entrada y configuración principal de Yargs.
├── package.json       \# Define dependencias y el modo "type": "module".
└── helpers/
└── convert.js     \# Contiene la lógica pura de conversión de temperatura.

````

---

## 🚀 Configuración e Instalación

### 1. Inicialización

Asegúrate de tener Node.js instalado. Luego, inicializa el proyecto:

```bash
mkdir conversor-temperatura
cd conversor-temperatura
npm init -y
````

### 2\. Instalación de Dependencias

Instala los paquetes necesarios:

```bash
npm install yargs chalk
```

### 3\. Modo ES Module (ESM)

Para que el `import` funcione y evitar errores de `require`, asegúrate de que tu `package.json` incluya la línea `"type": "module"`.

**`package.json` (fragmento):**

```json
{
  "name": "conversor-temperatura",
  "version": "1.0.0",
  "description": "CLI para convertir temperaturas",
  "type": "module", 
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  ...
}
```

-----

## 💻 Uso de la Aplicación

El comando principal se ejecuta con `node app.js` seguido de los argumentos obligatorios: `--temp` y `--unidad`.

### Argumentos Obligatorios

| Argumento | Alias | Descripción | Tipo | Ejemplo de Unidad |
| :--- | :--- | :--- | :--- | :--- |
| `--temp` | `-t` | Valor numérico de la temperatura a convertir. | `number` | `25` |
| `--unidad` | `-u` | Unidad de la temperatura original. | `string` | `c` (Celsius) o `f` (Fahrenheit) |

### Ejemplos Exitosos

#### 1\. De Celsius a Fahrenheit

```bash
node app.js --temp 25 --unidad c
```

**Salida (en verde):**

```
✅ CONVERSIÓN EXITOSA:
25°C es 77.00°F
```

#### 2\. De Fahrenheit a Celsius

```bash
node app.js -t 98.6 -u F
```

**Salida (en verde):**

```
✅ CONVERSIÓN EXITOSA:
98.6°F es 37.00°C
```

-----

## 🚫 Manejo de Errores y Validaciones

La aplicación implementa validaciones clave y utiliza Chalk para categorizar los mensajes:

### 1\. Parámetros Faltantes (Yargs)

Si falta `temp` o `unidad`, Yargs detiene la ejecución y muestra un error en **rojo**.

```bash
node app.js --temp 20
```

**Salida (en rojo):**

```
❌ ERROR: Los parámetros --temp (temperatura) y --unidad (c/f) son obligatorios.
... (Mensaje de ayuda de Yargs)
```

### 2\. Unidad Inválida (Lógica Propia)

Si la unidad no es `c` ni `f`, la lógica de `convert.js` lanza un error que se captura y se muestra como una **advertencia en amarillo**.

```bash
node app.js -t 100 -u k
```

**Salida (en amarillo):**

```
⚠️ ADVERTENCIA: Unidad inválida: "k". Debe ser 'c' (Celsius) o 'f' (Fahrenheit).
Por favor, usa --unidad c o --unidad f.
```


