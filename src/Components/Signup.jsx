import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-phone-input-2/lib/style.css'

const Signup = () => {
    const [isloading, setisloading] = useState(false)
    const [showing, setShowing] = useState(false);
    const [phone, setphone] = useState('');
    const show = () => {
        { showing ? setShowing(false) : setShowing(true) }
    }
    const handleOnChange = (value, country) => {
        console.log(value); // The selected phone number
        console.log(country); // The selected country object
        setphone(value); // Update the state with the selected phone number
    };

    return (
        <>
            <div>

            </div>
            <div className=' max-w-md h-screen  flex items-center justify-center mx-auto'>
                <div className=' w-[100%] bg-[rgb(27,27,27)] h-[100vh] p-2'>
                    <div className=' flex gap-20 py-4 px-2'>
                        <div className=' bg-gradient-to-r from-[rgb(140,219,236)] to-[rgb(231,134,246)] p-4 mx-2 relative text-center'>
                            <IoIosArrowBack size={40} className=' absolute top-0 right-0' />
                        </div>
                        <div className=' text-[rgb(231,134,246)] text-xl font-semibold'>Create Account</div>
                    </div>
                    <div>
                        <form action="">
                            <div className='px-4'>
                                <div className=' text-[rgb(140,219,236)]'>Fullname</div>
                                <div className='bg-gradient-to-r from-[rgb(140,219,236)] to-[rgb(231,134,246)] w-[99%] h-[38px] rounded-xl flex justify-center items-center relative'>
                                    <input className=' outline-none w-[99%] h-[34px] rounded-xl flex items-center justify-center px-2' type="text" />
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className=' text-[rgb(140,219,236)]'>Email Address</div>
                                <div className='bg-gradient-to-r from-[rgb(140,219,236)] to-[rgb(231,134,246)] w-[99%] h-[38px] rounded-xl flex justify-center items-center relative'>
                                    <input className=' outline-none w-[99%] h-[34px] rounded-xl flex items-center justify-center px-2' type="text" />
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className=' text-[rgb(140,219,236)]'>Password</div>
                                <div className='bg-gradient-to-r from-[rgb(140,219,236)] to-[rgb(231,134,246)] w-[99%] h-[38px] rounded-xl flex justify-center items-center relative'>
                                    <div className='bg-white w-[99%] h-[34px] rounded-xl flex items-center justify-between px-1'>
                                        <input className=' outline-none w-[99%] h-[34px] rounded-xl flex items-center justify-center px-2 bg-transparent' type={showing ? "text" : "password"} />
                                        <button className='show-pass' type='button' onClick={show}>{showing ? <FaEye /> : <FaEyeSlash />}</button>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className=' text-[rgb(140,219,236)]'>Phone Number</div>
                                <div className='bg-gradient-to-r from-[rgb(140,219,236)] to-[rgb(231,134,246)] w-[99%] h-[38px] rounded-xl flex justify-center items-center relative'>
                                    <ReactPhoneInput
                                        defaultCountry="NG" // Default country code
                                        value={phone}
                                        onChange={handleOnChange}
                                        inputStyle={{ width: '100%',borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center',height:'34px' }}
                                        placeholder='+2348149753152'
                                        className=' outline-none h-[34px] rounded-xl w-[99%]'
                                        buttonStyle={ {backgroundColor:'transparent',border:'none',outline:'none'}}
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span className=' text-white'>By creating an account, you agree to our</span>
                                <span>Terms and Conditions.</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup