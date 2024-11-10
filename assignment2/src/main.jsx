import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from './reducer/index.js';
// import { Provider } from 'react-redux';

// const store = configureStore({
//   reducer: rootReducer,
// });
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <App />
  </StrictMode>,
)
