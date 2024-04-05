import React from 'react'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
    <div className=' flex justify-center gap-20 py-4'>
      <div className=' flex gap-20 items-center'>
        <div className=' font-medium hover:cursor-pointer'>Home</div>
        <div className=' font-medium hover:cursor-pointer'>Academics</div>
        <div className=' font-medium hover:cursor-pointer'>Mentors</div>
      </div>
      <img className=' hover:cursor-pointer w-[12rem] h-[3.5rem]' src="./assests/Bicon.png" alt="error" />
      <div className=' items-center flex gap-20'>
        <div className=' font-medium hover:cursor-pointer'>About Us</div>
        <div className=' font-medium hover:cursor-pointer'>Contact Us</div>
        <button
          type="button"
          className=" flex rounded-md bg-black px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Register
          <ArrowRight className=" mt-1 ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
