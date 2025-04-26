# Patrones de diseño.

Los patrones de diseño ayudan a estructurar y organizar el desarrollo de
aplicaciones, mejorando la mantenibilidad, escalabilidad y experiencia de
usuario.

## Patrones SPA y Modular

**Patrón Modular:**  
Es un patrón de diseño que organiza el código dividiéndolo en _módulos
independientes_ y reutilizables. Cada módulo encapsula una funcionalidad
específica, lo que mejora la _mantenibilidad_, _legibilidad_ y _escalabilidad_
del proyecto. Por ejemplo, en una app podrías tener un módulo de autenticación,
otro para manejar usuarios y otro para pagos.

**Patrón de Enrutamiento SPA (Single Page Application):**  
Este patrón se usa en aplicaciones web de una sola página. A diferencia de una
web tradicional que recarga la página completa al navegar, en una SPA el
_contenido se actualiza dinámicamente_ sin recargar la página. El _enrutamiento
SPA_ permite simular distintas "rutas" (como `/home` o `/profile`) usando
JavaScript, y carga solo los componentes necesarios, mejorando la experiencia
del usuario.

**Ventajas:**

- **Experiencia de usuario fluida:** no hay recargas completas, lo que hace que
  se sienta como una app nativa.
- **Más rápida después de la carga inicial.**
- Ideal para interfaces interactivas (como dashboards, sistemas de gestión,
  etc.).

**Tecnologías comunes:** React, Angular, Vue.js, etc.

## EXISTEN MUCHOS MÁS PATRONES DE DISEÑO

Alguna lista de ellos (no usaremos todos, pero a medida que avancemos veremos
algunos más).

**MVC (Model-View-Controller)**

Separa datos (Model), interfaz de usuario (View) y lógica de control
(Controller) para organizar mejor la app.

**MVVM (Model-View-ViewModel)**

Similar a MVC pero con un `ViewModel` que conecta automáticamente la vista y los
datos (muy usado en frontend).

**MVP (Model-View-Presenter)**

Variante de MVC donde el Presenter tiene más control sobre la Vista, usado mucho
en apps móviles.

**Microfrontends**

Divide una aplicación web grande en microaplicaciones independientes que
funcionan juntas.

**CSR (Client-Side Rendering)**

El navegador (cliente) arma toda la vista, y el servidor solo manda datos
crudos. (Lo normal en una SPA).

**SSR (Server-Side Rendering)**

El servidor arma la vista HTML completa y se la manda al navegador (más rápido
para SEO y primera carga).

**SSG (Static Site Generation)**

El sitio se genera una vez (en build) como archivos HTML estáticos, súper rápido
para mostrar.

**PWA (Progressive Web App)**

Web apps que funcionan como apps nativas: cargan rápido, funcionan offline, y se
pueden instalar en el dispositivo.

**Arquitectura por capas**

Divide la app en capas como presentación, lógica de negocio, acceso a datos,
etc. Cada capa se comunica con la siguiente.

**Event-driven architecture**

La aplicación reacciona a eventos (clics, envíos, respuestas) y ejecuta lógica
cuando ocurren.

**Onion Architecture**

Organiza el proyecto en anillos concéntricos, donde lo más interno son los datos
y lo más externo las interfaces.

**Clean Architecture**

Mantiene independiente el dominio de negocio respecto a frameworks, UI o bases
de datos. Facilita cambios sin romper todo.

**Hexagonal Architecture** (Ports and Adapters)

Divide la app en el "núcleo" y "adaptadores" (UI, base de datos, APIs) que se
pueden intercambiar fácilmente.
