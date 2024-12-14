/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { redirect } from 'react-router-dom';

/**
 * Custom modules
 */

import { account } from '../../lib/appwrite';
import generateID from '../../utils/generateID';

/**
 * Handles User Registration
 */
const registerAction = async ({ request }) => {
    // retrieve the form data from the incoming request
    const formData = await request.formData();

    try {
        await account.create(generateID, formData.get('email'), formData.get('password'), formData.get('name'));
    } catch (err) {
        return  {
            message: err.message
        }
    }

    try {
        await account.createEmailPasswordSession(formData.get('email'), formData.get('password'))
    } catch (err){
        console.log(`Error creating email session: ${err.message}`);
        return redirect('/login');
    }

    return redirect('/');
}

export default registerAction;
