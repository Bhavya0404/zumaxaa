import React from 'react'

const Section1 = () => {
  return (
    <div className='w-full h-screen'>
        <div className='opacity-90'>
            <img src={require('../assets/images/image1.jpg')} alt="Dental" 
            className='top-0 left-0 object-cover h-screen w-full' />
        </div>

        <div className='bg-black/30 absolute top-24 left-0 w-full h-screen' >
            <div className='absolute w-11/12 mt-[-44px] h-auto font-serif overflow-x-hidden text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {/* <h1 className='text-9xl'>ZUMAXAA DENTAL TRAUMA & SMILE</h1> <br /> */}

                <h1 className='text-5xl md:text-7xl'>Tranform Your Smile Today</h1> <br />
                <p className='text-xl md:text-2xl'>Experience quality care from our Dental Clinic. Book an Appointment now</p>
                <p className='text-xl md:text-2xl'>Book an Appointment now!</p> <br />
                <button class="h-11 md:h-12 px-6 m-2 text-lg text-black transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-500"><a target='_blank' href="https://wa.me/918745948789">Book Now</a></button>
            </div>
        </div>
        
    </div>
  )
}

export default Section1