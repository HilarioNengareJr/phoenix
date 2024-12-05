/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

/**
 * Custom Modules
 */

import router from './routers/routes.jsx';

/**
 * CSS link
 */

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
