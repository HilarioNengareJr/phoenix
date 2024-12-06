/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { Link, Form } from 'react-router-dom';

/**
 * Custom Modules
 */

import { logoLight, logoDark } from '../assets/assets';
/**
 * Components
 */

import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';



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
                            <h2 className=''>
                                Create an account
                                </h2>
                                <p className=''>
                                    Register today and gain access to powerful tools that will supercharge your ideas.
                                </p>

                                <Form method='POST' className=''>
                                    <TextField type='text' name='name' label='Full name' placeholder='Full name' required={true} autoFocus={true} />
                                    <TextField type='email' name='email' label='Email' placeholder='Email' required={true} />
                                    <TextField type='password' name='password' label='Password' placeholder='Enter your password' required={true} />
                                </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;