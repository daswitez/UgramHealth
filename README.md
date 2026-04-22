# UAGRM Medical App

Aplicación móvil orientada a la comunidad de la Universidad Autónoma Gabriel René Moreno (UAGRM) que facilita y centraliza la atención médica a través de una experiencia fluida, rápida y moderna.

## 👥 Ámbito y Roles Principales

La aplicación maneja un modelo de **Roles**, centralizando el flujo de trabajo tanto de los pacientes como del personal de la salud.

1. **Estudiante (Paciente):** 
   - Objetivo: Resolver su atención sin fricción.
   - Funciones: Reserva rápida de fichas, chequeo de seguimiento, visualización de resultados de exámenes médicos y notificaciones.
2. **Médico:**
   - Objetivo: Realizar consultas y llevar un control ágil.
   - Funciones: Visualización de la agenda diaria en segundos, apertura y registro de fichas clínicas en un flujo claro, programación de seguimientos y remisión de exámenes.

## 💻 Tech Stack

Esta aplicación está orientada a una experiencia móvil multiplataforma rápida:
- **Framework:** [React Native](https://reactnative.dev) + [Expo](https://expo.dev) 
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org) (Para tipado fuerte, evitando errores de lógica en el frontend).
- **Navegador:** React Navigation (Usando Tab y Native Stack Navigators).
- **Gestión de estado:** Context API y hooks (o herramientas de estado cliente/servidor según escale. Ej. React Query para manejar fetch caching de las citas y médicos).

## 🎨 Principios de Diseño y UX
Basado en un enfoque **Mobile First** donde la acción principal es evidente:
- **Espacio y Limpieza:** Se prefiere el uso de amplio espacio en blanco y bordes suaves (Radius 16 a 24).
- **Tipografía:** [Inter] con fuerte jerarquía.
- **Micro Interacciones:** Evitar dependencias visuales artificiales (Glow, 3D Tilt), usando interfaces sólidas fundamentadas en el modelo *Swiss Modernism 2.0*. 
- **Colores Semánticos Principales:** 
  - Primary: Azul (`#2563EB`)
  - Accent: Teal (`#0EA5A4`)
  - Neutros: Fondos `#F8FAFC`, Superficies `#FFFFFF` y Textos en `#0F172A` o `#64748B`.

---
*Para ver el orden de prioridad en el desarrollo, consultar el archivo [`BACKLOG.md`](./BACKLOG.md). Para información técnica detallada ir a [`ARCHITECTURE_AND_STANDARDS.md`](./ARCHITECTURE_AND_STANDARDS.md).*
