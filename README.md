# 🌤️ WeatherApp - Capitales del Mundo

Aplicación web que muestra el clima actual de 10 capitales del mundo, con vista de detalle y pronóstico extendido. Desarrollada como parte del Módulo 3 del curso.

## 📌 Temática

La app muestra información climática ficticia de capitales de diferentes continentes, con un diseño cálido inspirado en tonos café cortado.

## 🎨 Metodología de estilos

Se utilizó **BEM (Block, Element, Modifier)** para organizar las clases CSS:

- **Bloques**: `.place-card`, `.detail-card`, `.header`, `.footer`
- **Elementos**: `.place-card__name`, `.place-card__temp`, `.detail-card__body`
- **Modificadores**: `.btn--primary`, `.btn--secondary`

## 🗂️ Estructura SASS
```
scss/
├── base/
│ ├── _variables.scss
│ ├── _reset.scss 
│ └── _typography.scss
├── components/
│ ├── _buttons.scss
│ └── _place-card.scss
├── layout/
│ ├── _header.scss
│ ├── _main.scss
│ └── _footer.scss
├── utilities/
│ └── _mixins.scss 
└── main.scss
```

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 / SASS
- Bootstrap 5
- JavaScript (ES6+)

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. (Opcional) Compila SASS con `sass scss/main.scss css/main.css --watch`

## 📎 Enlace al repositorio

[https://github.com/GioXdaZ/WeatherApp-M3](https://github.com/GioXdaZ/WeatherApp-M3)

---

Desarrollado con ❤️ por **GioXdaZ**