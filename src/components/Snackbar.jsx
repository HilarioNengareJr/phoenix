/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from 'prop-types';


const Snackbar = ({ snackbar }) => {
    return (
        <>
            {snackbar.open && (
                <div className={`snackbar ${snackbar.type}`}>
                    <span>
                        {snackbar.message}
                    </span>
                </div>
            )}
        </>
    )
}

Snackbar.PropTypes = {
    snackbar: PropTypes.object,
}

export default Snackbar;

