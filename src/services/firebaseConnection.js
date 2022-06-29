import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBdP5XEdMjtXZuvaw2zTry9KpmKW0AIk4k",
    authDomain: "calls-system-cf80b.firebaseapp.com",
    projectId: "calls-system-cf80b",
    storageBucket: "calls-system-cf80b.appspot.com",
    messagingSenderId: "336734677101",
    appId: "1:336734677101:web:047c432665f34f221a7764",
    measurementId: "G-G5R0TT0882"
};
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);