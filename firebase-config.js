// Configuración pública de Firebase para la aplicación web.
// Las claves web de Firebase no son contraseñas: protege los datos con Authentication y Rules.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPYTjMqU9Vzi6EkQP0k1N16H6GOohw5M8",
  authDomain: "avion-a2b5e.firebaseapp.com",
  projectId: "avion-a2b5e",
  storageBucket: "avion-a2b5e.firebasestorage.app",
  messagingSenderId: "21960906522",
  appId: "1:21960906522:web:ab1398211cca55070bfea3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);