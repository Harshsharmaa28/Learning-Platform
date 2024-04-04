import React from 'react'


const Footer = () => {
  return (
    <div className=' bg-black w-full h-[444px] flex text-white rounded-2xl'>
      <img className=' w-[12rem] h-[12rem] -mt-8 -ml-10' src="./assests/circle.png" alt="error" />
      <div className=' py-20 flex px-24 gap-36'>
        <div className=' flex text-white flex-col'>
          <div className=' font-semibold text-xl'>Qucik Links</div>
          <br />
          <div>Home</div>
          <div>Scholarship</div>
          <div>Mentorship</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className=' flex text-white flex-col'>
          <div className=' font-semibold text-xl'>Qucik Links</div>
          <br />
          <div>Home</div>
          <div>Scholarship</div>
          <div>Mentorship</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
      </div> 
      <div className='flex'>
        <div className=' ml-36 py-20'>
          <img src="./assests/icon.png" alt="" />
          <div className=' mt-4 flex w-[20rem] flex-wrap'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aspernatur soluta! Assumenda eligendi esse architecto ullam nulla consequuntur minus culpa illo eque. Id?</div>
          <button
            type="button"
            className=" mt-8 w-[10rem] bg-white rounded-3xl border border-black px-3 py-2 text-sm text-black font-bold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            JOIN NOW
          </button>
        </div>
        <img className=' overflow-hidden absolute mt-[14.5%] ml-[40%] w-[14rem] h-[14rem]' src="./assests/triangle.png" alt="" />
      </div>
    </div>
  )
}

export default Footer
