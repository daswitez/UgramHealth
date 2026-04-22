# App móvil Expo Go · Flujo y estética · Rol Médico

## 1. Idea del producto para el rol médico

Aplicación móvil para personal médico de la UAGRM orientada a la atención del día, la revisión de agenda, la apertura de consultas, el registro de atenciones, el registro de exámenes y el seguimiento posterior. La app debe priorizar velocidad, claridad y estructura. Aquí el objetivo no es explorar, sino trabajar con fluidez.

Debe sentirse como una herramienta profesional, pero no pesada.

La lógica central del producto para este rol es:

- ver a quién atiendo ahora
- abrir la ficha correcta
- registrar la atención rápido
- dejar examen o seguimiento cuando haga falta
- cerrar el caso sin perder el hilo

---

## 2. Objetivo UX del rol médico

El médico debe sentir estas tres cosas:

1. **Mi agenda está clara**
2. **Puedo registrar sin perder tiempo**
3. **La información importante está ordenada**

La app debe ser más densa que la del estudiante, pero igual de limpia. No debe abrumar. Debe condensar información con jerarquía.

---

## 3. Estética visual del rol médico

## 3.1 Sensación general

La estética debe sentirse:

- profesional
- rápida
- limpia
- precisa
- estable
- sobria

No debe parecer:

- sistema hospitalario viejo
- dashboard saturado
- formulario interminable
- interfaz fría o burocrática

## 3.2 Diferencia visual con estudiante

La app médica comparte el mismo sistema visual base, pero cambia en énfasis:

- más información útil por pantalla
- menos bloques promocionales o explicativos
- más listas, estados, agenda y formularios
- acciones rápidas más visibles

## 3.3 Sistema visual compartido

### Colores
- Background: `#F8FAFC`
- Surface: `#FFFFFF`
- Border: `#E2E8F0`
- Texto principal: `#0F172A`
- Texto secundario: `#64748B`
- Primario: `#2563EB`
- Acento: `#0EA5A4`

### Semánticos
- Success: `#16A34A`
- Warning: `#D97706`
- Error: `#DC2626`

### Tipografía
Usar **Inter** con énfasis en legibilidad rápida.

### Componentes clave
- cards de paciente
- lista de agenda
- badges de estado
- quick actions
- formularios por secciones
- tabs de información
- notas clínicas cortas y claras

---

## 4. Flujo completo del médico

## 4.1 Flujo macro

1. Login
2. Dashboard médico
3. Ver agenda del día
4. Abrir cita o paciente
5. Revisar contexto básico
6. Registrar atención
7. Registrar examen si aplica
8. Registrar seguimiento si aplica
9. Cerrar atención
10. Revisar agenda siguiente

## 4.2 Pantallas que deben existir

### A. Autenticación
1. Login

### B. Inicio
2. Dashboard médico

### C. Agenda
3. Agenda del día
4. Detalle de cita

### D. Atención
5. Apertura de atención
6. Registro de atención
7. Confirmación de atención guardada

### E. Exámenes
8. Registrar examen
9. Ver exámenes vinculados

### F. Seguimiento
10. Registrar seguimiento
11. Ver seguimiento previo

### G. Consulta rápida
12. Historial básico del estudiante
13. Notificaciones o alertas internas

### H. Cuenta
14. Perfil médico

---

## 5. Descripción visual y funcional de cada pantalla

## 5.1 Login

### Objetivo
Acceso rápido, sin ruido.

### Debe mostrar
- usuario
- contraseña
- botón principal
- acceso a ayuda si hace falta

---

## 5.2 Dashboard médico

### Objetivo
Mostrar la jornada y las próximas acciones.

### Debe priorizar
1. agenda del día
2. siguiente paciente
3. accesos rápidos a registrar atención
4. seguimientos relevantes

### Bloques recomendados
- pacientes de hoy
- próxima atención
- pendientes clínicos
- accesos rápidos

---

## 5.3 Agenda del día

### Objetivo
Que el médico vea de forma escaneable a quién atiende, a qué hora y en qué estado está cada cita.

### Cada fila o card debe mostrar
- hora
- nombre del estudiante
- servicio
- estado
- CTA `Abrir`

### Regla
La agenda debe poder leerse en segundos.

---

## 5.4 Detalle de cita

### Objetivo
Dar contexto inmediato antes de atender.

### Debe mostrar
- estudiante
- motivo o servicio
- hora
- historial básico permitido
- CTA `Iniciar atención`

---

## 5.5 Registro de atención

### Objetivo
Permitir registrar la consulta con rapidez y orden.

### Estructura recomendada
Secciones breves y agrupadas:

- datos generales
- observaciones
- acciones tomadas
- exámenes solicitados
- seguimiento

### Regla visual
No hacer una pantalla infinita. Separar por bloques o pasos.

---

## 5.6 Registrar examen

### Objetivo
Guardar examen solicitado o resultado registrado dentro del flujo.

### Debe mostrar
- estudiante
- atención asociada
- tipo de examen
- estado
- observación breve

---

## 5.7 Registrar seguimiento

### Objetivo
Dejar claro qué debe pasar después.

### Debe mostrar
- tipo de seguimiento
- fecha sugerida si aplica
- observación breve
- estado inicial

---

## 5.8 Historial básico del estudiante

### Objetivo
Dar contexto sin saturar.

### Debe incluir
- últimas atenciones
- exámenes relacionados
- seguimientos previos

### Regla
Mostrar solo lo útil para continuar la atención.

---

## 5.9 Notificaciones internas

### Objetivo
Avisar cambios importantes del flujo.

### Ejemplos
- resultado cargado
- seguimiento pendiente
- cita reprogramada

---

## 5.10 Perfil médico

### Objetivo
Mostrar datos básicos del profesional y accesos de cuenta.

---

## 6. Historias de usuario completas · Médico

## HU-M01 Login
**Como** médico, **quiero** iniciar sesión de forma rápida y segura, **para** acceder a mi agenda y mis atenciones del día.

### Criterios de aceptación
- puedo ingresar con mis credenciales
- el acceso me lleva al dashboard médico
- si hay error, el mensaje es claro y breve

## HU-M02 Ver dashboard médico
**Como** médico, **quiero** ver un resumen de mi jornada, **para** saber rápidamente quién sigue y qué tengo pendiente.

### Criterios de aceptación
- veo la agenda del día
- veo el próximo paciente
- veo accesos rápidos relevantes

## HU-M03 Revisar agenda
**Como** médico, **quiero** consultar mi agenda del día, **para** organizar mis atenciones en orden.

### Criterios de aceptación
- la agenda muestra hora, estudiante y estado
- puedo abrir una cita desde la lista
- los estados son legibles

## HU-M04 Abrir detalle de cita
**Como** médico, **quiero** abrir una cita y ver el contexto básico del estudiante, **para** iniciar la atención con información suficiente.

### Criterios de aceptación
- la cita muestra información esencial
- puedo iniciar la atención desde la pantalla
- no se muestra información irrelevante

## HU-M05 Registrar atención
**Como** médico, **quiero** registrar la atención realizada, **para** dejar constancia ordenada de la consulta.

### Criterios de aceptación
- el formulario está dividido en secciones lógicas
- puedo guardar la atención sin confusión
- la app confirma que la información quedó registrada

## HU-M06 Solicitar o registrar examen
**Como** médico, **quiero** registrar un examen asociado a la atención, **para** dejar indicado el siguiente paso clínico dentro del alcance del sistema.

### Criterios de aceptación
- puedo elegir tipo de examen
- el examen queda vinculado a la atención
- el estado inicial queda guardado

## HU-M07 Registrar seguimiento
**Como** médico, **quiero** dejar seguimiento posterior a una atención o examen, **para** que el estudiante sepa qué hacer después.

### Criterios de aceptación
- puedo registrar observación breve
- puedo dejar estado o control pendiente
- el seguimiento queda vinculado al caso

## HU-M08 Consultar historial básico
**Como** médico, **quiero** revisar atenciones previas, exámenes y seguimientos permitidos, **para** continuar la atención con contexto.

### Criterios de aceptación
- puedo ver información resumida y relevante
- la consulta es rápida
- no se satura la pantalla

## HU-M09 Ver alertas internas
**Como** médico, **quiero** recibir avisos importantes del flujo de atención, **para** no pasar por alto cambios o resultados relevantes.

### Criterios de aceptación
- los avisos se muestran con claridad
- se entiende qué pasó y dónde actuar
- no interrumpen el trabajo innecesariamente

## HU-M10 Gestionar perfil
**Como** médico, **quiero** consultar mis datos básicos y mi cuenta, **para** mantener control de mi acceso.

### Criterios de aceptación
- puedo ver mis datos principales
- puedo acceder a ayuda o salir de la cuenta

---

## 7. Reglas de experiencia para Expo Go · Médico

- usar listas muy escaneables
- priorizar la próxima atención sobre información secundaria
- formularios por secciones o pasos
- CTA principal siempre visible al final del bloque relevante
- usar badges de estado consistentes
- evitar textos largos en cada item de agenda
- revisar manualmente que ningún texto se salga del componente
- si un texto no entra, se ajusta el copy o la composición

---

## 8. Criterios globales de calidad visual

La app del médico estará bien construida si:

- la agenda se entiende en segundos
- registrar atención no se siente pesado
- las secciones del formulario están ordenadas
- el médico encuentra rápido su próxima acción
- el sistema visual es consistente con la app del estudiante
- todo texto encaja de manera estética en los componentes
- la app se siente profesional, clara y usable
