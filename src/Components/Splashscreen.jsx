import React from 'react'
import logo from '../assets/iPAYu.png'
import { useNavigate } from 'react-router-dom'

const Splashscreen = () => {
  const navigate = useNavigate()
  setTimeout(()=>{
      navigate('/onboarding1')
  },3000)
  return (
    <div>
        <div className=' bg-[rgb(27,27,27)] flex items-center justify-center w-[100%] h-[100vh]'>
            <div className=' max-[390px]:'>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Splashscreen