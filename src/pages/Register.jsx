/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { Link } from 'react-router-dom';

/**
 * Custom Modules
 */

import { logoLight, logoDark } from '../assets/assets';
/**
 * Components
 */

import PageTitle from '../components/PageTitle';


const Register = () => {
    return (
        <>
            <PageTitle title='Phoenix | Create an account' />
            <div className=''>
                <div className=''>
                    <Link>
                        <img src={logoLight} alt='phoenix logo' width={133} height={24} className='' />
                        <img src={logoDark} alt='phoenix logo dark' width={133} height={24} className='' />
                    </Link>

                    <div className=''>
                        <div className=''>
                            Create an account
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;