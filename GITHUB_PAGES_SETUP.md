# Configuración de GitHub Pages para Lorena Web

## Pasos para configurar el despliegue automático:

### 1. Configurar el repositorio en GitHub

1. **Actualizar astro.config.mjs**:
   - Reemplaza `[tu-usuario]` en la línea `site: 'https://[tu-usuario].github.io'` con tu nombre de usuario de GitHub
   - Si el nombre de tu repositorio es diferente a `lorena-web`, actualiza también la línea `base: '/lorena-web'`

### 2. Configurar GitHub Pages en el repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **GitHub Actions**

### 3. Hacer push de los cambios

```bash
git add .
git commit -m "feat: agregar configuración para GitHub Pages"
git push origin main
```

### 4. Verificar el despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow "Deploy to GitHub Pages" se ejecute correctamente
3. Una vez completado, tu sitio estará disponible en: `https://[tu-usuario].github.io/lorena-web`

## Configuración actual

- **Branch de despliegue**: `main`
- **Action**: `.github/workflows/deploy.yml`
- **Trigger**: Automático en push a `main` + manual desde Actions tab
- **Archivo .nojekyll**: Se crea automáticamente para que GitHub Pages no ignore el directorio `_astro`

## ¿Por qué necesitamos .nojekyll?

GitHub Pages usa Jekyll por defecto, que ignora directorios que empiezan con `_` (como `_astro`). 
El archivo `.nojekyll` le dice a GitHub Pages que no use Jekyll y sirva todos los archivos tal como están, 
incluyendo los archivos JavaScript y CSS compilados de Astro que están en el directorio `_astro`.

## Notas importantes

- El sitio se reconstruye automáticamente cada vez que hagas push a la rama `main`
- Si cambias el nombre del repositorio o del usuario, actualiza las URLs en `astro.config.mjs`
- El primer despliegue puede tardar unos minutos en estar disponible

## Troubleshooting

Si el despliegue falla:

1. Verifica que las GitHub Pages estén habilitadas en la configuración del repositorio
2. Revisa los logs en la pestaña Actions para identificar errores
3. Asegúrate de que la rama `main` sea la rama por defecto del repositorio
