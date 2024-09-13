import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPLcDTM7T-iGoLoDNzCgdfd9hPvU5sDJw",
  authDomain: "base-de-datos-react-coder.firebaseapp.com",
  projectId: "base-de-datos-react-coder",
  storageBucket: "base-de-datos-react-coder.appspot.com",
  messagingSenderId: "573949367706",
  appId: "1:573949367706:web:c4dbfd432fdbc12d1fd623"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
