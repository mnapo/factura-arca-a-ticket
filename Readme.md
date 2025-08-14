# Factura ARCA a Ticket
Conversor de factura PDF de ARCA (https://www.arca.gob.ar/) a un ticket representativo (para impresoras térmicas).
El output es HTML por defecto.
Se puede modificar a PDF (ver comentarios).
El CSS esta diseñado para que el output sea impreso con las medidas de un ticket comercial.

## Instalación
<code>npm install</code>

Completar .env:
<ul>
  <li>Datos del Emisor</li>
  <li>URI local o dominio en su defecto</li>
</ul>

## Uso
<code>node server.js</code>
Ingresar a http://localhost:80, seleccionar archivo PDF y presionar enviar.
Esperar a que el ticket se genere e imprimimr mediante el navegador o aplicación de impresión predeterminada.

## Archivado
Esta versión ha quedado en desuso. El objetivo de esta app fue retomado por "Ticketeador":
- https://github.com/mnapo/impresora-termica-frontend
- https://github.com/mnapo/impresora-termica-sv
