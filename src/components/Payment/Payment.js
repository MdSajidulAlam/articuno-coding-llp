import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Payment = () => {
    const user = useAuthState(auth)
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const navigateSignup = () => {
        navigate('/signup')
    }

    return (
        <div>
            <div className="divider"></div>
            <button onClick={navigateLogin} className='btn btn-primary text-white rounded-full px-6'>LOG IN</button>
            <button onClick={navigateSignup} className='btn hover:text-white bg-white text-black rounded-full px-6'>SIGN UP</button>
        </div>
    );
};

export default Payment;