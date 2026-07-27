// DATOS DE CIUDADES

const ciudades = [
    { id: 0, nombre: "Santiago", pais: "Chile", temp: 22, min: 14, max: 28, condicion: "Soleado", icono: "☀️" },
    { id: 1, nombre: "Buenos Aires", pais: "Argentina", temp: 19, min: 12, max: 24, condicion: "Nublado", icono: "☁️" },
    { id: 2, nombre: "Lima", pais: "Perú", temp: 18, min: 15, max: 22, condicion: "Lluvia", icono: "🌧️" },
    { id: 3, nombre: "Bogotá", pais: "Colombia", temp: 14, min: 8, max: 18, condicion: "Lluvia", icono: "🌧️" },
    { id: 4, nombre: "Ciudad de México", pais: "México", temp: 20, min: 12, max: 26, condicion: "Soleado", icono: "☀️" },
    { id: 5, nombre: "Madrid", pais: "España", temp: 25, min: 16, max: 32, condicion: "Despejado", icono: "☀️" },
    { id: 6, nombre: "París", pais: "Francia", temp: 18, min: 10, max: 22, condicion: "Nublado", icono: "☁️" },
    { id: 7, nombre: "Londres", pais: "Reino Unido", temp: 16, min: 9, max: 20, condicion: "Lluvia", icono: "🌧️" },
    { id: 8, nombre: "Roma", pais: "Italia", temp: 24, min: 16, max: 30, condicion: "Soleado", icono: "☀️" },
    { id: 9, nombre: "Tokio", pais: "Japón", temp: 21, min: 14, max: 27, condicion: "Despejado", icono: "☀️" }
];

// ============================================


// FUNCIONES
// Renderizar cards en el home
function renderizarCards() {
    const container = document.getElementById('cards-container');
    if (!container) return;

    ciudades.forEach(ciudad => {
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

        card.innerHTML = `
            <div class="place-card" data-id="${ciudad.id}">
                <h3 class="place-card__name">${ciudad.nombre}</h3>
                <p class="place-card__country">${ciudad.pais}</p>
                <div class="place-card__icon">${ciudad.icono}</div>
                <div class="place-card__temp">${ciudad.temp}°C</div>
                <p class="place-card__condition">${ciudad.condicion}</p>
                <div class="place-card__details">
                    <span class="place-card__min">Mín: <span>${ciudad.min}°C</span></span>
                    <span class="place-card__max">Máx: <span>${ciudad.max}°C</span></span>
                </div>
                <a href="detail.html?id=${ciudad.id}" class="btn btn--primary mt-3">Ver detalle</a>
            </div>
        `;

        container.appendChild(card);
    });
}

// Renderizar detalle de una ciudad
function renderizarDetalle() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const ciudad = ciudades.find(c => c.id === id);

    if (!ciudad) {
        document.querySelector('.main').innerHTML = `
            <div class="container text-center py-5">
                <h2>Ciudad no encontrada</h2>
                <a href="index.html" class="btn btn--primary">Volver al inicio</a>
            </div>
        `;
        return;
    }

    // Card de detalle
    const detailContainer = document.getElementById('detail-card');
    if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="detail-card">
                <div class="detail-card__header">
                    <h2>${ciudad.nombre}</h2>
                    <p class="text-muted">${ciudad.pais}</p>
                </div>
                <div class="detail-card__body text-center py-4">
                    <div class="display-1">${ciudad.icono}</div>
                    <div class="display-4 fw-bold">${ciudad.temp}°C</div>
                    <p class="fs-4">${ciudad.condicion}</p>
                    <div class="d-flex justify-content-center gap-4 mt-3">
                        <span>Mín: <strong>${ciudad.min}°C</strong></span>
                        <span>Máx: <strong>${ciudad.max}°C</strong></span>
                    </div>
                </div>
            </div>
        `;
    }

    // Pronóstico extendido (5 días, coherente con el clima actual)
    const forecastContainer = document.getElementById('forecast-container');
    if (forecastContainer) {
        const condiciones = ['Soleado', 'Nublado', 'Lluvia', 'Despejado', 'Nublado'];
        const iconos = ['☀️', '☁️', '🌧️', '☀️', '☁️'];
        const tempBase = ciudad.temp;

        for (let i = 0; i < 5; i++) {
            const dia = new Date();
            dia.setDate(dia.getDate() + i + 1);

            const variacion = Math.floor(Math.random() * 6) - 3; // -3 a +3
            const temp = tempBase + variacion;
            const condIndex = (i + ciudad.id) % condiciones.length;

            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-md-4 col-lg-2';;

            col.innerHTML = `
                <div class="forecast-card text-center p-3 border rounded">
                    <div class="fw-bold">${dia.toLocaleDateString('es-ES', { weekday: 'short' })}</div>
                    <div class="fs-2">${iconos[condIndex]}</div>
                    <div class="fw-bold">${temp}°C</div>
                    <div class="text-muted small">${condiciones[condIndex]}</div>
                </div>
            `;

            forecastContainer.appendChild(col);
        }
    }
}

// ============================================
// EJECUCIÓN SEGÚN LA SELECCIÓN

document.addEventListener('DOMContentLoaded', () => {
    const isIndex = document.getElementById('cards-container') !== null;
    const isDetail = document.getElementById('detail-card') !== null;

    if (isIndex) {
        renderizarCards();
    } else if (isDetail) {
        renderizarDetalle();
    }
});