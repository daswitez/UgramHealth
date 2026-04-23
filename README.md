# 🏥 Ugram Health - App Móvil Estudiantil
_Solución Frontend Integral para el Seguro Universitario FUSUM de la UAGRM._

Esta aplicación en React Native (Expo) es la cara visible de la revolución del Seguro Social Estudiantil. Elimina las barreras burocráticas de ir a sacar "fichas de papel" y le entrega al alumno universitario un panel estético, veloz y clínico en su bolsillo.

## 📱 Funcionalidades y Flujos Críticos

Desarrollada tras intensos Sprints Ágiles, la app tiene dualidad:

1. **Flujo Paciente (Estudiante UAGRM):** 
   - Reserva de fichas dinámicas con doctores y especialidades.
   - Centro de notificaciones in-app.
   - Expediente descargable de Laboratorio (PDF).
   - "Tratamientos Activos" y un letal "Botón S.O.S Rojo" de evacuación al teléfono.
2. **Flujo Clínico (Médicos y Secretarias):**
   - Agenda hiper-veloz blindada.
   - Atajos anti-demandas médicas: Bandera roja intrusiva de "Alergias/Crónicas" obligatoria de leer.
   - Walk-in express: Búsqueda rápida por número de registro universitario.
   - Seguridad anti-cierres: Auto-Save persistente asíncrono para recetas (`AsyncStorage`).

## 🛠️ Tecnologías y Despliegue

Diseñada con pautas UI propias (`Swiss Modernism 2.0`), sin librerías invasivas.

\`\`\`bash
# 1. Instalar el ecosistema
npm install

# 2. Correr localmente (Metro Bundler)
npx expo start

# 3. Empaquetar a binarios nativos
eas build --profile preview --platform android
eas build --profile production --platform ios
\`\`\`
