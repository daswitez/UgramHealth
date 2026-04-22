# App móvil Expo Go · Flujo y estética · Rol Estudiante

## 1. Idea del producto

Aplicación móvil para estudiantes de la UAGRM que centraliza la reserva de fichas, la consulta de citas, la revisión de exámenes, el seguimiento posterior a la atención y las notificaciones. La app debe sentirse rápida, clara y confiable desde el primer uso. No es una app médica compleja para personal técnico, sino una herramienta de uso cotidiano para que el estudiante resuelva su atención sin fricción.

La lógica central del producto es simple:

- entrar rápido
- ver qué sigue
- reservar sin confusión
- revisar resultados y avisos sin perderse
- entender siempre la próxima acción

La app debe construirse con una mentalidad mobile-first, pensada para Expo Go y React Native, con navegación simple, targets táctiles cómodos, una sola acción principal por pantalla y bloques de información muy escaneables.

---

## 2. Objetivo UX del rol estudiante

El estudiante debe sentir estas tres cosas desde la primera pantalla:

1. **Entiendo dónde estoy**
2. **Sé qué tengo que hacer ahora**
3. **Puedo hacerlo rápido**

La app no debe hablar como sistema técnico. Debe hablar como un servicio claro y humano.

Ejemplos de tono correcto:

- `Reserva tu cita`
- `Tu resultado ya está disponible`
- `Tienes un control pendiente`
- `Elige un horario`
- `Tu cita fue confirmada`

Ejemplos de tono a evitar:

- `Trazabilidad garantizada`
- `Confiabilidad operativa`
- `Gestión inteligente del flujo clínico`
- `Optimización del proceso asistencial`

---

## 3. Estética visual que debe seguir la app

## 3.1 Sensación general

La estética debe sentirse:

- limpia
- moderna
- premium sin exageración
- cálida pero sobria
- ordenada
- confiable
- ligera visualmente

No debe parecer:

- plantilla genérica de dashboard
- app hospitalaria fría
- interfaz recargada con sombras llamativas
- diseño “muy IA” con efectos azules artificiales

## 3.2 Principios visuales

- Mucho espacio en blanco
- Bordes suaves
- Jerarquía clara
- Tarjetas limpias
- Colores usados como guía, no como decoración
- Una acción principal visible por pantalla
- Pocas decisiones por vista
- Todo texto debe entrar bien dentro del contenedor que lo contiene

## 3.3 Paleta recomendada

### Neutros
- Background principal: `#F8FAFC`
- Surface: `#FFFFFF`
- Border suave: `#E2E8F0`
- Texto principal: `#0F172A`
- Texto secundario: `#64748B`

### Primario
- Azul principal: `#2563EB`
- Hover / tono fuerte: `#1D4ED8`
- Fondo suave de apoyo: `#EFF6FF`

### Acento complementario
- Teal: `#0EA5A4`
- Fondo teal suave: `#CCFBF1`

### Semánticos
- Success: `#16A34A`
- Warning: `#D97706`
- Error: `#DC2626`
- Info: `#2563EB`

## 3.4 Tipografía

Usar **Inter**.

Escala recomendada para mobile:

- Título principal: 28 a 32
- Título de sección: 20 a 24
- Subtítulo: 16 a 18
- Texto base: 14 a 16
- Labels: 12 a 13
- Botones: 14 a 16 semibold

Reglas:

- nunca más de 3 niveles tipográficos visibles por bloque
- evitar párrafos largos
- títulos breves
- labels siempre claros
- si un texto no entra, se reescribe o se redistribuye el layout

## 3.5 Componentes base para Expo Go

La UI debe construirse con componentes consistentes:

- Button primary
- Button secondary
- Input text
- Select / picker
- Date selector
- Time chips
- Card resumen
- Card lista
- Badge de estado
- Bottom tab bar
- Top app bar
- Empty state
- Toast
- Modal de confirmación

## 3.6 Sombras y bordes

- sombras muy suaves
- nada de glow celeste
- cards pueden funcionar solo con borde y elevación mínima
- radius recomendado: 16 a 24

## 3.7 Navegación mobile

Para estudiante, la navegación ideal en Expo Go es:

### Bottom tabs
- Inicio
- Reservas
- Exámenes
- Avisos
- Perfil

Pantallas secundarias entran como stack:

- detalle de reserva
- elegir especialidad
- elegir médico y hora
- confirmar reserva
- detalle de examen
- detalle de seguimiento

---

## 4. Flujo completo del estudiante

## 4.1 Flujo macro

1. Login
2. Dashboard estudiante
3. Reservar ficha
4. Elegir servicio o especialidad
5. Ver médicos disponibles por servicio y hora
6. Elegir profesional
7. Elegir horario
8. Confirmar reserva
9. Ver reserva confirmada
10. Consultar mis reservas
11. Ver exámenes
12. Ver seguimiento
13. Revisar notificaciones
14. Gestionar perfil

## 4.2 Pantallas que deben existir

### A. Autenticación
1. Splash / carga inicial
2. Login

### B. Inicio
3. Dashboard estudiante

### C. Reserva
4. Reservar ficha
5. Elegir servicio o especialidad
6. Médicos disponibles por especialidad o servicio
7. Selección de horario
8. Confirmación de reserva
9. Reserva creada con éxito

### D. Gestión de citas
10. Mis reservas
11. Detalle de reserva
12. Reprogramar / cancelar reserva

### E. Exámenes
13. Lista de exámenes
14. Detalle de examen / resultado

### F. Seguimiento
15. Lista de seguimientos
16. Detalle de seguimiento

### G. Avisos
17. Notificaciones
18. Detalle de aviso

### H. Cuenta
19. Mi perfil
20. Ajustes básicos

---

## 5. Descripción visual y funcional de cada pantalla

## 5.1 Login

### Objetivo
Entrar rápido y sin ruido.

### Debe mostrar
- logo
- título claro
- correo o usuario
- contraseña
- botón principal `Ingresar`
- acceso secundario `Solicitar ayuda`

### Tono
- humano
- breve
- cero texto técnico

---

## 5.2 Dashboard estudiante

### Objetivo
Mostrar la próxima acción sin obligar a pensar demasiado.

### Orden ideal de bloques
1. Próxima cita
2. CTA `Reservar ficha`
3. Exámenes recientes o pendientes
4. Seguimiento pendiente
5. Avisos recientes

### Regla UX
La acción más importante debe estar visible en el primer scroll.

---

## 5.3 Reservar ficha

### Objetivo
Iniciar la reserva con claridad.

### Debe mostrar
- título breve
- selector o lista de servicios
- explicación muy corta
- CTA para continuar

### Servicios ejemplo
- Medicina general
- Control médico
- Exámenes
- Certificados

---

## 5.4 Elegir servicio o especialidad

### Objetivo
Que el estudiante entienda el tipo de atención antes de ver horarios.

### Debe mostrar
- lista en cards grandes o rows táctiles
- icono sencillo por servicio
- nombre del servicio
- línea corta explicativa

### Regla
Nada de descripciones largas.

---

## 5.5 Médicos disponibles por especialidad o servicio

### Esta pantalla es obligatoria
Aquí debe verse exactamente lo que mencionaste:

- especialidad o servicio seleccionado
- médicos disponibles
- franjas horarias disponibles por cada profesional
- modalidad si aplica
- siguiente paso claro

### Estructura recomendada
Cada card de médico debe mostrar:

- nombre
- especialidad
- breve contexto útil
- horarios disponibles en chips o botones
- CTA secundario `Ver más horarios`

### UX ideal
El estudiante debe poder elegir horario sin entrar a una pantalla innecesaria si ya está decidido.

---

## 5.6 Selección de horario

### Objetivo
Confirmar un horario específico.

### Debe mostrar
- profesional elegido
- fecha
- horarios disponibles
- resumen breve
- CTA `Continuar`

---

## 5.7 Confirmación de reserva

### Objetivo
Dar seguridad antes de cerrar la acción.

### Debe mostrar
- servicio
- profesional
- fecha
- hora
- lugar
- CTA `Confirmar reserva`

### Debe sentirse
calmo, claro y seguro.

---

## 5.8 Reserva creada con éxito

### Objetivo
Cerrar el flujo con claridad.

### Debe mostrar
- mensaje simple de éxito
- resumen de la cita
- CTA `Ver mis reservas`
- CTA `Volver al inicio`

---

## 5.9 Mis reservas

### Objetivo
Consultar estado e historial.

### Cada ítem debe mostrar
- servicio
- profesional
- fecha y hora
- estado
- acción rápida

### Estados posibles
- Pendiente
- Confirmada
- Reprogramada
- Cancelada
- Atendida

---

## 5.10 Exámenes

### Objetivo
Que el estudiante entienda rápido qué examen tiene pendiente y cuál ya puede revisar.

### Debe mostrar
- pendientes
- resultados disponibles
- historial
- detalle resumido

---

## 5.11 Seguimiento

### Objetivo
Mostrar el próximo paso después de una atención o examen.

### Debe mostrar
- control pendiente
- recordatorio de acción
- fecha sugerida si existe
- CTA clara

---

## 5.12 Notificaciones

### Objetivo
Centralizar avisos importantes.

### Tipos
- cita confirmada
- cambio de horario
- examen disponible
- seguimiento pendiente

### Regla
Cada notificación debe decir qué pasó y qué puede hacer el usuario ahora.

---

## 5.13 Mi perfil

### Objetivo
Mostrar datos básicos y accesos de cuenta.

### Debe mostrar
- nombre
- carrera o identificación universitaria
- contacto
- preferencias básicas
- ayuda
- cerrar sesión

---

## 6. Historias de usuario completas · Estudiante

## HU-01 Login
**Como** estudiante, **quiero** iniciar sesión con mis datos institucionales, **para** entrar a mi espacio y revisar mi atención médica.

### Criterios de aceptación
- el sistema permite ingresar con correo o usuario
- el botón principal es claro y visible
- si los datos están mal, se muestra un mensaje simple
- el acceso exitoso lleva al dashboard del estudiante

## HU-02 Ver dashboard
**Como** estudiante, **quiero** ver un resumen de mi próxima cita, avisos y acciones pendientes, **para** saber rápidamente qué sigue.

### Criterios de aceptación
- el dashboard muestra la próxima cita si existe
- muestra acceso rápido a reservar ficha
- muestra avisos y pendientes relevantes
- el contenido principal aparece sin confusión

## HU-03 Iniciar reserva
**Como** estudiante, **quiero** iniciar una reserva desde la app, **para** pedir atención sin tener que depender de un proceso manual.

### Criterios de aceptación
- puedo entrar al flujo desde el dashboard o menú
- la pantalla inicial de reserva es clara
- la app me deja elegir servicio antes del horario

## HU-04 Elegir servicio
**Como** estudiante, **quiero** elegir el tipo de atención que necesito, **para** ver opciones correctas de disponibilidad.

### Criterios de aceptación
- los servicios se muestran de forma clara
- cada servicio tiene nombre y breve explicación
- al tocar uno, avanzo al paso de profesionales disponibles

## HU-05 Ver médicos y horarios disponibles
**Como** estudiante, **quiero** ver qué médicos están disponibles por especialidad o servicio y a qué hora, **para** elegir la opción que mejor se ajuste a mi tiempo.

### Criterios de aceptación
- cada profesional muestra horarios disponibles
- el servicio seleccionado sigue visible
- la información cabe bien en la interfaz
- puedo elegir horario desde esta vista o avanzar al detalle

## HU-06 Confirmar reserva
**Como** estudiante, **quiero** revisar los datos de mi cita antes de confirmar, **para** evitar errores.

### Criterios de aceptación
- la pantalla muestra servicio, profesional, fecha y hora
- el CTA principal es `Confirmar reserva`
- al confirmar, la cita queda registrada

## HU-07 Ver mis reservas
**Como** estudiante, **quiero** consultar mis reservas actuales y anteriores, **para** revisar sus estados y detalles.

### Criterios de aceptación
- veo una lista ordenada
- cada reserva tiene estado visible
- puedo abrir el detalle de una reserva

## HU-08 Reprogramar o cancelar
**Como** estudiante, **quiero** modificar una reserva cuando todavía se puede, **para** adaptar mi cita si tengo un cambio de horario.

### Criterios de aceptación
- la app muestra si la reserva es modificable
- puedo reprogramar o cancelar según reglas permitidas
- el nuevo estado queda visible

## HU-09 Revisar exámenes
**Como** estudiante, **quiero** ver mis exámenes pendientes y mis resultados disponibles, **para** entender qué tengo que revisar.

### Criterios de aceptación
- se distinguen pendientes y resultados disponibles
- puedo abrir el detalle de un resultado
- el lenguaje es simple y directo

## HU-10 Ver seguimiento
**Como** estudiante, **quiero** ver si tengo controles o pasos pendientes, **para** continuar mi atención sin olvidarme.

### Criterios de aceptación
- los seguimientos muestran la próxima acción
- si hay control pendiente, aparece destacado
- puedo abrir el detalle y confirmar si aplica

## HU-11 Revisar notificaciones
**Como** estudiante, **quiero** ver mis avisos recientes, **para** enterarme de cambios, confirmaciones y resultados.

### Criterios de aceptación
- cada aviso dice qué pasó
- cada aviso tiene una fecha u hora visible
- si corresponde, incluye CTA para actuar

## HU-12 Gestionar perfil
**Como** estudiante, **quiero** revisar mis datos y preferencias básicas, **para** mantener mi cuenta actualizada.

### Criterios de aceptación
- puedo ver mis datos principales
- puedo acceder a ayuda y cerrar sesión
- la vista es simple y ordenada

---

## 7. Reglas de experiencia para desarrollo en Expo Go

- usar `SafeAreaView`
- targets táctiles mínimos de 44 px
- bottom tabs simples y estables
- formularios con scroll claro
- CTA principal sticky cuando ayude
- cards en una sola columna
- listas con buen espaciado vertical
- badges de estado siempre legibles
- nada importante debe depender de hover
- todas las cadenas de texto deben probarse para que no se salgan del componente

---

## 8. Criterios globales de calidad visual

La app del estudiante estará bien construida si:

- el usuario entiende qué hacer en pocos segundos
- la reserva se puede completar sin ruido
- la pantalla de médicos y horarios es clara
- los estados de citas y exámenes son legibles
- todo texto entra bien en sus contenedores
- no hay adornos visuales artificiales
- la app se siente humana, limpia y útil
