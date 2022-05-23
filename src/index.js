import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCT6JEHk7eOE-YgKF9stn5Qhirxj9BCDws",
  authDomain: "cellular-axon-317623.firebaseapp.com",
  projectId: "cellular-axon-317623",
  storageBucket: "cellular-axon-317623.appspot.com",
  messagingSenderId: "1019825400052",
  appId: "1:1019825400052:web:ebbc2e325a207e617856a1"
};

initializeApp(firebaseConfig);

createRoot(
  document.getElementById('root')
).render(
    <App />
)