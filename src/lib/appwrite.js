/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { Client, Account } from 'appwrite';

/**
 * Initial Appwrite Client
 */
const client = new Client();
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID).setEndpoint('https://cloud.appwrite.io/v1');

/**
 * Initial Appwrite Account
 */
const account = new Account(client);

export { account };