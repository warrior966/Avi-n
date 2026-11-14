# Avi-n · Panel de salidas

Aplicación web con dos páginas HTML y Firebase Firestore en tiempo real.

## Archivos
- `index.html`: panel público de vuelos y avisos a pantalla completa.
- `admin.html`: inicio de sesión, gestión de vuelos y avisos.
- `firebase-config.js`: configuración compartida de Firebase.
- `firestore.rules`: reglas de acceso de Firestore.

## Puesta en marcha
1. En Firebase Console abre el proyecto `avion-a2b5e` y crea Cloud Firestore.
2. En Authentication habilita **Correo electrónico/Contraseña** y crea el usuario administrador.
3. Copia su UID desde Authentication > Users.
4. En Firestore crea `users/{UID}` (el ID del documento debe ser exactamente el UID) con el campo `role`, tipo string, valor `admin`.
5. Publica `firestore.rules` en Firestore > Reglas.
6. Publica los archivos en un servidor estático (GitHub Pages o Firebase Hosting). No abras los HTML como `file://`.

## Avisos
Desde `admin.html`, un administrador escribe el título y el mensaje y pulsa **Publicar aviso en pantalla**. El aviso aparece inmediatamente en pantalla completa en `index.html`, incluso en las pantallas que ya estén abiertas. Permanece visible hasta que un administrador pulse **Retirar aviso de pantalla** en el panel. No hay botón de cierre en el panel público. El aviso se guarda en `notices/current` y se sincroniza en tiempo real.

## Vuelos
Colección `flights`: `flightNumber`, `airline`, `destination`, `departureTime`, `gate`, `status`, `createdAt`, `updatedAt`.

## Seguridad
El panel comprueba `users/{UID}.role == "admin"`. Las reglas reservan la escritura de vuelos y avisos a administradores. Los usuarios no pueden modificar documentos de `users` desde el navegador; asigna roles manualmente desde Firebase Console.
