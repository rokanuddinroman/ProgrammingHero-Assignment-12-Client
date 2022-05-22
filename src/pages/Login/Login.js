import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import '../../styles/Login.css'
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const onSubmit = data => {
    }

    return (
        <div className='max-w-7xl mx-auto login-container'>
            <div className='mt-8 mr-8' style={{ borderRight: "1px solid black" }}></div>
            <div className='mt-8 w-[80%]'>
                <div className='options'>
                    <NavLink className='options-link' to='/login'>Login</NavLink>
                    <NavLink className='options-link' to='/registration'>Create a new account</NavLink>
                </div>

                <button onClick={() => signInWithGoogle()} className='mt-8 outline-button flex items-center justify-center'><FcGoogle className='inline mr-4 text-[18px]' />Sign in with Google</button>
                <hr className='my-4' />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' pb-3'>
                        <input
                            className='form-input'
                            type="email"
                            placeholder="Your Email"
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
                            {errors.email?.type === 'required' && <span className="text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className='pb-5'>
                        <input
                            className='form-input'
                            type="password"
                            placeholder="Your Password"
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
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </div>

                    <input className='submit-button' value="Login" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;