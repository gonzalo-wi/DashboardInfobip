<template>
  <div>
    <!-- Navbar fija arriba -->
    <nav
      :class="[
        'fixed top-0 left-0 w-full z-10 flex items-center justify-between px-6 py-4 shadow transition-colors',
        modoOscuro
          ? 'bg-gray-900 border-b border-gray-700'
          : 'bg-white border-b border-gray-200'
      ]"
    >
      <span
        :class="[
          'text-2xl font-extrabold tracking-tight',
          modoOscuro ? 'text-white' : 'text-gray-800'
        ]"
      >
        📊 Dashboard de Atención
      </span>
      <button
        @click="modoOscuro = !modoOscuro"
        class="flex items-center gap-2 px-4 py-2 rounded-lg shadow font-semibold transition border"
        :class="modoOscuro
          ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700'
          : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'"
      >
        <span v-if="!modoOscuro">🌙</span>
        <span v-else>☀️</span>
        {{ modoOscuro ? 'Modo Claro' : 'Modo Oscuro' }}
      </button>
    </nav>

    <!-- Dashboard compensando el alto de la navbar -->
    <div
      :class="[
        'min-h-screen pt-24 px-4 transition-colors',
        modoOscuro
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
          : 'bg-gradient-to-br from-slate-100 to-slate-200 text-gray-800'
      ]"
    >
      <div class="max-w-7xl mx-auto">
        <!-- KPIs -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
          <div :class="kpiCardClass">
            <p :class="kpiLabelClass">Conversaciones totales</p>
            <h3 :class="['text-3xl font-extrabold', modoOscuro ? 'text-blue-400' : 'text-blue-600']">{{ totalConversaciones }}</h3>
          </div>
          <div :class="kpiCardClass">
            <p :class="kpiLabelClass">Agentes activos</p>
            <h3 :class="['text-3xl font-extrabold', modoOscuro ? 'text-emerald-400' : 'text-emerald-600']">{{ totalAgentes }}</h3>
          </div>
          <div :class="kpiCardClass">
            <p :class="kpiLabelClass">Conversaciones abiertas</p>
            <h3 :class="['text-3xl font-extrabold', modoOscuro ? 'text-rose-400' : 'text-rose-600']">{{ totalAbiertas }}</h3>
          </div>
          <div :class="kpiCardClass">
            <p :class="kpiLabelClass">Agentes demorados</p>
            <h3 :class="['text-3xl font-extrabold', modoOscuro ? 'text-orange-400' : 'text-orange-500']">{{ agentesDemorados.length }}</h3>
          </div>
          <div :class="kpiCardClass">
            <p :class="kpiLabelClass">⏱️ Tiempo promedio</p>
            <h3 :class="['text-3xl font-extrabold', modoOscuro ? 'text-indigo-400' : 'text-indigo-600']">{{ promedioRespuesta }} min</h3>
          </div>
        </div>

        <!-- Indicador de atención -->
        <div
          v-if="agentesDemoradosOrdenados.length"
          :class="[
            'px-6 py-5 rounded-xl mb-8 shadow border',
            modoOscuro
              ? 'bg-red-900/20 border-red-400 text-red-200'
              : 'bg-red-100 border-red-300 text-red-800'
          ]"
        >
          <div class="font-bold text-lg mb-2">⚠️ Atención</div>
          <p class="mb-3">Agentes con conversaciones sin respuesta hace más de 5 minutos:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <div
              v-for="a in agentesDemoradosOrdenados"
              :key="a.nombre"
              :class="[
                'flex items-center gap-3 border px-4 py-2 rounded-lg shadow',
                a.minutos > 10
                  ? (modoOscuro
                      ? 'bg-red-800/30 border-red-400 text-red-100'
                      : 'bg-red-200 border-red-500 text-red-900')
                  : (modoOscuro
                      ? 'bg-yellow-800/30 border-yellow-400 text-yellow-100'
                      : 'bg-yellow-200 border-yellow-500 text-yellow-900')
              ]"
            >
              <span
                :class="[
                  'animate-pulse w-3 h-3 rounded-full',
                  a.minutos > 10
                    ? (modoOscuro ? 'bg-red-500' : 'bg-red-600')
                    : (modoOscuro ? 'bg-yellow-400' : 'bg-yellow-400')
                ]"
              ></span>
              <div class="text-base font-semibold">{{ a.nombre }} — {{ a.minutos }} min</div>
            </div>
          </div>
        </div>

        <!-- Gráficos -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div :class="chartCardClass">
            <h2 :class="['text-xl font-semibold mb-2', modoOscuro ? 'text-blue-300' : 'text-blue-700']">Conversaciones por agente</h2>
            <span :class="chartLabelClass">Solo agentes asignados</span>
            <div class="relative h-56">
              <canvas ref="barChart"></canvas>
            </div>
          </div>
          <div :class="chartCardClass">
            <h2 :class="['text-xl font-semibold mb-2', modoOscuro ? 'text-emerald-300' : 'text-emerald-700']">Conversaciones por hora</h2>
            <span :class="chartLabelClass">Intervalos de 1 hora</span>
            <div class="relative h-56">
              <canvas ref="lineChart"></canvas>
            </div>
          </div>
          <div :class="chartCardClass">
            <h2 :class="['text-xl font-semibold mb-2', modoOscuro ? 'text-rose-300' : 'text-rose-700']">Estados de conversaciones</h2>
            <span :class="chartLabelClass">Solo agentes asignados</span>
            <div class="relative h-56 flex items-center justify-center">
              <canvas ref="doughnutChart"></canvas>
            </div>
          </div>
        </div>
      </div>
        <<footer class="mt-16 mb-4 text-center text-sm opacity-80 select-none">
  <span :class="modoOscuro ? 'text-gray-400' : 'text-gray-500'">
    Todos los derechos reservados <strong>IVESS - El Jumillano</strong>
  </span>
</footer>
    </div>
  </div>
  
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'
import { getDataConversationPorAgente } from '@/services/infobipService.js'

const modoOscuro = ref(false)

const barChart = ref(null)
const lineChart = ref(null)
const doughnutChart = ref(null)

let barInstance = null
let lineInstance = null
let doughnutInstance = null

const totalConversaciones = ref(0)
const totalAgentes = ref(0)
const totalAbiertas = ref(0)
const agentesDemorados = ref([])
const promedioRespuesta = ref(0)

const agentesDemoradosOrdenados = computed(() =>
  agentesDemorados.value.slice().sort((a, b) => a.minutos - b.minutos)
)

const kpiCardClass = computed(() =>
  modoOscuro.value
    ? 'bg-gray-800/80 backdrop-blur-sm shadow rounded-xl p-6 text-center'
    : 'bg-white/80 backdrop-blur-sm shadow rounded-xl p-6 text-center'
)
const kpiLabelClass = computed(() =>
  modoOscuro.value
    ? 'text-base text-gray-300 mb-1 font-medium'
    : 'text-base text-gray-500 mb-1 font-medium'
)
const chartCardClass = computed(() =>
  modoOscuro.value
    ? 'rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-gray-800/80'
    : 'rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-white/80'
)
const chartLabelClass = computed(() =>
  modoOscuro.value
    ? 'text-xs text-gray-400 mb-4 block'
    : 'text-xs text-gray-500 mb-4 block'
)

// Color dinámico para los textos de los gráficos
const chartTextColor = computed(() => (modoOscuro.value ? '#fff' : '#64748b'))
const chartGridColor = computed(() => (modoOscuro.value ? '#334155' : '#e5e7eb'))

async function cargarDashboard() {
  const data = await getDataConversationPorAgente()
  const filtrados = data.filter(item => item.agent)

  totalConversaciones.value = filtrados.length
  totalAgentes.value = new Set(filtrados.map(i => i.agent.displayName)).size
  totalAbiertas.value = filtrados.filter(i => i.status === 'OPEN').length

  const tiempos = filtrados
    .filter(c => c.status === 'CLOSED' && c.createdAt && c.updatedAt)
    .map(c => (new Date(c.updatedAt) - new Date(c.createdAt)) / 60000)
  promedioRespuesta.value = tiempos.length ? (tiempos.reduce((a, b) => a + b) / tiempos.length).toFixed(2) : 0

  const ahora = new Date()
  const demoras = filtrados.filter(c => {
    if (c.status !== 'OPEN' || !c.updatedAt) return false
    const ultima = new Date(c.updatedAt)
    const diffMin = (ahora - ultima) / 60000
    return diffMin > 5
  })
  agentesDemorados.value = [...new Map(demoras.map(c => [c.agent.displayName, {
    nombre: c.agent.displayName,
    minutos: ((new Date() - new Date(c.updatedAt)) / 60000).toFixed(1)
  }])).values()]

  const porAgente = {}
  filtrados.forEach(i => {
    porAgente[i.agent.displayName] = (porAgente[i.agent.displayName] || 0) + 1
  })
  const ordenados = Object.entries(porAgente).sort((a, b) => b[1] - a[1])
  const agentesOrdenados = ordenados.map(i => i[0])
  const cantidadOrdenada = ordenados.map(i => i[1])

  const porEstado = {}
  filtrados.forEach(i => porEstado[i.status] = (porEstado[i.status] || 0) + 1)

  const porHora = {}
  for (let h = 0; h < 24; h++) {
    const label = `${h.toString().padStart(2, '0')}:00`
    porHora[label] = 0
  }
  filtrados.forEach(i => {
    const f = new Date(i.createdAt)
    const hoy = new Date().toISOString().slice(0, 10)
    if (i.createdAt.startsWith(hoy)) {
      const hora = `${f.getHours().toString().padStart(2, '0')}:00`
      porHora[hora]++
    }
  })

  if (barInstance) barInstance.destroy()
  barInstance = new Chart(barChart.value, {
    type: 'bar',
    data: {
      labels: agentesOrdenados,
      datasets: [{ label: 'Conversaciones', data: cantidadOrdenada, backgroundColor: 'rgba(59, 130, 246, 0.7)', borderRadius: 8, barThickness: 32 }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: chartTextColor.value }, grid: { color: chartGridColor.value } },
        x: { ticks: { color: chartTextColor.value }, grid: { display: false } }
      }
    },
  })

  if (lineInstance) lineInstance.destroy()
  lineInstance = new Chart(lineChart.value, {
    type: 'line',
    data: {
      labels: Object.keys(porHora),
      datasets: [{ label: 'Conversaciones', data: Object.values(porHora), fill: false, borderColor: 'rgba(16, 185, 129, 1)', tension: 0.4, pointRadius: 5 }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: chartTextColor.value }, grid: { color: chartGridColor.value } },
        x: { ticks: { color: chartTextColor.value }, grid: { display: false } }
      }
    },
  })

  if (doughnutInstance) doughnutInstance.destroy()
  doughnutInstance = new Chart(doughnutChart.value, {
    type: 'doughnut',
    data: {
      labels: Object.keys(porEstado),
      datasets: [{ label: 'Estados', data: Object.values(porEstado), backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(16, 185, 129, 0.7)', 'rgba(245, 158, 11, 0.7)', 'rgba(239, 68, 68, 0.7)'], borderWidth: 2 }],
    },
    options: {
      responsive: true,
      cutout: '70%',
      plugins: {
        legend: { display: true, position: 'bottom', labels: { color: chartTextColor.value, font: { size: 13 } } },
      },
    },
  })
}

// Redibujar los gráficos cuando cambie el modo
watch(modoOscuro, () => {
  cargarDashboard()
})

onMounted(() => {
  cargarDashboard()
  setInterval(cargarDashboard, 60000)
})
</script>