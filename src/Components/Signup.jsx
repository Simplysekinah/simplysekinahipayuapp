import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const Signup = () => {
  return (
    <>
        <div className=' max-[390px]: h-screen  flex items-center justify-center bg-[rgb(27,27,27)] p-4'>
            <div className=' w-[100%] h-[100vh]'>
                <div className=' flex gap-20'>
                    <div className=' bg-gradient-to-r from-[rgb(140,219,236)] to-[rgb(231,134,246)] p-4 relative text-center'>
                        <IoIosArrowBack size={40} className=' absolute top-0 right-0' />
                    </div>
                    <div className=' text-[rgb(231,134,246)] text-xl font-semibold'>Create Account</div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Signup