import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1jGL14XHflpTz1-SYaSwBL6RdW0Ody54",
  authDomain: "coderappi.firebaseapp.com",
  projectId: "coderappi",
  storageBucket: "coderappi.appspot.com",
  messagingSenderId: "282918274048",
  appId: "1:282918274048:web:07a0305c4379062f9084e5"
};


const app = initializeApp(firebaseConfig);


import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
