# Backlog Priorizado (UAGRM App - TypeScript & Expo)

Este backlog agrupa y prioriza todo el desarrollo necesario para construir la aplicación basándose en los roles (Médico y Estudiante) presentados. Está ordenado bajo una estrategia funcional: entregar primero el sistema compartido (Autenticación), luego darle prioridad a los flujos críticos de la consulta, finalizando con el soporte post-atención (Exámenes, Avisos).

---

## 🏃 Sprint 0: Configuración y Base Arquitectónica (P0 - Bloqueante)
_Todo el desarrollo subsiguiente depende de esta fase._

- [ ] **Configuración de Expo y TS:** Inicializar poryecto `npx create-expo-app` en blanco usando TypeScript y configurar `tsconfig.json`.
- [ ] **Lints y Formatters:** Configurar ESLint y Prettier.
- [ ] **Sistema de Diseño Básico y Tema:** Definir las variables maestras de colores, fuentes (familia _Inter_) y tamaños dentro de un manejador de contexto (Theme Context/Constants).
- [ ] **Estructura de Ficheros Base:** Crear arbol de directorios (`src/components`, `src/screens`, `src/navigation`, etc).
- [ ] **Navegación Base:** Integrar React Navigation: Configurar tab navigation de estudiantes y tab navigation de médicos, más el root stack router condicional según el rol loggeado.

---

## 🏃 Sprint 1: UI Base (Shared Components) (P0)
_Se construyen los ladrillos visuales genéricos, estrictamente apegados la estética "Premium y Limpia"._

- [ ] **Text & Typography Components:** Textos con variantes `h1`, `h2`, `body`, `label`, de acuerdo a escala mobile recomendada.
- [ ] **Buttons:** Botón Principal (`#2563EB`) y Botones Secundarios (outlines). Targets táctiles mínimos de 44px.
- [ ] **Inputs y Formularios:** Inputs base de texto, clave, select/picker.
- [ ] **Badges de Estado:** Chips pequeños (Success: `#16A34A`, Warning: `#D97706`, Error: `#DC2626`, Info: `#2563EB`).
- [ ] **Tarjetas (Cards):** Card vacía (Surface base), Card Lista (agenda), y Card Resumen Elevada. 

---

## 🏃 Sprint 2: Core Funcional - Autenticación y Flujo Inicial (P1)
_Permitir a los usuarios ingresar a sus respectivos Dashboards._

- [ ] **HU-01 / HU-M01:** Pantalla Login con switch de flujo post-autenticación (correo institucional/usuario). Validaciones con TS y un manejado de errores limpio.
- [ ] **HU-02:** Dashboard del Estudiante UI (Mostrar próxima acción arriba en el primer scroll: "Próxima cita", "Exámenes").
- [ ] **HU-M02:** Dashboard del Médico UI (Mostrar atenciones de hoy de forma escaneable y rápida).

---

## 🏃 Sprint 3: Flujo Central del Médico (P1)
_Priorizando la usabilidad fluida para que el personal de salud pueda operar si demoras._

- [ ] **HU-M03:** Agenda del Día. Listado claro y escrutinable en segundos con horarios y estados.
- [ ] **HU-M04:** Detalle de la cita del paciente. Pantalla contextual básica del estudiante que se pasará a atender.
- [ ] **HU-M05:** Registro y Formulario de la Atención Médica. Dividir los inputs con claridad visual o `Steps`.

---

## 🏃 Sprint 4: Flujo Central de Reserva de Estudiantes (P1.5)
_Lograr que el estudiante busque y asegure una ficha._

- [ ] **HU-03 & HU-04:** Inicio de la Reserva de Citas. Selector de "Servicio" vs "Especialidades médicas".
- [ ] **HU-05:** Selección de Médicos. Pantalla con cruce de información (Médico, fecha y horas disponibles presentadas en Chips `Time Chips`).
- [ ] **HU-06:** Confirmación UI segura y modal/toast de cierre por éxito. Modificadores de estado a "Confirmada".
- [ ] **HU-07 & HU-08:** Gestión de reservas ("Mis reservas", Reprogramación / Cancelación). 

---

## 🏃 Sprint 5: Seguimiento y Diagnósticos (P2)
_Acciones derivadas de las consultas médicas iniciales._

- [ ] **HU-M06 & HU-M07:** (Médico) Vista para registrar de exámenes asociados a la consulta y registrar controles pendientes (Seguimientos).
- [ ] **HU-09 & HU-10:** (Estudiante) Pantalla para consultar resultados de exámenes pendientes/realizados y alertas de controles médicos recomendados.

---

## 🏃 Sprint 6: Perfil y Centro de Notificaciones (P3)
_Cierre de experiencia del usuario en la parte general._

- [ ] **HU-11 & HU-M09:** Centro de notificaciones. Bandeja para alertas "Cita Cancelada", "Resultado cargado", "Control pendiente".
- [ ] **HU-12 & HU-M10:** Perfiles. Vistas básicas de configuración, información personal, contacto técnico y sign-out.

---

## 🏃 Sprint 7: Seguridad Clínica Avanzada (P1.5)
_Mecanismos indispensables para convertir la app en un entorno médico y legal seguro._

- [ ] **HU-M11:** Alertas Médicas Inmediatas. Sistema de `Badges` prominentes en el perfil del paciente con "Alergias a Medicamentos" y "Enfermedades Crónicas".
- [ ] **HU-M12:** Prevención de Pérdida de Datos (Auto-Save). Lógica en `ConsultationFormScreen` que use almacenamiento local (AsyncStorage) para guardar borradores si la app se cierra bruscamente.
- [ ] **HU-M13:** Creación Extraordinaria de Citas. Botón rápido e "Búsqueda de Estudiante por Registro" en el Dashboard Médico para aceptar visitas no-agendadas (Walk-ins/Emergencias).

---

## 🏃 Sprint 8: Calidad de Vida (UX) y Retención (P2.5)
_Reducción de vacíos para consolidar la imagen institucional en el Estudiante._

- [ ] **HU-13:** Visualización de Recetarios. Nueva sección o menú para que el paciente vea posología y recetas emitidas (Tratamientos) con claridad para presentarlo en farmacia.
- [ ] **HU-14:** Botón S.O.S Universitario. Línea rápida de conexión telefónica interna para llamar a triaje UAGRM dentro del Dashboard Estudiantil.
- [ ] **HU-15:** Cohesión de Empty States. Diseñar layouts específicos compuestos de SVGs (Illustraciones limpias) cuando el calendario, los exámenes o las notificaciones se encuentren vacíos.
- [ ] **HU-16:** Integración Calendario. Botón de Exportación "Add to Google/iOS Calendar" post-reserva de ficha médica.
