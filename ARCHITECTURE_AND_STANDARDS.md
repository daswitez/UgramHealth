# Arquitectura y Estándares de Documentación React Native (Expo)

Este documento centraliza los lineamientos de arquitectura y los estándares que deben seguirse para poder localizar, documentar y buscar información adecuadamente a través del repositorio mientras se está desarrollando.

## 📂 1. Estructura de Directorios Recomendada

La estructura se divide lógicamente para acomodar dos productos en un solo código fuente: `Doctor` y `Student`:

```text
src/
 ├── components/           # (UI Base Compartida) Elementos independientes (Botones, Inputs, Cards).
 │   ├── ui/               # Componentes atómicos puramente visuales sin lógica de negocio.
 │   └── shared/           # Bloques algo más compuestos (Header general, Modales compartidos).
 │
 ├── screens/              # (Vistas por Rol) Pantallas enteras organizadas lógicamente.
 │   ├── auth/             # Pantalla de Login, Recuperar clave, Splash.
 │   ├── student/          # Dashboard, Exámenes, Flujo de reservas, Mis Citas.
 │   └── doctor/           # Dashboard, Agenda del Día, Registro de atenciones, Consulta Paciente.
 │
 ├── navigation/           # (Enrutadores) 
 │   ├── AuthNavigator.tsx 
 │   ├── StudentTabs.tsx   
 │   ├── DoctorTabs.tsx    
 │   └── RootNavigator.tsx # Gestiona adónde va el usuario de acuerdo a la Auth/Rol de estado global.
 │
 ├── hooks/                # (Logica) Custom hooks React (ej. useAuth, useAgendarCita, useFetchPacientes).
 ├── services/             # (APIs) Funciones TS para hacer solicitudes HTTP.
 ├── store/                # (Global State) Setup genérico de Zustand, Context o Redux toolkit (Si entra en el scope).
 ├── theme/                # (Tokens) Colors, Typography y Spacing. Mantenemos paleta unificada descrita en los doc base.
 └── types/                # (TypeScript Internals) Modelos globales (Interfaces del Paciente, de Fichas Médicas).
```

## 🛠 2. Reglas de TypeScript e Inyección

- **Cero Anys (`any`)**: Utilizar el tipado estricto. Mantenga interfaces consistentes para API payloads referibles con las vistas y centralice sus Modelos bajo `/src/types/models.ts`.
- **Ruteos (Typesafe Navigation)**: Proveyendo el `StackParamList` o el `BottomTabParamList` a la navegación, los desarrolladores deben garantizar que ninguna pantalla puede ser llamada con parámetros inconsistentes ni nombres de ruta erróneos.

## 📝 3. Lineamientos de Componentes Expo (UX/UI Dev)

Siguiendo los `.md` iniciales de los respectivos roles, las siguientes reglas aplican cuando se creen los componentes:
- **`SafeAreaView` y Status Bar:** Todo componente Layout base debe recubrirse en configuraciones de área segura respetando el `notch` o `islands` de los teléfonos, especialmente usando estilos visualmente "limpios".
- **Targets Táctiles Flexibles:** Botones implementados con un wrapper que aseguren el margen mínimo en iOS de 44px.
- **Scroll:** Pantallas como la *Reserva de Atención (Doctor)* que tienen múltiples sub-categorías de inputs, DEBEN ir alojadas en `ScrollView` con el comportamiento extra visual de `KeyboardAvoidingView` para que la UI no rompa ni encierre el teclado en Expo.
- **Limitantes de UI y Responsive Fonts:** Todos los contenedores de texto, especialmente nombres de doctores o estudiantes y diagnósticos largos (`numberOfLines`, `ellipsizeMode`) deben pre-analizarse para no romper layouts.

## 🔍 4. Documentación In-code y Comentarios

- **Componentes Complejos:** Todo componente bajo el bloque `screens/` o bloque `components/shared/` DEBE llevar un breve JSDoc describiendo con qué intenciones o estados de contexto interactúa.
- **Archivos Externos (.md):** Las historias de UX descritas originariamente (HU-01, HU-M01, etc.) quedan estáticas; las dudas de "cómo implementar" o "a qué API acoplar" se definirán acá en arquitectura o comentándose sobre los PR de Github/Gitlab al momento del sprint plan de las tareas listadas en `BACKLOG.md`.
