import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const navigateSignup = () => {
        navigate('/singup')
    }

    return (
        <div>
            <button onClick={navigateLogin} className='btn btn-primary text-white rounded-full px-6'>LOG IN</button>
            <button onClick={navigateSignup} className='btn hover:text-white bg-white text-black rounded-full px-6'>SIGN UP</button>
        </div>
    );
};

export default Payment;