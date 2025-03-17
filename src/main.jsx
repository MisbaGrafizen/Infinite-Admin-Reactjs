import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';
import store from './redux/store.js';
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <StrictMode>
      <NextUIProvider>
        <BrowserRouter>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </NextUIProvider>
    </StrictMode>
    </Provider>

);
