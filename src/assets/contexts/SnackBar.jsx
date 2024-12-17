/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */


/**
 * Node modules
 */

import { createContext, useState, useRef, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const initialCTxVAlue = {
    snackbar: {
        open: false,
        message: '',
        type: 'info',
    },

    showSnackbar: ({message, type='info', timeout=5000}) => {},
    hideSnackbar: () => {},
}

export const SnackbarContext = createContext(initialCTxVAlue);

const SnackbarProvider = ({ children }) => {

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        type: 'info'
    });

    const timeoutRef = useRef();

    // show Snackbar
    const showSnackbar = useCallback(({ message, type = 'info', timeOut = 5000}) => {
        // clear any existing timeout to prevent overlap
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // set the snackbar
        setSnackbar({ open: true, message, type });

        // auto-hide the snackbar after timeout
        timeoutRef.current = setTimeout(() => {
            
        })
    });

    // Memoize the context value to prevent the unnecessary re-renders
    const contextValue = useMemo(() => {
        return { showSnackbar, hideSnackbar}
    }, [showSnackbar, hideSnackbar]);

    return (
        <SnackbarContext.Provider value={contextValue}>
            { children }
        </SnackbarContext.Provider>
    );
}

SnackbarProvider.propTypes = {
    children: PropTypes.any,
};

export default SnackbarProvider