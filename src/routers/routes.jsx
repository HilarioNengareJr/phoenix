/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { createBrowserRouter } from "react-router-dom";

/**
 * Components
 */

import App from '../App';
import Register from "../pages/Register";

/**
 * Router
 */

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        
    }
]);

export default router;