/**
 * @copyright 2024 Hilario Junior Nengare
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { useEffect } from 'react';
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';

/**
 * Assets
 */
import { logoLight, logoDark, banner } from '../assets/assets';


/**
 * Custom Hooks
 */
import { useSnackbar } from '../lib/hooks/useSnackbar';

/**
 * Components
 */
import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress } from '../components/Progress';



const Register = () => {

    const error = useActionData();

    const navigation = new useNavigation();

    const { showSnackbar } = useSnackbar();

    useEffect(() => {
        // show snackbar with error message
        if(error?.message){
            showSnackbar({ message: error.message, type: 'error',});
        }
    }, [error, showSnackbar]);

    return (
        <>
            <PageTitle title='Phoenix | Create an account' />
            <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
                <div className='flex flex-col p-4'>
                    <Link to='/' className='max-w-max mb-auto mx-auto lg:mx-0'>
                        <img src={logoLight} alt='phoenix logo' width={133} height={24} className='dark:hidden' />
                        <img src={logoDark} alt='phoenix logo dark' width={133} height={24} className='hidden dark:block' />
                    </Link>

                    <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>

                        <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
                            Create an account
                        </h2>
                        <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
                            Register today and gain access to powerful tools that will supercharge your ideas.
                        </p>

                        <Form method='POST' className='grid grid-cols-1 gap-4'>
                            <TextField type='text' name='name' label='Full name' placeholder='Full name' required={true} autoFocus={true} />
                            <TextField type='email' name='email' label='Email' placeholder='Email' required={true} />
                            <TextField type='password' name='password' label='Password' placeholder='Enter your password' required={true} />
                            <Button type='submit' disabled={navigation.state === 'submitting'}>
                                {navigation.state === 'submitting' ? (<CircularProgress size='small' />) : ('Create account')}
                            </Button>
                        </Form>

                        <p className='text-bodyMedium text-light-onSurfaceVariant text-center mt-4'>
                            Already have an account ?
                            <Link to='/login' className='link inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'>
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
                        &copy; 2024 Hilario Junior Nengare. All rights reserved.
                    </p>
                </div>

                <div className='hidden img-box h-dvh lg:block lg:relative lg:rounded-large'>
                    <img src={banner} alt='' className='img-cover' />
                    <p className='absolute bottom-10 left-10 right-10 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl-sm[72px]'>
                        Chat with Phoenix to supercharge your ideas.
                    </p>
                </div>
            </div>

            <LinearProgress classes="absolute top-0 left-0 right-0"/>
        </>
    );
}

export default Register;