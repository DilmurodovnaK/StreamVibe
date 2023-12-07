import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from "@material-tailwind/react";
import './assets/global.css';

import Home from './pages/Home.jsx';
import Shows from './pages/Shows.jsx';












ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider>
    <App />
    <BrowserRouter/>
    </ThemeProvider>
  </React.StrictMode>,
)
