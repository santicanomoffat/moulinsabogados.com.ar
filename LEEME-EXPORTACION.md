# Moulins Elgart | Abogados — guía rápida

Esta carpeta contiene el código fuente completo del sitio: componentes,
estilos, imágenes y configuración de SEO. Es un proyecto Next.js estándar,
sin dependencias de ninguna plataforma de hosting específica: se compila a
HTML/CSS/JS estático y se puede publicar en cualquier hosting web.

## Contenido principal

- `app/page.tsx`: la página completa del sitio (una sola página con
  secciones ancladas y acordeones para áreas de práctica y preguntas
  frecuentes — no hay subpáginas).
- `app/practice-areas.ts`: contenido de las 12 áreas de práctica.
- `app/faq.ts`: contenido de preguntas frecuentes.
- `app/site-config.ts`: dominio, nombre del estudio y email de contacto —
  el único lugar que hay que tocar cuando se confirme el dominio definitivo.
- `public/`: fotografía profesional, logotipo/favicon y `llms.txt` (resumen
  del estudio para buscadores con IA). `robots.txt` y `sitemap.xml` se
  generan automáticamente al compilar.
- `package.json`: dependencias y comandos del proyecto.
- `next.config.ts` y `tsconfig.json`: configuración técnica.

## Abrir y editar localmente

Se necesita Node.js 20.9 o posterior y npm.

```bash
npm install
npm run dev
```

## Generar una nueva versión para publicar

```bash
npm run build
```

El resultado (ya estático, listo para subir a cualquier hosting) se crea en
la carpeta `out/`. Los archivos usan rutas relativas, así que `out/index.html`
también se puede abrir con doble clic directamente en el navegador para verlo
sin instalar nada.

## Publicación

El sitio se exporta como HTML/CSS/JS estático puro: no requiere un servidor
Node en producción ni ninguna plataforma particular. Se puede alojar en
cualquier hosting de archivos estáticos (Vercel, Netlify, un bucket S3,
hosting compartido tradicional, etc.).

## Contacto

El formulario de consulta ya deriva por correo a `moulinsabogados@gmail.com`.

Pendientes cuando el Estudio los confirme:

- Teléfono / WhatsApp para mostrar en el sitio.
- Sistema real de turnos, si se quiere incorporar más adelante.

La interfaz actual no incorpora credenciales ni datos privados.
