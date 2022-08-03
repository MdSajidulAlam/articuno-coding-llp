import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsArrowLeftShort, BsCart3, BsTruck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import paypal from '../../assests/paypal.png'
import visa from '../../assests/visa.png'
import mastercard from '../../assests/mastercard.png'
import maestro from '../../assests/maestro.png'
import discover from '../../assests/discover.png'
import ideal from '../../assests/ideal.png'
import inpost from '../../assests/inpost.png'
import dpd from '../../assests/dpd.png'
import dhl from '../../assests/dhl.png'
import fedex from '../../assests/fedex.png'

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
        <div className='w-11/12 mx-auto'>
            <div className="divider"></div>
            <section className=''>
                <div className='flex justify-between py-8'>
                    <div>Shipping and Payment</div>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-2xl border border-primary rounded-full p-3'><BsCart3 /></h1>
                        <div className=' w-[50px] h-[1px] bg-gray-700 rounded-full mx-3'></div>
                        <h1 className='text-2xl p-3 bg-primary rounded-full text-white'><BsTruck /></h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <div>
                        <button onClick={navigateLogin} className='btn btn-primary text-white rounded-full px-6'>LOG IN</button>
                        <button onClick={navigateSignup} className='btn hover:text-white bg-white text-black rounded-full px-6 ml-5 mb-5'>SIGN UP</button>
                        <h1 className='my-4'>Shipping Information</h1>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            <div>
                                <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs rounded-full my-2" />
                                <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs rounded-full my-2" />
                                <input type="text" placeholder="Last Name" class="input input-bordered w-full max-w-xs rounded-full my-2" />
                                <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs rounded-full my-2" />
                            </div>
                            <div>
                                <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs rounded-full my-2" />
                                <input type="text" placeholder="City" class="input input-bordered w-full max-w-xs rounded-full my-2" />
                                <input type="text" placeholder="Postal Code/ ZIP" class="input input-bordered w-full max-w-xs rounded-full my-2" />
                                <input type="text" placeholder="Poland" class="input input-bordered w-full max-w-xs rounded-full my-2" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Payment Method</h1>
                        <div className=''>
                            <div className='flex'>
                                <div className='rounded-full px-6  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[40px]' src={paypal} alt="" />
                                </div>
                                <div className='rounded-full px-6  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[40px]' src={visa} alt="" />
                                </div>
                                <div className='rounded-full px-6  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[40px]' src={mastercard} alt="" />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='rounded-full px-6  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[40px]' src={maestro} alt="" />
                                </div>
                                <div className='rounded-full px-6  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[40px]' src={discover} alt="" />
                                </div>
                                <div className='rounded-full px-6  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[40px]' src={ideal} alt="" />
                                </div>
                            </div>
                        </div>
                        <h1 className='mt-5'>Delivery Method</h1>
                        <div>
                            <div className='flex'>
                                <div className='flex justify-between items-center rounded-full px-6 py-2 border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[30px]' src={inpost} alt="" />
                                    <h2>$20.00</h2>
                                </div>
                                <div className='flex justify-between items-center rounded-full px-6 py-2  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[30px]' src={dpd} alt="" />
                                    <h2>$12.00</h2>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex justify-between items-center rounded-full px-6 py-2  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[30px]' src={dhl} alt="" />
                                    <h2>$15.00</h2>
                                </div>
                                <div className='flex justify-between items-center rounded-full px-6 py-2  border border-gray-500 m-3'>
                                    <img className='w-[60px] h-[30px]' src={fedex} alt="" />
                                    <h2>$10.00</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Your Cart</h1>
                        <div className='flex justify-between items-center my-5'>
                            <div className='flex'>
                                <img className='rounded-full w-[60px] mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0GgFUZpYSvD_gibMbb0POqksmCfh2yFFiQ&usqp=CAU" alt="" />
                                <h1>T-Shirt <br /> Summer Vives</h1>
                            </div>
                            <div>
                                <h2 className='ml-4'>$89.00</h2>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <img className='rounded-full w-[60px] mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91jypBT3wIcUYYnsbJM9-2JrVqw6G74QDow&usqp=CAU" alt="" />
                                <h1>Basic Slim <br /> Fit T-Shirt</h1>
                            </div>
                            <div>
                                <h2 className='ml-4'>$89.00</h2>
                            </div>
                        </div>
                        <button className='btn hover:text-white bg-white text-black rounded-full px-6 ml-5 my-6'>Total Cost  $159.00</button>
                        <div className='flex my-6'>
                            <div className='flex justify-center items-center mr-4'>
                                <h1 className='text-2xl '><BsTruck /></h1>
                            </div>
                            <h1>You are $32.00 away <br /> from free shipping!</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-between items-center'>
                <div className='flex'>
                    <h1 className='text-2xl'><BsArrowLeftShort /></h1>
                    <h1>Back</h1>
                </div>
                <div>
                    <button className='btn hover:text-white bg-white text-black rounded-full px-6 ml-5 mb-5 '>Continue Shopping</button>
                    <button className='btn btn-primary rounded-full px-6 ml-5 mb-5'>Proceed To Payment</button>
                </div>
            </section>
        </div>
    );
};

export default Payment;