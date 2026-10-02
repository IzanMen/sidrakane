# Sidra Kane

Rediseño completo en Astro con páginas en español e inglés. Orientado a visitas a Sa Marjal Vella y conectado con el calendario y WhatsApp existentes de Kane.

## Desarrollo

Requiere Node 22.13 o superior y npm.

```bash
npm install
npm run dev
```

## Verificación y versión final

```bash
npm run check
npm run build
npm run preview
```

El contenido estático se genera en `dist/client`. `scripts/package-worker.mjs` añade un Worker compatible con Sites en `dist/server`, metadatos y redirecciones 301 de las rutas originales. `npm run preview` sirve la salida estática de Astro. No requiere una base de datos ni secretos.

La URL de origen se configura con `SITE_URL` al compilar; por defecto es `https://sidrakane.com`. Para el despliegue privado se utiliza la URL asignada por Sites. No se ha modificado el dominio original.

## Contenido y funcionalidades

- Inicio, visita, historia, patrimonio, colección, colaboraciones, contacto y privacidad en ambos idiomas.
- Menú móvil con diálogo accesible, preguntas con acordeones, acción de reserva persistente en móvil.
- Precio orientativo interactivo por número de personas y gratuidad hasta 12 años.
- Consulta por WhatsApp con fecha opcional y mensaje preparado, enviado solo por el visitante.
- Reserva real en el calendario oficial. No se simulan plazas ni confirmaciones.
- Fuentes locales, imágenes WebP, HTML estático, metadatos, alternates de idioma, sitemap y datos estructurados.

Consulta `docs/investigacion-y-contenido.md` para las referencias de diseño, fuentes verificadas, inventario de 25 imágenes originales, decisiones editoriales y prompt de la tarjeta social.
