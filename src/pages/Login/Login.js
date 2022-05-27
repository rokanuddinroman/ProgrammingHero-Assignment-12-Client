import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import '../../styles/Login.css'
import { FaUserCircle } from 'react-icons/fa';
import LightLoading from '../../components/Loading/LightLoading';
import BlueLoading from '../../components/Loading/BlueLoading';
import useToken from '../../hooks/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const [token] = useToken(user || googleUser)


    let authError;

    if (error || googleError) {
        authError = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
    }
    if (token) {
        navigate(from, { replace: true })
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='mt-[56px] mx-auto login-container'>
            <div className='mt-8 mr-8' style={{ borderRight: "1px solid black" }}></div>
            <div className='mt-8 w-[450px] mx-auto bg-white p-6 my-6 rounded-[12px]'>
                <div className='options'>
                    <NavLink className='options-link' to='/login'>Login</NavLink>
                    <NavLink className='options-link' to='/registration'>Create a new account</NavLink>
                </div>
                <h1 className='my-5 flex items-center text-3xl font-bold'><FaUserCircle className='mr-2 text-4xl text-[#00BA33] bg-[#e6f8ec] p-[6px] rounded-[50%]' />Sign In</h1>

                <button onClick={() => signInWithGoogle()} className='mt-8 outline-button flex items-center justify-center'>{
                    googleLoading ? <LightLoading /> :
                        <>
                            <FcGoogle className='inline mr-4 text-[18px]' />Sign in with Google
                        </>
                }
                </button>
                <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider">OR</div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                            <Link className='text-[#0077FF] text-sm' to="/reset">Forget Password?</Link>
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
                    {authError}

                    {
                        loading ? <><button className='submit-button'><BlueLoading /></button></>
                            :
                            <><input className='submit-button' value="Login" type="submit" /></>
                    }
                </form>
            </div>
        </div>
    );
};

export default Login;