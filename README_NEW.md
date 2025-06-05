# Lorena Magriñat - Author Website

Sitio web personal para la autora Lorena Magriñat, construido con Astro y TypeScript.

## 🚀 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── images/           # Imágenes estáticas
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes base (Button, Card, Section)
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Books.astro
│   │   ├── Newsletter.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── BackToTop.astro
│   ├── layouts/
│   │   └── Layout.astro  # Layout principal
│   ├── pages/
│   │   └── index.astro   # Página principal
│   ├── styles/
│   │   └── global.css    # Estilos globales y Tailwind
│   └── types/
│       └── index.ts      # Definiciones TypeScript
└── template/
    └── template.html     # Template HTML original
```

## 🎨 Características

- ✅ **Componentes Modulares**: Estructura completamente componentizada
- ✅ **TypeScript**: Tipado fuerte en todos los componentes
- ✅ **Tailwind CSS**: Estilos modernos y responsivos
- ✅ **Diseño Responsivo**: Optimizado para móvil y escritorio
- ✅ **SEO Optimizado**: Meta tags y estructura semántica
- ✅ **Accesibilidad**: HTML semántico y navegación por teclado
- ✅ **Animaciones Suaves**: Efectos hover y transiciones

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio de producción en `./dist/`          |
| `npm run preview`         | Vista previa del build local antes de desplegar        |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda usando Astro CLI                     |

## 🎨 Paleta de Colores

El sitio utiliza una paleta de colores personalizada definida en `global.css`:

- **Turquesa Pastel**: `#0fcfd8` - Color principal
- **Amarillo Quemado**: `#e8d40c` - Color de acento
- **Gris Oscuro**: `#333d45` - Texto principal
- **Gris Medio**: `#5e6a73` - Texto secundario
- **Beige Claro**: `#eeefe4` - Color de acento

## 📱 Componentes Principales

### Header.astro
- Navegación fija con efectos de scroll
- Menú hamburguesa para móviles
- Enlaces de navegación suaves

### Hero.astro
- Sección de bienvenida con imagen de perfil
- Botones de llamada a la acción
- Texto descriptivo

### About.astro
- Información biografía de la autora
- Imagen personal
- Descripción de su trabajo

### Books.astro
- Showccase de libros publicados
- Integración con Amazon y Stripe (preparada)
- Sección "próximamente" para futuros libros

### Newsletter.astro
- Formulario de suscripción
- Espacio preparado para blog/noticias

### Contact.astro
- Formulario de contacto funcional
- Enlaces a redes sociales (configurables)

### UI Components
- **Button.astro**: Botones reutilizables con variantes
- **Card.astro**: Tarjetas con efectos hover
- **Section.astro**: Wrapper de secciones con backgrounds

## 🎯 Tecnologías

- **Astro**: Framework web moderno
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de utilidades CSS
- **Google Fonts**: Lora (títulos) y Open Sans (texto)

## 📝 Personalización

Para personalizar el contenido:

1. **Información personal**: Edita `Hero.astro` y `About.astro`
2. **Libros**: Modifica el array de libros en `Books.astro`
3. **Colores**: Ajusta las variables CSS en `global.css`
4. **Navegación**: Actualiza los enlaces en `Header.astro`

## 🚀 Despliegue

El sitio está listo para ser desplegado en:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Simplemente conecta tu repositorio y el build se generará automáticamente.

---

¿Quieres saber más sobre Astro? Consulta [nuestra documentación](https://docs.astro.build).
