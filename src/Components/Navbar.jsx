import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-blue-600 h-24 drop-shadow-lg font-serif overflow-x-hidden'>
       <div className='text-3xl mx-10 font-bold text-white h-full pt-7 flex justify-between
      '>
            <div>
              <h1>ZUMAXAA</h1>
            </div>
            <div className=' flex justify-around invisible sm:visible'>
              <button class="h-11 mr-5 md:h-12 px-6  text-lg text-black transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-500"><a target='_blank' href="https://goo.gl/maps/Pce9ByesaoSdmtdk9">Find Us</a></button>
              <button class="h-11 md:h-12 px-6  text-lg text-black transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-500"><a target='_blank' href="https://wa.me/918745948789">Book Now</a></button>
            </div>
       </div>
    </div>
  )
}

export default Navbar
// w-1/2 lg:w-1/3 xl:w-1/4
// pt-7 pl-6 lg:pl-28