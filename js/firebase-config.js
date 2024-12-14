import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyB6D2u3hxKuIHyNndMNkD9Q9mmE8rKAoec",
    authDomain: "berkleyfc-e8533.firebaseapp.com",
    projectId: "berkleyfc-e8533",
    storageBucket: "berkleyfc-e8533.firebasestorage.app",
    messagingSenderId: "800787511761",
    appId: "1:800787511761:web:903406c01d53dc6a2748f0",
    measurementId: "G-QP6YEPQEZQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);