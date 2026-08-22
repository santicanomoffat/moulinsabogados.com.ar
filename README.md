# Moulins Elgart Abogados

Sitio institucional del estudio jurídico Moulins Elgart Abogados. Es un
proyecto Next.js estándar (App Router), exportado como HTML/CSS/JS estático:
no depende de ningún proveedor de hosting particular ni de infraestructura
específica de IA — corre en cualquier hosting de archivos estáticos.

## Requisitos

- Node.js 20.9 o posterior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Generar el sitio para publicar

```bash
npm run build
```

El resultado (HTML, CSS, JS y assets ya optimizados) se genera en la carpeta
`out/`. Esa carpeta es autocontenida y usa rutas relativas: se puede subir
tal cual a cualquier hosting estático (Vercel, Netlify, un bucket S3, cPanel,
etc.) sin necesidad de un servidor Node en producción, y `out/index.html`
también se puede abrir con doble clic directamente en el navegador (sin
servidor) para una vista previa rápida.

Para previsualizar el resultado exportado localmente con un servidor:

```bash
npx serve out
```

## Estructura

El sitio es una sola página (`app/page.tsx`) con secciones ancladas
(`#estudio`, `#areas`, `#faq`, `#consulta`, etc.). Las áreas de práctica y las
preguntas frecuentes se muestran como listas con acordeón: todo se resuelve
sin navegar a subpáginas.

- `app/page.tsx`: página principal, con el acordeón de áreas de práctica y
  el de preguntas frecuentes.
- `app/practice-areas.ts`: contenido de las 12 áreas de práctica.
- `app/faq.ts`: contenido de preguntas frecuentes.
- `app/site-config.ts`: dominio, nombre y email de contacto del estudio —
  único lugar a actualizar si cambia el dominio definitivo.
- `app/layout.tsx`: metadata global y datos estructurados (JSON-LD) de
  `LegalService`/`Attorney` con el catálogo de áreas de práctica.
- `app/robots.ts` / `app/sitemap.ts`: generan `robots.txt` y `sitemap.xml`.
- `public/llms.txt`: resumen del estudio para motores de búsqueda con IA.
- `public/`: imágenes, favicon y demás recursos estáticos.

## Formulario de contacto

El formulario de la sección de consulta arma un enlace `mailto:` con los
datos cargados y lo dirige a la casilla del Estudio
(`moulinsabogados@gmail.com`), sin necesidad de backend ni credenciales.
Si más adelante se quiere un envío automático (sin depender del cliente de
correo del visitante), se puede reemplazar por una función de servidor con un
proveedor de email transaccional.

## Licencia

Uso privado del Estudio Moulins Elgart Abogados.
