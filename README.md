# Avi-n · Panel de salidas

Aplicación web con dos páginas HTML y Firebase Firestore en tiempo real.

## Archivos
- `index.html`: panel público de vuelos.
- `admin.html`: inicio de sesión y gestión de vuelos (crear, editar y eliminar).
- `firebase-config.js`: configuración compartida de Firebase.
- `firestore.rules`: reglas de acceso de Firestore.

## Puesta en marcha
1. En Firebase Console abre el proyecto `avion-a2b5e`.
2. Crea una base de datos Cloud Firestore.
3. En Authentication habilita el proveedor **Correo electrónico/Contraseña** y crea el usuario administrador.
4. Copia el UID de ese usuario desde Authentication > Users.
5. En Firestore Database > Datos, crea la colección `users`. Dentro, crea un documento cuyo ID sea exactamente el UID copiado. Añade el campo:
   - Nombre: `role`
   - Tipo: `string`
   - Valor: `admin`
6. Despliega el contenido de `firestore.rules` en Firestore (pestaña Reglas) y pulsa **Publicar**.
7. Publica los archivos con un servidor estático (por ejemplo GitHub Pages o Firebase Hosting). No abras los HTML como `file://`; los módulos JavaScript necesitan un servidor HTTP/HTTPS.
8. Entra en `admin.html` con el correo y contraseña del usuario. Si ya estaba conectado, cierra sesión y vuelve a entrar.

## Datos de cada vuelo
Colección `flights`: `flightNumber`, `airline`, `destination`, `departureTime` (fecha ISO local), `gate`, `status` (`boarding`, `ontime`, `delayed`, `departed`, `cancelled`), `createdAt`, `updatedAt`.

## Roles y seguridad
El panel comprueba el documento `users/{UID}` y exige que su campo `role` sea la cadena `admin`. Las reglas de Firestore usan esa misma comprobación para autorizar cambios en `flights`. Los usuarios no pueden crear ni modificar documentos de `users` desde la web; asigna los roles manualmente desde Firebase Console, con acceso de propietario/administrador al proyecto. **No permitas que el propio usuario cambie su rol desde el navegador.**
