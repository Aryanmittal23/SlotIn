import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StoreContextProvider } from './context/StoreContext.tsx'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StoreContextProvider>
  <MantineProvider>
  <App />
  </MantineProvider>
    
  </StoreContextProvider>
  </BrowserRouter>
)
