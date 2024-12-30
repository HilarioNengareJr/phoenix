/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Context
 */
import { useContext } from 'react';
import { SnackbarContext } from '../../contexts/SnackbarContext';
import Snackbar from '../../components/Snackbar';

export const useSnackbar = () => useContext(SnackbarContext);

