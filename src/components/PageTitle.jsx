/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */


/**
 * Node Modules
 */

import { Helmet } from "react-helmet";
import React from 'react';
import PropTypes from "prop-types";

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>
                {title}
            </title>
        </Helmet>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string,
}

export default PageTitle;