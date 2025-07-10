<template>
  <div>
    
    <nav
      :class="[
        'fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300',
        modoOscuro
          ? 'bg-gray-900/95 border-b border-gray-700/50 shadow-xl'
          : 'bg-white/95 border-b border-gray-200/50 shadow-xl'
      ]"
    >
      <div class="w-full px-2 sm:px-4 lg:px-6 py-2">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <!-- Logo y Título -->
          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div
              :class="[
                'w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-lg',
                modoOscuro 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                  : 'bg-gradient-to-br from-blue-600 to-indigo-700'
              ]"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <span
                :class="[
                  'text-base sm:text-lg font-bold tracking-tight',
                  modoOscuro ? 'text-white' : 'text-gray-900'
                ]"
              >
                IVESS Analytics
              </span>
              <span
                :class="[
                  'text-xs font-medium hidden sm:block',
                  modoOscuro ? 'text-gray-400' : 'text-gray-500'
                ]"
              >
                Dashboard TV
              </span>
            </div>
          </div>

          <!-- Información de estado y controles compactos -->
          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <!-- Indicador de estado -->
            <div class="flex items-center gap-1 sm:gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span
                :class="[
                  'text-xs font-medium hidden md:block',
                  modoOscuro ? 'text-gray-300' : 'text-gray-600'
                ]"
              >
                En vivo
              </span>
            </div>

            <!-- Última actualización -->
            <div
              :class="[
                'text-xs px-2 py-1 rounded-lg border hidden sm:block',
                modoOscuro 
                  ? 'bg-gray-800 border-gray-600 text-gray-300' 
                  : 'bg-gray-100 border-gray-300 text-gray-600'
              ]"
            >
              {{ ultimaActualizacion }}
            </div>

            <!-- Toggle modo oscuro compacto -->
            <button
              @click="modoOscuro = !modoOscuro"
              class="relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors"
              :class="modoOscuro ? 'bg-blue-600' : 'bg-gray-300'"
            >
              <span
                class="inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform flex items-center justify-center text-xs"
                :class="modoOscuro ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'"
              >
                <span v-if="!modoOscuro" class="text-[8px] sm:text-xs">🌙</span>
                <span v-else class="text-[8px] sm:text-xs">☀️</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenido principal del dashboard -->
    <div
      :class="[
        'min-h-screen pt-14 sm:pt-16 px-1 sm:px-2 lg:px-4 transition-colors',
        modoOscuro
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
          : 'bg-gradient-to-br from-slate-100 to-slate-200 text-gray-800'
      ]"
    >
      <div class="w-full max-w-full flex flex-col">
       
        <!-- KPIs optimizados para TV y responsivos -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div
            :class="[
              'relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border-2 shadow-xl sm:shadow-2xl transition-all duration-300 hover:scale-105',
              modoOscuro
                ? 'bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80 border-blue-600/50'
                : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-50/90 border-blue-300/50'
            ]"
          >
            <!-- Decoración de fondo mejorada -->
            <div class="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-blue-500 opacity-20 transform translate-x-4 sm:translate-x-6 lg:translate-x-8 -translate-y-4 sm:-translate-y-6 lg:-translate-y-8 animate-pulse"></div>
            <div class="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-blue-400 opacity-15 transform -translate-x-3 sm:-translate-x-4 lg:-translate-x-6 translate-y-3 sm:translate-y-4 lg:translate-y-6"></div>
            
            <!-- Contenido principal -->
            <div class="relative z-10 h-full flex flex-col justify-center text-center">
              <!-- Icono más grande -->
              <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-blue-500 flex items-center justify-center shadow-xl">
                <span class="text-lg sm:text-xl lg:text-2xl text-white">💬</span>
              </div>
              
              <!-- Número principal más grande -->
              <div
                :class="[
                  'text-xl sm:text-2xl lg:text-4xl font-black mb-1 sm:mb-2 tracking-tight',
                  modoOscuro ? 'text-white' : 'text-gray-900'
                ]"
              >
                {{ totalConversaciones.toLocaleString() }}
              </div>
              
              <!-- Título más grande -->
              <h3
                :class="[
                  'text-xs sm:text-sm font-bold uppercase tracking-wide',
                  modoOscuro ? 'text-blue-300' : 'text-blue-700'
                ]"
              >
                Conversaciones
              </h3>
              
              <!-- Indicador de tendencia -->
              <div
                :class="[
                  'flex items-center justify-center gap-1 mt-1 sm:mt-2 px-2 py-1 rounded-full text-xs font-bold',
                  modoOscuro ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-700'
                ]"
              >
                <span>↗</span>
                +12%
              </div>
            </div>
          </div>

          <div
            :class="[
              'relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border-2 shadow-xl sm:shadow-2xl transition-all duration-300 hover:scale-105',
              modoOscuro
                ? 'bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-emerald-900/80 border-emerald-600/50'
                : 'bg-gradient-to-br from-emerald-50/90 via-emerald-100/80 to-emerald-50/90 border-emerald-300/50'
            ]"
          >
            <!-- Decoración de fondo mejorada -->
            <div class="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-emerald-500 opacity-20 transform translate-x-4 sm:translate-x-6 lg:translate-x-8 -translate-y-4 sm:-translate-y-6 lg:-translate-y-8 animate-pulse"></div>
            <div class="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-emerald-400 opacity-15 transform -translate-x-3 sm:-translate-x-4 lg:-translate-x-6 translate-y-3 sm:translate-y-4 lg:translate-y-6"></div>
            
            <!-- Contenido principal -->
            <div class="relative z-10 h-full flex flex-col justify-center text-center">
              <!-- Icono más grande -->
              <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-emerald-500 flex items-center justify-center shadow-xl">
                <span class="text-lg sm:text-xl lg:text-2xl text-white">👥</span>
              </div>
              
              <!-- Número principal más grande -->
              <div
                :class="[
                  'text-xl sm:text-2xl lg:text-4xl font-black mb-1 sm:mb-2 tracking-tight',
                  modoOscuro ? 'text-white' : 'text-gray-900'
                ]"
              >
                {{ totalAgentes.toLocaleString() }}
              </div>
              
              <!-- Título más grande -->
              <h3
                :class="[
                  'text-xs sm:text-sm font-bold uppercase tracking-wide',
                  modoOscuro ? 'text-emerald-300' : 'text-emerald-700'
                ]"
              >
                Agentes Activos
              </h3>
              
              <!-- Indicador de tendencia -->
              <div
                :class="[
                  'flex items-center justify-center gap-1 mt-1 sm:mt-2 px-2 py-1 rounded-full text-xs font-bold',
                  modoOscuro ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-700'
                ]"
              >
                <span>↗</span>
                +5%
              </div>
            </div>
          </div>

          <div
            :class="[
              'relative overflow-hidden rounded-2xl p-6 border-2 shadow-2xl transition-all duration-300 hover:scale-105',
              modoOscuro
                ? 'bg-gradient-to-br from-rose-900/80 via-rose-800/70 to-rose-900/80 border-rose-600/50'
                : 'bg-gradient-to-br from-rose-50/90 via-rose-100/80 to-rose-50/90 border-rose-300/50'
            ]"
          >
            <!-- Decoración de fondo mejorada -->
            <div class="absolute top-0 right-0 w-20 h-20 rounded-full bg-rose-500 opacity-20 transform translate-x-8 -translate-y-8 animate-pulse"></div>
            <div class="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-rose-400 opacity-15 transform -translate-x-6 translate-y-6"></div>
            
            <!-- Contenido principal -->
            <div class="relative z-10 h-full flex flex-col justify-center text-center">
              <!-- Icono más grande -->
              <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-rose-500 flex items-center justify-center shadow-xl">
                <span class="text-2xl text-white">📞</span>
              </div>
              
              <!-- Número principal más grande -->
              <div
                :class="[
                  'text-4xl font-black mb-2 tracking-tight',
                  modoOscuro ? 'text-white' : 'text-gray-900'
                ]"
              >
                {{ totalAbiertas.toLocaleString() }}
              </div>
              
              <!-- Título más grande -->
              <h3
                :class="[
                  'text-sm font-bold uppercase tracking-wide',
                  modoOscuro ? 'text-rose-300' : 'text-rose-700'
                ]"
              >
                Conv. Abiertas
              </h3>
              
              <!-- Indicador de tendencia -->
              <div
                :class="[
                  'flex items-center justify-center gap-1 mt-2 px-2 py-1 rounded-full text-xs font-bold',
                  modoOscuro ? 'bg-red-900/50 text-red-400' : 'bg-red-100 text-red-700'
                ]"
              >
                <span>↘</span>
                -3%
              </div>
            </div>
          </div>

          <div
            :class="[
              'relative overflow-hidden rounded-2xl p-6 border-2 shadow-2xl transition-all duration-300 hover:scale-105',
              agentesDemorados.length > 5 
                ? (modoOscuro
                    ? 'bg-gradient-to-br from-red-900/80 via-red-800/70 to-red-900/80 border-red-600/50'
                    : 'bg-gradient-to-br from-red-50/90 via-red-100/80 to-red-50/90 border-red-300/50')
                : (modoOscuro
                    ? 'bg-gradient-to-br from-orange-900/80 via-orange-800/70 to-orange-900/80 border-orange-600/50'
                    : 'bg-gradient-to-br from-orange-50/90 via-orange-100/80 to-orange-50/90 border-orange-300/50')
            ]"
          >
            <!-- Decoración de fondo mejorada -->
            <div 
              :class="[
                'absolute top-0 right-0 w-20 h-20 rounded-full opacity-20 transform translate-x-8 -translate-y-8',
                agentesDemorados.length > 5 ? 'bg-red-500 animate-pulse' : 'bg-orange-500 animate-pulse'
              ]"
            ></div>
            <div 
              :class="[
                'absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-15 transform -translate-x-6 translate-y-6',
                agentesDemorados.length > 5 ? 'bg-red-400' : 'bg-orange-400'
              ]"
            ></div>
            
            <!-- Contenido principal -->
            <div class="relative z-10 h-full flex flex-col justify-center text-center">
              <!-- Icono más grande -->
              <div 
                :class="[
                  'w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center shadow-xl',
                  agentesDemorados.length > 5 ? 'bg-red-500' : 'bg-orange-500'
                ]"
              >
                <span class="text-2xl text-white">⚠️</span>
              </div>
              
              <!-- Número principal más grande -->
              <div
                :class="[
                  'text-4xl font-black mb-2 tracking-tight',
                  modoOscuro ? 'text-white' : 'text-gray-900'
                ]"
              >
                {{ agentesDemorados.length }}
              </div>
              
              <!-- Título más grande -->
              <h3
                :class="[
                  'text-sm font-bold uppercase tracking-wide',
                  agentesDemorados.length > 5 
                    ? (modoOscuro ? 'text-red-300' : 'text-red-700')
                    : (modoOscuro ? 'text-orange-300' : 'text-orange-700')
                ]"
              >
                Agentes Demorados
              </h3>
              
              <!-- Indicador de tendencia -->
              <div
                :class="[
                  'flex items-center justify-center gap-1 mt-2 px-2 py-1 rounded-full text-xs font-bold',
                  agentesDemorados.length > 5 
                    ? (modoOscuro ? 'bg-red-900/50 text-red-400' : 'bg-red-100 text-red-700')
                    : (modoOscuro ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-100 text-yellow-700')
                ]"
              >
                <span v-if="agentesDemorados.length > 5">↗</span>
                <span v-else>→</span>
                {{ agentesDemorados.length > 0 ? 'Alto' : 'Normal' }}
              </div>
            </div>
          </div>

          <div
            :class="[
              'relative overflow-hidden rounded-2xl p-6 border-2 shadow-2xl transition-all duration-300 hover:scale-105',
              promedioRespuesta < 5 
                ? (modoOscuro
                    ? 'bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-900/80 border-green-600/50'
                    : 'bg-gradient-to-br from-green-50/90 via-green-100/80 to-green-50/90 border-green-300/50')
                : (modoOscuro
                    ? 'bg-gradient-to-br from-indigo-900/80 via-indigo-800/70 to-indigo-900/80 border-indigo-600/50'
                    : 'bg-gradient-to-br from-indigo-50/90 via-indigo-100/80 to-indigo-50/90 border-indigo-300/50')
            ]"
          >
            <!-- Decoración de fondo mejorada -->
            <div 
              :class="[
                'absolute top-0 right-0 w-20 h-20 rounded-full opacity-20 transform translate-x-8 -translate-y-8 animate-pulse',
                promedioRespuesta < 5 ? 'bg-green-500' : 'bg-indigo-500'
              ]"
            ></div>
            <div 
              :class="[
                'absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-15 transform -translate-x-6 translate-y-6',
                promedioRespuesta < 5 ? 'bg-green-400' : 'bg-indigo-400'
              ]"
            ></div>
            
            <!-- Contenido principal -->
            <div class="relative z-10 h-full flex flex-col justify-center text-center">
              <!-- Icono más grande -->
              <div 
                :class="[
                  'w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center shadow-xl',
                  promedioRespuesta < 5 ? 'bg-green-500' : 'bg-indigo-500'
                ]"
              >
                <span class="text-2xl text-white">⏱️</span>
              </div>
              
              <!-- Número principal más grande -->
              <div
                :class="[
                  'text-4xl font-black mb-2 tracking-tight',
                  modoOscuro ? 'text-white' : 'text-gray-900'
                ]"
              >
                {{ promedioRespuesta }} min
              </div>
              
              <!-- Título más grande -->
              <h3
                :class="[
                  'text-sm font-bold uppercase tracking-wide',
                  promedioRespuesta < 5 
                    ? (modoOscuro ? 'text-green-300' : 'text-green-700')
                    : (modoOscuro ? 'text-indigo-300' : 'text-indigo-700')
                ]"
              >
                Tiempo Promedio
              </h3>
              
              <!-- Indicador de tendencia -->
              <div
                :class="[
                  'flex items-center justify-center gap-1 mt-2 px-2 py-1 rounded-full text-xs font-bold',
                  promedioRespuesta < 5 
                    ? (modoOscuro ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-700')
                    : (modoOscuro ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-100 text-yellow-700')
                ]"
              >
                <span v-if="promedioRespuesta < 5">↘</span>
                <span v-else>→</span>
                {{ promedioRespuesta < 5 ? 'Excelente' : 'Normal' }}
              </div>
            </div>
          </div>
        </div>

        <!-- Módulo de Atención Profesional -->
        <div
          v-if="agentesDemoradosOrdenados.length"
          :class="[
            'relative overflow-hidden rounded-3xl p-8 mb-8 border shadow-2xl transition-all duration-300',
            modoOscuro
              ? 'bg-gradient-to-br from-red-900/30 via-orange-900/20 to-red-900/30 border-red-700/50 backdrop-blur-xl'
              : 'bg-gradient-to-br from-red-50/90 via-orange-50/80 to-red-50/90 border-red-200/50 backdrop-blur-xl'
          ]"
        >
          <!-- Decoración de fondo animada -->
          <div class="absolute top-0 right-0 w-32 h-32 rounded-full bg-red-500 opacity-5 transform translate-x-16 -translate-y-16 animate-pulse"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-orange-500 opacity-5 transform -translate-x-12 translate-y-12 animate-pulse"></div>
          
          <!-- Header del módulo -->
          <div class="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
            <div class="flex items-center gap-4">
              <!-- Icono de alerta animado -->
              <div
                :class="[
                  'w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl animate-pulse',
                  agentesDemoradosOrdenados.some(a => a.minutos > 10)
                    ? 'bg-gradient-to-br from-red-500 to-red-600'
                    : 'bg-gradient-to-br from-orange-500 to-orange-600'
                ]"
              >
                <svg class="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.08 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              
              <div>
                <h2
                  :class="[
                    'text-2xl font-bold mb-1',
                    agentesDemoradosOrdenados.some(a => a.minutos > 10)
                      ? (modoOscuro ? 'text-red-400' : 'text-red-700')
                      : (modoOscuro ? 'text-orange-400' : 'text-orange-700')
                  ]"
                >
                  🚨 Alerta de Atención
                </h2>
                <p :class="['text-lg font-medium', modoOscuro ? 'text-gray-300' : 'text-gray-700']">
                  Agentes con conversaciones sin respuesta hace más de 5 minutos
                </p>
                <p :class="['text-sm mt-1', modoOscuro ? 'text-gray-400' : 'text-gray-600']">
                  {{ agentesDemoradosOrdenados.length }} agente{{ agentesDemoradosOrdenados.length !== 1 ? 's' : '' }} necesita{{ agentesDemoradosOrdenados.length === 1 ? '' : 'n' }} atención inmediata
                </p>
              </div>
            </div>
            
            <!-- Indicadores de severidad -->
            <div class="flex flex-col sm:flex-row gap-3">
              <!-- Contador crítico -->
              <div
                v-if="agentesDemoradosOrdenados.filter(a => a.minutos > 10).length > 0"
                :class="[
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border-2',
                  modoOscuro 
                    ? 'bg-red-900/50 text-red-400 border-red-700/50' 
                    : 'bg-red-100 text-red-800 border-red-300'
                ]"
              >
                <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                CRÍTICO: {{ agentesDemoradosOrdenados.filter(a => a.minutos > 10).length }}
              </div>
              
              <!-- Contador advertencia -->
              <div
                v-if="agentesDemoradosOrdenados.filter(a => a.minutos <= 10).length > 0"
                :class="[
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border-2',
                  modoOscuro 
                    ? 'bg-orange-900/50 text-orange-400 border-orange-700/50' 
                    : 'bg-orange-100 text-orange-800 border-orange-300'
                ]"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.08 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
                ADVERTENCIA: {{ agentesDemoradosOrdenados.filter(a => a.minutos <= 10).length }}
              </div>
            </div>
          </div>
          
          <!-- Lista de agentes demorados mejorada -->
          <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <div
              v-for="(agente, index) in agentesDemoradosOrdenados"
              :key="agente.nombre"
              :class="[
                'relative overflow-hidden group rounded-2xl p-5 border-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105',
                agente.minutos > 15
                  ? (modoOscuro
                      ? 'bg-gradient-to-br from-red-800/40 to-red-900/40 border-red-600/50 hover:border-red-500'
                      : 'bg-gradient-to-br from-red-100 to-red-200 border-red-400 hover:border-red-500')
                  : agente.minutos > 10
                  ? (modoOscuro
                      ? 'bg-gradient-to-br from-orange-800/40 to-red-800/40 border-orange-600/50 hover:border-orange-500'
                      : 'bg-gradient-to-br from-orange-100 to-red-100 border-orange-400 hover:border-orange-500')
                  : (modoOscuro
                      ? 'bg-gradient-to-br from-yellow-800/40 to-orange-800/40 border-yellow-600/50 hover:border-yellow-500'
                      : 'bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-400 hover:border-yellow-500')
              ]"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <!-- Decoración de fondo de la card -->
              <div
                :class="[
                  'absolute top-0 right-0 w-16 h-16 rounded-full opacity-10 transform translate-x-6 -translate-y-6',
                  agente.minutos > 10 ? 'bg-red-500' : 'bg-orange-500'
                ]"
              ></div>
              
              <!-- Contenido de la card -->
              <div class="relative z-10">
                <!-- Header de la card -->
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <!-- Indicador de estado pulsante -->
                    <div
                      :class="[
                        'w-4 h-4 rounded-full animate-pulse shadow-lg',
                        agente.minutos > 15
                          ? 'bg-red-600 shadow-red-500/50'
                          : agente.minutos > 10
                          ? 'bg-orange-500 shadow-orange-500/50'
                          : 'bg-yellow-500 shadow-yellow-500/50'
                      ]"
                    ></div>
                    
                    <!-- Avatar del agente -->
                    <div
                      :class="[
                        'w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg',
                        agente.minutos > 10
                          ? 'bg-gradient-to-br from-red-500 to-red-600'
                          : 'bg-gradient-to-br from-orange-500 to-orange-600'
                      ]"
                    >
                      {{ agente.nombre.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                  
                  <!-- Tiempo transcurrido -->
                  <div
                    :class="[
                      'px-3 py-1 rounded-lg text-xs font-bold border',
                      agente.minutos > 15
                        ? (modoOscuro ? 'bg-red-900/60 text-red-300 border-red-700' : 'bg-red-200 text-red-800 border-red-400')
                        : agente.minutos > 10
                        ? (modoOscuro ? 'bg-orange-900/60 text-orange-300 border-orange-700' : 'bg-orange-200 text-orange-800 border-orange-400')
                        : (modoOscuro ? 'bg-yellow-900/60 text-yellow-300 border-yellow-700' : 'bg-yellow-200 text-yellow-800 border-yellow-400')
                    ]"
                  >
                    {{ agente.minutos }} min
                  </div>
                </div>
                
                <!-- Información del agente -->
                <div>
                  <h3
                    :class="[
                      'font-bold text-lg mb-1 truncate',
                      modoOscuro ? 'text-white' : 'text-gray-900'
                    ]"
                  >
                    {{ agente.nombre }}
                  </h3>
                  
                  <!-- Descripción del problema -->
                  <p
                    :class="[
                      'text-sm mb-2',
                      modoOscuro ? 'text-gray-300' : 'text-gray-700'
                    ]"
                  >
                    {{ agente.minutos > 15 ? '🚨 Atención crítica requerida' : 
                       agente.minutos > 10 ? '⚠️ Respuesta urgente necesaria' : 
                       '⏰ Requiere seguimiento pronto' }}
                  </p>
                  
                  <!-- Barra de progreso de urgencia -->
                  <div
                    :class="[
                      'w-full h-2 rounded-full overflow-hidden',
                      modoOscuro ? 'bg-gray-700' : 'bg-gray-300'
                    ]"
                  >
                    <div
                      :class="[
                        'h-full transition-all duration-1000 rounded-full',
                        agente.minutos > 15
                          ? 'bg-gradient-to-r from-red-500 to-red-600'
                          : agente.minutos > 10
                          ? 'bg-gradient-to-r from-orange-500 to-red-500'
                          : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                      ]"
                      :style="{ width: `${Math.min((agente.minutos / 20) * 100, 100)}%` }"
                    ></div>
                  </div>
                  
                  <!-- Etiqueta de urgencia -->
                  <div class="flex justify-between items-center mt-2">
                    <span
                      :class="[
                        'text-xs font-medium',
                        modoOscuro ? 'text-gray-400' : 'text-gray-600'
                      ]"
                    >
                      Urgencia:
                    </span>
                    <span
                      :class="[
                        'text-xs font-bold',
                        agente.minutos > 15
                          ? (modoOscuro ? 'text-red-400' : 'text-red-700')
                          : agente.minutos > 10
                          ? (modoOscuro ? 'text-orange-400' : 'text-orange-700')
                          : (modoOscuro ? 'text-yellow-400' : 'text-yellow-700')
                      ]"
                    >
                      {{ agente.minutos > 15 ? 'CRÍTICA' : 
                         agente.minutos > 10 ? 'ALTA' : 'MEDIA' }}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Efecto hover -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          </div>
          
          <!-- Footer del módulo con acciones -->
          <div :class="['mt-6 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4', modoOscuro ? 'border-gray-600' : 'border-gray-300']">
            <div class="flex items-center gap-4 text-sm">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <span :class="modoOscuro ? 'text-gray-300' : 'text-gray-700'">Crítico (>15 min)</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-orange-500"></div>
                <span :class="modoOscuro ? 'text-gray-300' : 'text-gray-700'">Alto (>10 min)</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span :class="modoOscuro ? 'text-gray-300' : 'text-gray-700'">Medio (>5 min)</span>
              </div>
            </div>
            
            <!-- Botón de acción (simulado) -->
            
          </div>
        </div>

        
        <!-- Gráficos profesionales mejorados -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <!-- Gráfico de barras mejorado -->
          <div
            :class="[
              'relative overflow-hidden rounded-3xl p-8 border shadow-2xl transition-all duration-300 hover:shadow-3xl',
              modoOscuro
                ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 backdrop-blur-xl'
                : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/50 backdrop-blur-xl'
            ]"
          >
            <!-- Header del gráfico -->
            <div class="flex items-center justify-between mb-6">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <h2 :class="['text-xl font-bold', modoOscuro ? 'text-white' : 'text-gray-900']">
                    Rendimiento por Agente
                  </h2>
                </div>
                <p :class="['text-sm', modoOscuro ? 'text-gray-400' : 'text-gray-600']">
                  Conversaciones asignadas por agente
                </p>
              </div>
              
              <!-- Indicador de mejora -->
              <div
                :class="[
                  'flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium',
                  modoOscuro 
                    ? 'bg-blue-900/30 text-blue-400 border border-blue-800/50' 
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                ]"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                +{{ totalConversaciones > 0 ? Math.round((totalConversaciones / totalAgentes) * 100) / 100 : 0 }} avg
              </div>
            </div>
            
            <div class="relative h-72">
              <canvas ref="barChart"></canvas>
            </div>
            
            <!-- Footer del gráfico -->
            <div :class="['mt-4 pt-4 border-t', modoOscuro ? 'border-gray-700' : 'border-gray-200']">
              <div class="flex justify-between text-sm">
                <span :class="modoOscuro ? 'text-gray-400' : 'text-gray-600'">
                  Total agentes: {{ totalAgentes }}
                </span>
                <span :class="modoOscuro ? 'text-gray-400' : 'text-gray-600'">
                  Promedio: {{ totalConversaciones > 0 ? Math.round(totalConversaciones / totalAgentes) : 0 }}
                </span>
              </div>
            </div>
          </div>

          <!-- Gráfico de línea mejorado -->
          <div
            :class="[
              'relative overflow-hidden rounded-3xl p-8 border shadow-2xl transition-all duration-300 hover:shadow-3xl',
              modoOscuro
                ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 backdrop-blur-xl'
                : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/50 backdrop-blur-xl'
            ]"
          >
            <!-- Header del gráfico -->
            <div class="flex items-center justify-between mb-6">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <h2 :class="['text-xl font-bold', modoOscuro ? 'text-white' : 'text-gray-900']">
                    Actividad por Hora
                  </h2>
                </div>
                <p :class="['text-sm', modoOscuro ? 'text-gray-400' : 'text-gray-600']">
                  Distribución de conversaciones en 24h
                </p>
              </div>
              
              <!-- Indicador de pico -->
              <div
                :class="[
                  'flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium',
                  modoOscuro 
                    ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-800/50' 
                    : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                ]"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
                </svg>
                Pico activo
              </div>
            </div>
            
            <div class="relative h-72">
              <canvas ref="lineChart"></canvas>
            </div>
            
            <!-- Footer del gráfico -->
            <div :class="['mt-4 pt-4 border-t', modoOscuro ? 'border-gray-700' : 'border-gray-200']">
              <div class="flex justify-between text-sm">
                <span :class="modoOscuro ? 'text-gray-400' : 'text-gray-600'">
                  Hoy: {{ new Date().toLocaleDateString('es-ES') }}
                </span>
                <span :class="modoOscuro ? 'text-gray-400' : 'text-gray-600'">
                  Horario laboral: 08:00 - 18:00
                </span>
              </div>
            </div>
          </div>

          <!-- Gráfico de donut mejorado -->
          <div
            :class="[
              'relative overflow-hidden rounded-3xl p-8 border shadow-2xl transition-all duration-300 hover:shadow-3xl',
              modoOscuro
                ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 backdrop-blur-xl'
                : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/50 backdrop-blur-xl'
            ]"
          >
            <!-- Header del gráfico -->
            <div class="flex items-center justify-between mb-6">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                  </div>
                  <h2 :class="['text-xl font-bold', modoOscuro ? 'text-white' : 'text-gray-900']">
                    Estados de Conversación
                  </h2>
                </div>
                <p :class="['text-sm', modoOscuro ? 'text-gray-400' : 'text-gray-600']">
                  Distribución por estado actual
                </p>
              </div>
              
              <!-- Indicador de eficiencia -->
              <div
                :class="[
                  'flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium',
                  totalAbiertas / totalConversaciones < 0.3
                    ? (modoOscuro ? 'bg-green-900/30 text-green-400 border border-green-800/50' : 'bg-green-100 text-green-700 border border-green-200')
                    : (modoOscuro ? 'bg-orange-900/30 text-orange-400 border border-orange-800/50' : 'bg-orange-100 text-orange-700 border border-orange-200')
                ]"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ totalAbiertas / totalConversaciones < 0.3 ? 'Eficiente' : 'Revisar' }}
              </div>
            </div>
            
            <div class="relative h-72 flex items-center justify-center">
              <canvas ref="doughnutChart"></canvas>
            </div>
            
            <!-- Footer del gráfico -->
            <div :class="['mt-4 pt-4 border-t', modoOscuro ? 'border-gray-700' : 'border-gray-200']">
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="text-center">
                  <div :class="['font-bold text-lg', modoOscuro ? 'text-green-400' : 'text-green-600']">
                    {{ Math.round((1 - totalAbiertas / totalConversaciones) * 100) }}%
                  </div>
                  <div :class="modoOscuro ? 'text-gray-400' : 'text-gray-600'">
                    Resueltas
                  </div>
                </div>
                <div class="text-center">
                  <div :class="['font-bold text-lg', modoOscuro ? 'text-orange-400' : 'text-orange-600']">
                    {{ Math.round((totalAbiertas / totalConversaciones) * 100) }}%
                  </div>
                  <div :class="modoOscuro ? 'text-gray-400' : 'text-gray-600'">
                    Pendientes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <footer class="mt-16 text-center text-sm opacity-80 select-none">
  <span :class="modoOscuro ? 'text-gray-400' : 'text-gray-500'">
    Todos los derechos reservados <strong>IVESS El Jumillano</strong>
  </span>
</footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { getDataConversationPorAgente,getDataConversationTotalCLosed } from '@/services/infobipService.js'

Chart.register(ChartDataLabels)

const modoOscuro = ref(false)
const ultimaActualizacion = ref('')

// Función para actualizar la hora
const actualizarHora = () => {
  const ahora = new Date();
  ultimaActualizacion.value = `${ahora.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })}`;
}

const barChart = ref(null)
const lineChart = ref(null)
const doughnutChart = ref(null)

let barInstance = null
let lineInstance = null
let doughnutInstance = null

const cerradasValidas = ref(0)
const totalConversaciones = ref(0)
const totalAgentes = ref(0)
const totalAbiertas = ref(0)
const agentesDemorados = ref([])
const promedioRespuesta = ref(0)
const porEstado = ref({})

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


const chartTextColor = computed(() => (modoOscuro.value ? '#fff' : '#64748b'))
const chartGridColor = computed(() => (modoOscuro.value ? '#334155' : '#e5e7eb'))


// Plugin mejorado para texto central
const centerText = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width, height, ctx } = chart;
    ctx.restore();
    
    const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
    
    // Texto principal
    const fontSize = Math.min(height / 180, 16);
    ctx.font = `bold ${fontSize * 1.8}px Inter, sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    
    const mainText = total.toLocaleString();
    const mainTextX = width / 2;
    const mainTextY = height / 2 - 8;
    
    ctx.fillStyle = chartTextColor.value;
    ctx.fillText(mainText, mainTextX, mainTextY);
    
    // Texto secundario
    ctx.font = `500 ${fontSize}px Inter, sans-serif`;
    const subText = 'Total';
    const subTextY = height / 2 + fontSize + 4;
    
    ctx.fillStyle = modoOscuro.value ? '#9ca3af' : '#6b7280';
    ctx.fillText(subText, mainTextX, subTextY);
    
    ctx.save();
  }
}

// Calcula todos los tiempos de respuesta de una conversación (en minutos)
function calcularTiemposRespuestaConversacion(messages, ahora = new Date()) {
  const tiempos = [];
  let ultimoInbound = null;
  messages
    .slice()
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .forEach(msg => {
      if (msg.direction === 'INBOUND') {
        ultimoInbound = new Date(msg.createdAt);
      } else if (msg.direction === 'OUTBOUND' && ultimoInbound) {
        const respuesta = new Date(msg.createdAt);
        const minutos = (respuesta - ultimoInbound) / 60000;
        tiempos.push(minutos);
        ultimoInbound = null;
      }
    });
  if (ultimoInbound) {
    const minutos = (ahora - ultimoInbound) / 60000;
    tiempos.push(minutos);
  }
  return tiempos;
}

async function cargarDashboard() {
  actualizarHora();
  const data = await getDataConversationPorAgente();
  const dataCerradas = await getDataConversationTotalCLosed();
  const filtrados = data.filter(item => item.agent);

  cerradasValidas.value = dataCerradas.filter(c => c.agent).length;
  totalConversaciones.value = filtrados.length + cerradasValidas.value;
  totalAgentes.value = new Set(filtrados.map(i => i.agent.displayName)).size;
  totalAbiertas.value = filtrados.filter(i => i.status === 'OPEN').length;

  // --- Cálculo de tiempos de respuesta por agente y global ---
  const tiemposPorAgente = {};
  const ahora = new Date();

  filtrados.forEach(c => {
    if (!c.agent || !c.messages?.length) return;
    const tiempos = calcularTiemposRespuestaConversacion(c.messages, ahora);
    if (!tiemposPorAgente[c.agent.displayName]) tiemposPorAgente[c.agent.displayName] = [];
    tiemposPorAgente[c.agent.displayName].push(...tiempos);
  });

  // Promedio global
  const todosLosTiempos = Object.values(tiemposPorAgente).flat();
  promedioRespuesta.value = todosLosTiempos.length
    ? (todosLosTiempos.reduce((a, b) => a + b, 0) / todosLosTiempos.length).toFixed(2)
    : 0;

  // --- Agentes demorados ---
  const demoras = filtrados.filter(c => {
    if (c.status !== 'OPEN' || !c.messages?.length) return false;
    const mensajes = c.messages;
    const inbound = mensajes.filter(m => m.direction === 'INBOUND');
    const outbound = mensajes.filter(m => m.direction === 'OUTBOUND');
    if (!inbound.length) return false;
    const ultimoInbound = new Date(inbound[inbound.length - 1].createdAt);
    const respuesta = outbound.find(m => new Date(m.createdAt) > ultimoInbound);
    const respuestaTime = respuesta ? new Date(respuesta.createdAt) : ahora;
    const diffMin = (respuestaTime - ultimoInbound) / 60000;
    return diffMin > 5;
  });
  agentesDemorados.value = [...new Map(demoras.map(c => {
    const inbound = c.messages.filter(m => m.direction === 'INBOUND');
    const ultimoInbound = new Date(inbound[inbound.length - 1].createdAt);
    const diff = (ahora - ultimoInbound) / 60000;
    return [c.agent.displayName, {
      nombre: c.agent.displayName,
      minutos: diff.toFixed(1)
    }];
  })).values()];

  // --- Gráficos y métricas ---
  const porAgente = {};
  filtrados.forEach(i => {
    porAgente[i.agent.displayName] = (porAgente[i.agent.displayName] || 0) + 1;
  });
  const ordenados = Object.entries(porAgente).sort((a, b) => b[1] - a[1]);
  const agentesOrdenados = ordenados.map(i => i[0]);
  const cantidadOrdenada = ordenados.map(i => i[1]);

  // Estados de conversaciones (usando los totales ya calculados)
  porEstado.value = {
    OPEN: totalAbiertas.value,
    CLOSED: cerradasValidas.value
  };

  const porHora = {};
  for (let h = 0; h < 24; h++) {
    const label = `${h.toString().padStart(2, '0')}:00`;
    porHora[label] = 0;
  }
  filtrados.forEach(i => {
    const f = new Date(i.createdAt);
    const hoy = new Date().toISOString().slice(0, 10);
    if (i.createdAt.startsWith(hoy)) {
      const hora = `${f.getHours().toString().padStart(2, '0')}:00`;
      porHora[hora]++;
    }
  });

  // Configuración de gráficos mejorada
  if (barInstance) barInstance.destroy();
  barInstance = new Chart(barChart.value, {
    type: 'bar',
    data: {
      labels: agentesOrdenados,
      datasets: [{
        label: 'Conversaciones',
        data: cantidadOrdenada,
        backgroundColor: agentesOrdenados.map((_, index) => {
          const colors = [
            'rgba(59, 130, 246, 0.8)',   // Azul
            'rgba(16, 185, 129, 0.8)',   // Verde
            'rgba(245, 158, 11, 0.8)',   // Amarillo
            'rgba(239, 68, 68, 0.8)',    // Rojo
            'rgba(139, 92, 246, 0.8)',   // Púrpura
            'rgba(236, 72, 153, 0.8)',   // Rosa
            'rgba(34, 197, 94, 0.8)',    // Esmeralda
            'rgba(249, 115, 22, 0.8)'    // Naranja
          ];
          return colors[index % colors.length];
        }),
        borderColor: agentesOrdenados.map((_, index) => {
          const colors = [
            'rgba(59, 130, 246, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(239, 68, 68, 1)',
            'rgba(139, 92, 246, 1)',
            'rgba(236, 72, 153, 1)',
            'rgba(34, 197, 94, 1)',
            'rgba(249, 115, 22, 1)'
          ];
          return colors[index % colors.length];
        }),
        borderWidth: 2,
        borderRadius: 12,
        borderSkipped: false,
        barThickness: 'flex',
        maxBarThickness: 40,
        hoverBackgroundColor: agentesOrdenados.map((_, index) => {
          const colors = [
            'rgba(59, 130, 246, 0.9)',
            'rgba(16, 185, 129, 0.9)',
            'rgba(245, 158, 11, 0.9)',
            'rgba(239, 68, 68, 0.9)',
            'rgba(139, 92, 246, 0.9)',
            'rgba(236, 72, 153, 0.9)',
            'rgba(34, 197, 94, 0.9)',
            'rgba(249, 115, 22, 0.9)'
          ];
          return colors[index % colors.length];
        }),
        hoverBorderWidth: 3
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: modoOscuro.value ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          titleColor: modoOscuro.value ? '#fff' : '#374151',
          bodyColor: modoOscuro.value ? '#d1d5db' : '#6b7280',
          borderColor: modoOscuro.value ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          cornerRadius: 12,
          displayColors: true,
          titleFont: { size: 14, weight: 'bold' },
          bodyFont: { size: 13 },
          padding: 12,
          callbacks: {
            title: (context) => `Agente: ${context[0].label}`,
            label: (context) => `💬 ${context.parsed.y} conversaciones`,
            afterLabel: (context) => {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed.y / total) * 100).toFixed(1);
              return `📊 ${percentage}% del total`;
            }
          }
        },
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'start',
          offset: 4,
          font: {
            weight: 'bold',
            size: 14,
          },
          formatter: (value) => value,
          backgroundColor: (context) => {
            return context.dataset.borderColor[context.dataIndex];
          },
          borderColor: '#fff',
          borderWidth: 2,
          borderRadius: 6,
          padding: 6
        },
      },
      scales: {
        y: { 
          beginAtZero: true,
          ticks: { 
            color: chartTextColor.value,
            font: { size: 12 },
            padding: 8
          }, 
          grid: { 
            color: chartGridColor.value,
            drawBorder: false,
            lineWidth: 1
          },
          border: {
            display: false
          }
        },
        x: { 
          ticks: { 
            color: chartTextColor.value,
            font: { size: 11 },
            maxRotation: 45,
            minRotation: 0
          }, 
          grid: { 
            display: false 
          },
          border: {
            display: false
          }
        }
      }
    },
    plugins: [ChartDataLabels]
  });

  if (lineInstance) lineInstance.destroy();
  lineInstance = new Chart(lineChart.value, {
    type: 'line',
    data: {
      labels: Object.keys(porHora),
      datasets: [{
        label: 'Conversaciones',
        data: Object.values(porHora),
        fill: true,
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgba(16, 185, 129, 1)',
        pointBorderWidth: 3,
        pointHoverBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3,
        shadowColor: 'rgba(16, 185, 129, 0.3)',
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 4
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      animation: {
        duration: 1200,
        easing: 'easeOutQuart'
      },
      plugins: { 
        legend: { display: false },
        tooltip: {
          backgroundColor: modoOscuro.value ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          titleColor: modoOscuro.value ? '#fff' : '#374151',
          bodyColor: modoOscuro.value ? '#d1d5db' : '#6b7280',
          borderColor: modoOscuro.value ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          cornerRadius: 12,
          displayColors: true,
          titleFont: { size: 14, weight: 'bold' },
          bodyFont: { size: 13 },
          padding: 12,
          callbacks: {
            title: (context) => `🕐 ${context[0].label}`,
            label: (context) => `💬 ${context.parsed.y} conversaciones`,
            afterLabel: (context) => {
              const hora = parseInt(context.label.split(':')[0]);
              let periodo = '';
              if (hora >= 9 && hora <= 12) periodo = '🌅 Mañana';
              else if (hora >= 13 && hora <= 17) periodo = '☀️ Tarde';
              else if (hora >= 18 && hora <= 21) periodo = '🌇 Noche';
              else periodo = '🌙 Madrugada';
              return periodo;
            }
          }
        }
      },
      scales: {
        y: { 
          beginAtZero: true,
          ticks: { 
            color: chartTextColor.value,
            font: { size: 12 },
            padding: 8
          }, 
          grid: { 
            color: chartGridColor.value,
            drawBorder: false,
            lineWidth: 1
          },
          border: {
            display: false
          }
        },
        x: { 
          ticks: { 
            color: chartTextColor.value,
            font: { size: 11 },
            maxRotation: 45,
            callback: function(value, index) {
              // Mostrar solo cada 2 horas para mejor legibilidad
              const hour = parseInt(this.getLabelForValue(value).split(':')[0]);
              return hour % 2 === 0 ? this.getLabelForValue(value) : '';
            }
          }, 
          grid: { 
            display: false 
          },
          border: {
            display: false
          }
        }
      }
    },
  });

  if (doughnutInstance) doughnutInstance.destroy();
  doughnutInstance = new Chart(doughnutChart.value, {
    type: 'doughnut',
    data: {
      labels: Object.keys(porEstado.value),
      datasets: [{
        label: 'Estados',
        data: Object.values(porEstado.value),
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',    // Verde para CLOSED
          'rgba(59, 130, 246, 0.8)',   // Azul para OPEN
          'rgba(245, 158, 11, 0.8)',   // Amarillo para PENDING
          'rgba(239, 68, 68, 0.8)',    // Rojo para otros
          'rgba(139, 92, 246, 0.8)',   // Púrpura
          'rgba(236, 72, 153, 0.8)'    // Rosa
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(236, 72, 153, 1)'
        ],
        borderWidth: 3,
        hoverBackgroundColor: [
          'rgba(34, 197, 94, 0.9)',
          'rgba(59, 130, 246, 0.9)',
          'rgba(245, 158, 11, 0.9)',
          'rgba(239, 68, 68, 0.9)',
          'rgba(139, 92, 246, 0.9)',
          'rgba(236, 72, 153, 0.9)'
        ],
        hoverBorderWidth: 4,
        hoverOffset: 8
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      interaction: {
        intersect: false,
      },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 1500,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: chartTextColor.value,
            font: { 
              size: 13,
              weight: 'bold'
            },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle',
            generateLabels: function(chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map((label, i) => {
                  const dataset = data.datasets[0];
                  const value = dataset.data[i];
                  const total = dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((value / total) * 100).toFixed(1);
                  // Emojis para cada estado
                  const emojis = {
                    'OPEN': '-',
                    'CLOSED': '-', 
                    'PENDING': '⏳',
                    'ASSIGNED': '👤',
                    'UNASSIGNED': '❓'
                  };
                  return {
                    text: `${emojis[label] || '📊'} ${label}: ${value} (${percentage}%)`,
                    fillStyle: dataset.backgroundColor[i],
                    strokeStyle: dataset.borderColor[i],
                    lineWidth: dataset.borderWidth,
                    hidden: false,
                    index: i
                  };
                });
              }
              return [];
            }
          },
        },
        tooltip: {
          backgroundColor: modoOscuro.value ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          titleColor: modoOscuro.value ? '#fff' : '#374151',
          bodyColor: modoOscuro.value ? '#d1d5db' : '#6b7280',
          borderColor: modoOscuro.value ? '#374151' : '#e5e7eb',
          borderWidth: 1,
          cornerRadius: 12,
          displayColors: true,
          titleFont: { size: 14, weight: 'bold' },
          bodyFont: { size: 13 },
          padding: 12,
          callbacks: {
            title: (context) => `Estado: ${context[0].label}`,
            label: (context) => {
              const value = context.parsed;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `📊 ${value} conversaciones (${percentage}%)`;
            },
            afterLabel: (context) => {
              const label = context.label;
              const descriptions = {
                'OPEN': '🔄 Conversaciones activas',
                'CLOSED': '✅ Conversaciones resueltas',
                'PENDING': '⏳ En espera de respuesta',
                'ASSIGNED': '👤 Asignadas a agente',
                'UNASSIGNED': '❓ Sin asignar'
              };
              return descriptions[label] || '📝 Estado de conversación';
            }
          }
        },
        datalabels: {
          color: '#fff',
          font: {
            weight: 'bold',
            size: 14,
          },
          formatter: (value, context) => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(0);
            return percentage > 5 ? `${percentage}%` : '';
          },
          backgroundColor: (context) => {
            return context.dataset.borderColor[context.dataIndex];
          },
          borderColor: '#fff',
          borderWidth: 2,
          borderRadius: 6,
          padding: 4
        },
      },
    },
    plugins: [ChartDataLabels, centerText]
  });
}


watch(modoOscuro, () => {
  cargarDashboard()
})

onMounted(() => {
  actualizarHora()
  cargarDashboard()
  setInterval(cargarDashboard, 60000)
})
</script>