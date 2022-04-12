import React from 'react'
import { Logo } from '../components'
import career from '../assets/career.svg'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='  h-screen w-full'>
        <nav className='flex justify-between pr-10 pl-10 '>
            <div   className='w-[90px] sm:w-[120px]'> 
                <Logo />
            </div>
            <div className='flex justify-center items-center'>
            <Link to='./register' className='rounded-md border-2 p-2 sm:p-4 py-2'>Login </Link>
             </div>
        </nav>
        <div className='flex flex-row justify-center items-center gap-16 flex-wrap mt-40'>
            <div className='flex flex-col justify-center items-center gap-8'> 
            <h1 className='text-2xl text-center sm:text-4xl font-bold '>Track Your Job Applications</h1>
            <div className='pb-4'> 
                App track allows you to log application submissions <br /> so you can stay organized during your employment search.
            </div>
            
            <div>
                < Link to='./register' className='text-center p-2 sm:p-4 border-2 rounded-md'> Get Started Today</Link> 
            </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-10'> 
            <img src={career} alt='career' className='w-[200px] sm:w-[500px]' />
            <div> 
            
            </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage