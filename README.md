# Diseño de Posibilidades

Un sistema para la revisión atenta y la práctica presente.
Sitio publicado: **https://didepo.github.io/humanos-posibles/**

## Cómo está organizado

```
content/            ← la bóveda de Obsidian (ábrela como bóveda)
  _plantillas/      ← plantillas de Obsidian (no se publican)
  index.md          ← portada del sitio
quartz/             ← motor de Quartz 4 (no tocar, salvo Licencia.tsx y styles/custom.scss)
quartz.config.ts    ← título, idioma, colores, tipografía
quartz.layout.ts    ← qué aparece en cada página
.github/workflows/  ← publicación automática en GitHub Pages
```

## Flujo de trabajo

1. Escribe en Obsidian dentro de `content/`.
2. Una nota con `draft: true` en sus propiedades no se publica.
3. Publicar = subir los cambios a la rama `v4`:

   ```bash
   git add content
   git commit -m "Nuevas notas"
   git push
   ```

   GitHub Actions construye el sitio y lo publica en uno o dos minutos.

## Vista previa local (opcional)

```bash
npm ci
npx quartz build --serve   # http://localhost:8080
```

## Licencias

- Contenido (`content/`): © 2023 Juan Daza Arévalo, [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.es).
- Motor Quartz (`quartz/`): MIT, © jackyzha0 — ver `LICENSE-QUARTZ.txt`.
