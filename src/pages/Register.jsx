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

import { logoLight, logoDark, banner } from '../assets/assets';
/**
 * Components
 */

import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import { Button } from '../components/Button';



const Register = () => {
    return (
        <>
            <PageTitle title='Phoenix | Create an account' />
            <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr, 1.2fr] lg:gap-2'>
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
                                <Button type='submit'>
                                    Create account
                                </Button>
                            </Form>

                            <p className=''>
                                Already have an account ?
                                <Link to='/login' className=''>
                                Sign in
                                </Link>
                            </p>
                        </div>
                    </div>

                    <p className=''>
                        &copy; 2024 Hilario Junior Nengare. All rights reserved.
                    </p>
                </div>
                
                <div className=''>
                    <img src={banner} alt='' className='' />
                    <p className='img-cover'>
                        Chat with Phoenix to supercharge your ideas.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Register;