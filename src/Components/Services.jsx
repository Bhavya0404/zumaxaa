import React from 'react'

const Services = () => {
  return (
    <div className='h-full bg-my-bg mx-10 overflow-x-hidden'>
        <div className='text-center font-serif font-medium my-8'>
            <h1 className='text-5xl'>Services</h1>
        </div>
        <div className='mx-16 mt-10'>
            <div class="grid grid-cols-4 divide-x text-center">
                <div className='bg-pink-400 w-4/5 h-64 rounded-xl mx-auto '>
                    {/* <img className='h-4/6 ' src={require('../assets/images/image1.jpg')} alt="Dental" /> */}
                    {/* <h1 className='font-bold mb-5 mt-2 text-lg'>Endodontics</h1> */}
                </div>
                {/* <div>09</div> */}
                <div>09</div>
                <div>09</div>
                {/* <div>09</div> */}
                <div>09</div>
            </div>
            
        </div>
    </div>
  )
}

export default Services