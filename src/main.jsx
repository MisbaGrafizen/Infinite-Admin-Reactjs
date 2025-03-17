import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';

import { SnackbarProvider } from 'notistack'


createRoot(document.getElementById('root')).render(

    <StrictMode>
      <NextUIProvider>
        <BrowserRouter>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </NextUIProvider>
    </StrictMode>


);
