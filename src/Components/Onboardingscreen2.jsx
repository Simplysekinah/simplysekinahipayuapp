import React,{useEffect} from 'react'
import Props from './Props'
import onbimg2 from '../assets/onbd2.png'
import { useNavigate, } from 'react-router-dom'

const Onboardingscreen2 = () => {
    const navigate = useNavigate()
    useEffect(() => {
      
        setTimeout(()=>{
          navigate('/onboarding3')
        },3000)
    }, [])
    
  const skip=()=>{
    navigate('/onboarding3')
  }
  return (
    <>
        <div className=' w-[100%] h-[100vh] flex items-center justify-center bg-[rgb(27,27,27)] p-4'>
            <div className=' max-w-[390px]: h-[100vh]'>
              <div className=' flex flex-col gap-10'>
                <div className=' font-normal text-2xl text-[rgb(215,3,17)] text-right py-4' onClick={skip}>Skip</div>
                <div>
                    <img src={onbimg2} alt="" />
                </div>
                <div className=' text-center flex flex-col gap-4'>
                  <div className=' text-[rgb(231,134,246)] text-2xl font-semibold'>Send money quickly</div>
                  <div className=' text-white text-base font-semibold'>send and receive money almost immediately</div>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <div className='w-4 h-4 rounded-full bg-gradient-to-r from-[rgb(140,219,236)] to-[rgb(231,134,246)]'></div>
                  <div className=' w-4 h-4 rounded-full bg-white'></div>
                  <div className=' w-4 h-4 rounded-full bg-white'></div>
                </div>
                <div className=' flex items-center justify-center flex-col gap-8'>
                  <Props content='Sign Up'/>
                  <Props content='Continue'/>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Onboardingscreen2