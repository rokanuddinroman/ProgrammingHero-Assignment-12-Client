import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import BlueLoading from '../../components/Loading/BlueLoading';
import auth from '../../firebase.init';

const ForgetPassword = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        toast.success('Sent email')
    }
    return (
        <div className='mt-[56px] mb-6 mx-auto login-container'>
            <div className='mt-8 mr-8' style={{ borderRight: "1px solid black" }}></div>
            <div className='mt-8 w-[450px] mx-auto bg-white p-6 my-6 rounded-[12px]'>
                <div className='options'>
                    <NavLink className='options-link' to='/login'>Login</NavLink>
                    <NavLink className='options-link' to='/reset'>Reset</NavLink>
                </div>
                <h1 className='my-5 flex items-center text-3xl font-bold'><FaUserCircle className='mr-2 text-4xl text-[#00BA33] bg-[#e6f8ec] p-[6px] rounded-[50%]' />Reset Password</h1>
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
                    {
                        sending ? <><button className='submit-button'><BlueLoading /></button></>
                            :
                            <><input className='submit-button' value="Reset" type="submit" /></>
                    }
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;