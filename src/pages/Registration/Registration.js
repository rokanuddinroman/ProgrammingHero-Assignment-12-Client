import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import BlueLoading from '../../components/Loading/BlueLoading';
import LightLoading from '../../components/Loading/LightLoading';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || googleUser)
    let authError;
    if (error || googleError || updateError) {
        authError = <p className='text-red-500'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }

    if (token) {
        navigate(from, { replace: true })
    }


    const onSubmit = async data => {
        if (data.password !== data.confirmpassword) {
            toast.error('Your Password Didnt Matched')
            return;
        }
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name, photoURL: 'https://cdn.dribbble.com/users/1176657/screenshots/15468294/media/34af996ddff444391edab94abcf3c7f3.png?compress=1&resize=400x300&vertical=top' })
        toast.success('Verification Mail Sent')
    }

    return (
        <div className='mt-[56px] max-w-7xl mb-6 mx-auto login-container'>
            <div className='mt-8 mr-8' style={{ borderRight: "1px solid black" }}></div>
            <div className='mt-8 w-[80%]'>
                <div className='options'>
                    <NavLink className='options-link' to='/login'>Login</NavLink>
                    <NavLink className='options-link' to='/registration'>Create a new account</NavLink>
                </div>
                <h1 className='my-5 flex items-center text-3xl font-bold'><FaUserCircle className='mr-2 text-4xl text-[#00BA33] bg-[#e6f8ec] p-[6px] rounded-[50%]' />Registration</h1>
                <button onClick={() => signInWithGoogle()} className='mt-8 outline-button flex items-center justify-center'>{
                    googleLoading ? <LightLoading /> :
                        <>
                            <FcGoogle className='inline mr-4 text-[18px]' />Sign in with Google
                        </>
                }</button>
                <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider">OR</div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' pb-3'>
                        <label htmlFor="name" className='font-[500]'>Name</label>
                        <input
                            id="name"
                            className='form-input'
                            type="text"
                            placeholder="Elon Musk"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                        <div classname="error-message">
                            {errors.name?.type === 'required' && <span className="block text-right text-red-500 text-sm">{errors.name.message}</span>}
                        </div>
                    </div>
                    <div className=' pb-3'>
                        <label htmlFor="email" className='font-[500]'>Email</label>
                        <input
                            id="email"
                            className='form-input'
                            type="email"
                            placeholder="user@email.com"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                        <div classname="error-message">
                            {errors.email?.type === 'required' && <span className="block text-right text-red-500 text-sm">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="block text-right text-red-500 text-sm">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="password" className='font-[500]'>Password</label>
                        </div>
                        <input
                            id="password"
                            className='form-input'
                            type="password"
                            placeholder="at least 6 characters"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                        {errors.password?.type === 'required' && <span className="block text-right text-red-500 text-sm">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="block text-right text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                    <div className='pb-5'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="confirmpassword" className='font-[500]'>Confirm Password</label>
                        </div>
                        <input
                            id="confirmpassword"
                            className='form-input'
                            type="password"
                            placeholder="at least 6 characters"
                            {...register("confirmpassword", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                        {errors.confirmpassword?.type === 'required' && <span className="block text-right text-red-500 text-sm">{errors.confirmpassword.message}</span>}
                        {errors.confirmpassword?.type === 'minLength' && <span className="block text-right text-red-500 text-sm">{errors.confirmpassword.message}</span>}
                    </div>
                    {authError}

                    {
                        loading || updating ? <><button className='submit-button'><BlueLoading /></button></>
                            :
                            <><input className='submit-button' value="Registration" type="submit" /></>
                    }
                </form>
            </div>
        </div>
    );
};

export default Registration;