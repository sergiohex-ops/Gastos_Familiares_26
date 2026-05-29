
# Gastos Familiares 26 — Vercel

## 1. Apps Script

En tu Code.gs debes tener una función `doPost(e)` que reciba acciones.
Pega el bloque que ChatGPT te indicó.

## 2. Vercel

Variable de entorno requerida:

GAS_WEBAPP_URL=https://script.google.com/macros/s/AKfycbxzcGxB40iS2BgMfCIjvRrruW9QnVve64cQc_ChV6dufikc-wevKELjaNAr0ZA7DOsy1A/exec

## 3. Deploy

Sube esta carpeta a Vercel como proyecto.


## Actualización automática

Esta versión refresca datos cada 30 segundos y sincroniza dashboards al abrir la pestaña Gráficos.


## Animaciones y gráficos

Incluye animaciones suaves, dona interactiva por categoría y barras interactivas por tarjeta.


## Face ID / Passkeys

Esta versión agrega una pantalla de bloqueo local con Passkeys/WebAuthn. La credencial se guarda en el dispositivo del usuario. No es autenticación bancaria de servidor; es protección local para la PWA.


## Guardado instantáneo

Esta versión usa optimistic UI: bloquea doble click, muestra el gasto al instante y guarda en Sheet en segundo plano.
