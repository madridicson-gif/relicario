# RELICARIO — sitio web (versión 1)

Tienda de joyería de segunda vida / 中古饰品店. Landing page trilingüe (ES · EN · 中文),
sitio estático, sin build. Estilo: mezcla de Alhaja + Joidart + PDPAOLA — marfil
envejecido, latón, un acento burdeos, tipografía "grabada".

> Todo el contenido (nombres, precios, procedencias, fotos) es **provisional**.
> Está pensado para sustituirse por tus piezas reales.

---

## 1. Estructura de archivos

```
relicario-web/
├── index.html            → toda la página (una sola pantalla larga)
├── assets/
│   ├── css/style.css      → todos los estilos + tokens de color/tipografía
│   ├── js/main.js         → idioma (ES/EN/ZH), menú, filtros, formulario
│   └── img/               → aquí van tus fotos (ahora vacío; se usan dibujos SVG)
└── README.md
```

No hay framework ni paso de compilación. Se abre y funciona.

## 2. Ver el sitio en local

Abrir `index.html` directamente en el navegador funciona, pero para que carguen
bien las fuentes y el JS conviene un servidor local:

```bash
cd relicario-web
python -m http.server 5577
```

Luego abrir http://127.0.0.1:5577

## 3. Cómo cambiar contenido

### Textos (3 idiomas)
Todo el texto vive en `assets/js/main.js`, en el objeto `I18N` (`es`, `en`, `zh`).
El español también está escrito directamente en `index.html` como respaldo por si
el JS no carga. Al editar una frase, cámbiala en **los dos sitios** (o al menos en
`main.js`).

### Precios y nombres de piezas
- Nombre y procedencia de cada pieza: claves `p1_name` / `p1_prov` … `p9_name` en `main.js`.
- Precio: está escrito en `index.html`, dentro de cada `<li class="card">`, en
  `<p class="price">`. El precio no se traduce; solo la palabra "desde/from/起".

### Fotos de producto
Ahora cada tarjeta usa un dibujo de línea (SVG) en vez de foto. Para poner una foto:

1. Guarda la imagen en `assets/img/` (recomendado: JPG o WebP, ~1000×1250 px, vertical 4:5).
2. En `index.html`, sustituye dentro de la tarjeta:
   ```html
   <figure class="card-media"><svg class="motif"><use href="#m-signet"/></svg></figure>
   ```
   por:
   ```html
   <figure class="card-media">
     <img src="assets/img/lote-001.jpg" alt="Anillo sello Bonita, España años 40" loading="lazy">
   </figure>
   ```
3. Añade en `style.css`:
   ```css
   .card-media img { width: 100%; height: 100%; object-fit: cover; }
   ```

### Añadir / quitar piezas
Copia un bloque `<li class="card" data-category="…">` completo en `index.html`.
`data-category` debe ser uno de: `anillos`, `pendientes`, `colgantes`, `broches`, `pulseras`
(así funcionan los filtros). Actualiza el número "9 piezas" (`collection_count` en `main.js`).

Cada tarjeta lleva también un botón `.add-bag` con `data-lot="10"` (siguiente
número libre) y `data-price="123"` (precio en euros, solo el número) — son los
que usa la bolsa. Y añade `p10_name` / `p10_prov` en los tres idiomas dentro
de `I18N` en `main.js` (el nombre se reutiliza también en el correo de
reserva).

### Colores y tipos
Todo está arriba de `style.css`, en `:root` (variables `--bone`, `--ink`, `--brass`,
`--oxblood`, etc.). Cambiar un valor ahí lo cambia en toda la página.

### Datos de la tienda física
Cuando tengas dirección y fecha, edita la sección `#apertura` en `index.html`
(claves `opening_*` en `main.js`) y el pie de página.

### Bolsa / carrito
Como cada pieza es única (no hay stock repetido), la "bolsa" no usa cantidades:
solo deja marcar qué lotes te interesan y enviarlos como una reserva.

- Botón "Añadir a la bolsa" en cada tarjeta (`.add-bag`, con `data-lot` y
  `data-price`), icono con contador en la cabecera, y un panel lateral
  (`#cartDrawer` en `index.html`) con la lista, el subtotal y el botón
  "Solicitar reserva".
- Todo vive en `assets/js/main.js` (funciones `initCartButtons`,
  `initCartDrawer`, `renderCart`, etc.) y se guarda en `localStorage`
  (`relicario-cart`), así que la bolsa sobrevive a recargar la página.
- "Solicitar reserva" no envía nada por sí mismo (no hay backend): abre el
  correo del visitante (`mailto:`) con el listado de lotes y el subtotal ya
  escritos. **Cambia el correo de destino** en `main.js` (constante
  `CART_MAIL`, ahora `hola@relicario.es`, un placeholder) por el correo real
  de la tienda.
- Si en el futuro quieres cobrar de verdad en vez de solo reservar, esto se
  puede sustituir por Stripe Payment Links o Shopify Buy Button sin tocar el
  resto del sitio (ver punto 6 más abajo).

### Formulario de correo
Ahora el formulario solo valida y muestra un mensaje; **no envía nada**. Para
recibir los correos, conéctalo a un servicio (sin backend):
- **Formspree** (formspree.io) — el más rápido: cambia el `<form>` por
  `<form action="https://formspree.io/f/TU_ID" method="POST">` y quita el
  `e.preventDefault()` en `main.js`.
- Alternativas: Buttondown, Mailchimp embedded, Brevo.

## 4. Publicar online (gratis)

Cualquiera de estos sirve para un sitio estático:

| Opción | Cómo |
|---|---|
| **Netlify Drop** | netlify.com/drop → arrastra la carpeta `relicario-web`. Listo en 30 s. |
| **Cloudflare Pages** | Conecta un repo o sube la carpeta. Dominio propio gratis. |
| **Vercel** | `vercel` en la carpeta, o subir por la web. |
| **GitHub Pages** | Sube a un repo, activa Pages en Settings. |

Después: comprar el dominio (`relicario.es`, `relicario.store`…) y apuntarlo al host.

## 5. Próximos pasos sugeridos

1. **Definir marca**: nombre definitivo (ahora "RELICARIO" es provisional), logo, dominio.
2. **Fotografía**: 9–15 piezas reales sobre fondo neutro, misma luz, vertical 4:5.
3. **Contenido real**: precios, procedencias, medidas, política de envíos y devoluciones.
4. **Conectar el formulario** a Formspree/Buttondown.
5. **Analítica discreta**: Plausible o Fathom (sin banner de cookies).
6. **Cuando quieras vender online**: migrar el catálogo a Shopify o mantener el
   sitio estático + pasarela (Stripe Payment Links) para pocas piezas.
7. **Tienda física** (Central de Diseño / Matadero u otro): licencia de actividad,
   alta de autónomo/SL, TPV, seguro, horario, cartel. Ver notas aparte.

---

Contacto de desarrollo: este proyecto se generó con Claude Code.
