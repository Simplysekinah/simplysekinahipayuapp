import React,{useState} from 'react'

const Props = ({content,onClick}) => {
  const [buttondisabled, setbuttondisabled] = useState(false)
  return (
    <>
        <div className=' bg-gradient-to-r from-[rgb(140,219,236)] to-[rgb(231,134,246)] rounded-2xl shadow-md hover:from-[rgb(140,219,236)] hover:to-[rgb(231,134,246)] text-center w-[250px] text-2xl font-semibold text-white flex items-center py-5 justify-center' onClick={onClick} diasabled={buttondisabled}>{content}</div>
    </>
  )
}

export default Props