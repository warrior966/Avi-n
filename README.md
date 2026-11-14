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
3. En Authentication habilita el proveedor **Correo electrónico/Contraseña** y crea el usuario que administrará el panel.
4. Despliega `firestore.rules` en Firestore (pestaña Reglas).
5. Concede al usuario administrador el custom claim `admin: true` desde un entorno de confianza que use Firebase Admin SDK. Ejemplo de script Node.js ejecutado localmente con credenciales de una cuenta de servicio protegida:

```js
const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

initializeApp({ credential: cert(require('./service-account.json')) });
getAuth().setCustomUserClaims('UID_DEL_USUARIO', { admin: true })
  .then(() => console.log('Permiso admin asignado'));
```

Obtén el UID del usuario en Authentication > Users. **No subas** `service-account.json` ni claves privadas al repositorio. Tras asignar el claim, cierra sesión y vuelve a entrar para renovar el token.
6. Publica los archivos con un servidor estático (por ejemplo GitHub Pages o Firebase Hosting). No abras los HTML como `file://`; los módulos JavaScript necesitan un servidor HTTP/HTTPS.

## Datos de cada vuelo
Colección `flights`: `flightNumber`, `airline`, `destination`, `departureTime` (fecha ISO local), `gate`, `status` (`boarding`, `ontime`, `delayed`, `departed`, `cancelled`), `createdAt`, `updatedAt`.

## Seguridad
La configuración web incluida identifica el proyecto Firebase, pero no concede por sí sola acceso administrativo. Las reglas permiten lectura pública de los vuelos y reservan todas las escrituras a usuarios con el custom claim `admin: true`. No uses reglas abiertas en producción.
