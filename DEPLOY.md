# 📤 Guía para Subir el Proyecto a GitHub

## Paso 1: Crear cuenta en GitHub (si no tienes una)

1. Ve a [github.com](https://github.com)
2. Crea una cuenta nueva
3. Confirma tu email

## Paso 2: Crear un nuevo repositorio en GitHub

1. Haz clic en el botón **"+"** en la esquina superior derecha
2. Selecciona **"New repository"**
3. Completa los datos:
   - **Repository name**: `cv-personal` (o el nombre que prefieras)
   - **Description**: "CV Virtual Personal - Jose Benites Marcelo"
   - **Visibility**: Selecciona **Public** (para GitHub Pages gratuito)
   - **NO marques** "Initialize this repository with a README"
4. Haz clic en **"Create repository"**

## Paso 3: Inicializar Git en tu proyecto local

Abre la terminal en la carpeta de tu proyecto (`c:\cv\cv_personal`) y ejecuta:

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: CV Virtual Personal"
```

## Paso 4: Conectar con GitHub y subir

```bash
# Reemplaza TU-USUARIO con tu nombre de usuario de GitHub
# Reemplaza cv-personal con el nombre de tu repositorio si es diferente

git remote add origin https://github.com/TU-USUARIO/cv-personal.git

# Cambiar a la rama main (si estás en otra)
git branch -M main

# Subir el código
git push -u origin main
```

## Paso 5: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona:
   - **Branch**: `main` o `master`
   - **Folder**: `/docs`
5. Haz clic en **Save**

## Paso 6: Compilar para GitHub Pages

En tu terminal local, ejecuta:

```bash
npm run build:gh-pages
```

Esto creará una carpeta `docs` con los archivos compilados.

## Paso 7: Subir la carpeta docs

```bash
git add docs
git commit -m "Build for GitHub Pages"
git push
```

## Paso 8: Obtener tu link público

Después de unos minutos, tu CV estará disponible en:
```
https://TU-USUARIO.github.io/cv-personal/
```

## 🔄 Actualizar el CV en el futuro

Cada vez que hagas cambios:

```bash
# Hacer cambios en tu código...

# Compilar para producción
npm run build:gh-pages

# Subir cambios
git add .
git commit -m "Descripción de los cambios"
git push
```

## ⚠️ Nota Importante

- El link puede tardar 1-5 minutos en actualizarse después de hacer push
- Asegúrate de que el repositorio sea **Público** para usar GitHub Pages gratis
- Si cambias el nombre del repositorio, el link cambiará también

## 🆘 Solución de Problemas

### Si git no está instalado:
- Descarga Git desde: https://git-scm.com/download/win
- Instálalo y reinicia la terminal

### Si te pide usuario y contraseña:
- GitHub ya no acepta contraseñas, usa un **Personal Access Token**
- Ve a: GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Usa ese token como contraseña

### Si hay errores al hacer push:
- Verifica que el repositorio existe en GitHub
- Verifica que el nombre del repositorio sea correcto
- Asegúrate de estar en la rama correcta: `git branch`
