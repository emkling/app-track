import React from 'react'
import error from '../assets/404.svg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <div className='flex flex-col justify-center items-center gap-8'>
        <img src={error} alt='error' className='w-[400px] sm:w-[700px]'/>
        <h3 className='text-4xl font'>Page not found </h3>
        <Link to='./' className='border-2 rounded-md p-2'> Return Home </Link>
        </div>

    </div>
  )
}

export default Error