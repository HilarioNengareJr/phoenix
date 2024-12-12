/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { account } from '../../lib/appwrite';

/**
 * Handles User Registration
 */
const registerAction = async ({request}) => {
    // retrieve the form data from the incoming request
    const formData = await request.formData();
    console.log(formData);

    return null;
}

export default registerAction;
