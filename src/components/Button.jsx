/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import PropTypes from "prop-types";

/**
 * Common Button
 */

const Button = ({
    classes = '',
    variant = 'filled',
    color = 'primary',
    children,
    ...rest
}) => {
    <button className={`btn ${variant} ${color}`} {...rest}>
        {children}

        <div className="state-layer"></div>
    </button>
}