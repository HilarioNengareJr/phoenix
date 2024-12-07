/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import PropTypes from 'prop-types';

const TextField = ({
    classes = '',
    helperText,
    label,
    name,
    placeholder = '',
    fieldClasses,
    ...rest
}) => {
    return (
        <div className={`text-field-wrapper ${classes}`}>
            <label className='label-text'>
                {label}
            </label>
            <input className={`text-field ${fieldClasses}`} id={name} placeholder={placeholder} {...rest} /> 

            {helperText && <p className='helper-text'>{helperText}</p>}
        </div>
    );
};

TextField.PropTypes = {
    classes: PropTypes.string,
    helperText: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    fieldClasses: PropTypes.string,
}

export default TextField;