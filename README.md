# 📊 Infobip Atención Dashboard

Este proyecto es un panel de control interactivo desarrollado en **Vue 3 + Tailwind CSS + Chart.js** que consume métricas de atención de la API de **Infobip** y las presenta en tiempo real para facilitar la supervisión del equipo de agentes.

## 🚀 Funcionalidades

- Indicadores clave de rendimiento (KPIs):
  - Total de conversaciones
  - Agentes únicos
  - Conversaciones abiertas
  - Agentes demorados (>5 min)
  - Tiempo promedio de respuesta
- Gráficos dinámicos:
  - Conversaciones por agente (ordenado de mayor a menor)
  - Conversaciones por hora (actualizadas en vivo)
  - Estados de conversaciones (dona)
- Alerta visual de agentes con demoras, con codificación de colores:
  - Amarillo: demora entre 5 y 10 minutos
  - Rojo: demora superior a 10 minutos
- Autoactualización del panel cada 60 segundos

## 🛠️ Tecnologías utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [Axios](https://axios-http.com/)

## ⚙️ Instalación
