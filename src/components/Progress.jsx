/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import PropTypes from 'prop-types';

/**
 * Circular Progress 
 */

const CircularProgress = ({ classes = '', size = '' }) => {

    return (
        <div role='progressbar' className={`circular-progress ${size} ${classes}`}>

        </div>
    )
};

CircularProgress.propTypes = {
    classes: PropTypes.string,
    size: PropTypes.string,
};

/***
 * Linear Progress
 */

const LinearProgress = ({classes = ''}) => {
    return (
        <div className = {`linear-progress ${classes}`}>
            <div className="active-indicator">
                
            </div>
        </div>
    );
}

LinearProgress.propTypes = {
    classes: PropTypes.string,
}

export { CircularProgress, LinearProgress };