import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEAtT8xsu0HQ7zL3A2XzoH7CuGhNZKkx8",
  authDomain: "zstore-ecommerce.firebaseapp.com",
  projectId: "zstore-ecommerce",
  storageBucket: "zstore-ecommerce.appspot.com",
  messagingSenderId: "532974603384",
  appId: "1:532974603384:web:2f8f6f6e0dff6a2cf7f18d"
};


const app = initializeApp(firebaseConfig);

createRoot(
  document.getElementById('root')
).render(
    <App />
)