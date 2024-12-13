/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

export default function generateID(){
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

