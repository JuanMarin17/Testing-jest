# 🧪 Jest + React Testing Library — Ejemplo Práctico con Contador

Este repositorio contiene un ejemplo práctico de *pruebas unitarias en React* usando *Jest* y *React Testing Library*.

El componente de ejemplo es un *Counter (Contador)* que demuestra cómo escribir y ejecutar pruebas en una aplicación React real.

> ⚠️ *Este repositorio no incluye package.json ni node_modules.*  
> Debes seguir los pasos de abajo para instalar todo desde cero. Está pensado así para que aprendas el proceso completo.

---

## 📋 Requisitos previos

Antes de empezar, necesitas tener instalado *Node.js* (versión 18 o superior), que incluye *npm*.

👉 Descárgalo desde: [https://nodejs.org](https://nodejs.org) — elige la versión *LTS*.

Verifica que esté instalado abriendo una terminal y ejecutando:

bash
node -v
npm -v


Ambos deben mostrar un número de versión. Si no, instala Node.js antes de continuar.

---

## 🚀 Instalación paso a paso

### 1 — Iniciar

bash
npm init -y


Esto crea el archivo package.json que el proyecto necesita.

---

### 2 — Instalar React

bash
npm install react react-dom


---

### 3 — Instalar Jest y React Testing Library

bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom


---

### 4 — Instalar Babel

Babel permite que Jest entienda JSX y los import/export modernos.

bash
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react


---

### 5 — Instalar entorno jsdom para Jest

Desde Jest 28, el entorno jsdom se instala por separado. Es necesario para pruebas en React:

bash
npm install --save-dev jest-environment-jsdom


---

### 5 — Crear los archivos de configuración

Crea estos *3 archivos* en la raíz del proyecto y dentro de src/:

#### 📄 babel.config.js — en la raíz del proyecto

js
export default {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};


#### 📄 jest.config.js — en la raíz del proyecto

js
export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};

#### 📄 src/setupTests.js — dentro de la carpeta src

js
import "@testing-library/jest-dom";


---

### 6 — Agregar el script de pruebas

Abre el package.json y reemplaza la sección "scripts" por esto:

json
"scripts": {
  "test": "jest"
}


---

### 7 — Ejecutar las pruebas

bash
npm test


Si todo está bien, verás algo así:


PASS  src/assets/components/Counter.test.jsx
  ✓ muestra el contador inicial en 0 (25ms)
  ✓ incrementa el contador al hacer clic en el botón (18ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Time:        1.234s


---

## 📁 Estructura final del proyecto


nombre-del-proyecto/
│
├── babel.config.js
├── jest.config.js
├── package.json
│
└── src/
    ├── setupTests.js
    └── assets/
        └── components/
            ├── Counter.jsx
            └── Counter.test.jsx


---

## ❗ Errores comunes

*Cannot find module 'react'*  
→ Ejecuta npm install react react-dom.

*SyntaxError: Cannot use import statement*  
→ Revisa que babel.config.js esté creado correctamente.

*ReferenceError: document is not defined*  
→ Revisa que jest.config.js tenga testEnvironment: 'jsdom'.

*toBeInTheDocument is not a function*  
→ Revisa que src/setupTests.js exista y esté referenciado en jest.config.js.

---

## 🚀 Autor

Ejemplo práctico creado con fines educativos para aprender pruebas unitarias en React.