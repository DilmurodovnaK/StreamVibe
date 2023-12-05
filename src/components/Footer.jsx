import React from 'react';
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import init from '../assets/init.svg'


const Footer = () => {
  return (
  <>
  <div className='pb-12 px-40 pt-24 bg-[#0F0F0F]'>

    <div className=' flex items-start justify-between pb-24 '>
    <ul>
           <li className=' mb-6 text-xl text text-lightwhite font-semibold' >Home</li>
       <li className='text-lg text text-lightgrey font font-normal mb-3'>Categories</li>
        <li className='text-lg text text-lightgrey font font-normal mb-3'>Devices</li>
         <li className='text-lg text text-lightgrey font font-normal mb-3'>Pricing</li>
          <li className='text-lg text text-lightgrey font font-normal mb-3'>FAQ</li>
    </ul>
     <ul>
           <li className=' mb-6 text-xl text text-lightwhite font-semibold'>Movies</li>
        <li className='text-lg text text-lightgrey font font-normal mb-3'>Gernes</li>
         <li className='text-lg text text-lightgrey font font-normal mb-3'>Trending</li>
          <li className='text-lg text text-lightgrey font font-normal mb-3'>New Release</li>
           <li className='text-lg text text-lightgrey font font-normal mb-3'>Popular</li>
        
    </ul>
     <ul>
           <li className='mb-6 text-xl text text-lightwhite font-semibold'>Shows</li>
      <li className='text-lg text text-lightgrey font font-normal mb-3'>Gernes</li>
         <li className='text-lg text text-lightgrey font font-normal mb-3'>Trending</li>
          <li className='text-lg text text-lightgrey font font-normal mb-3'>New Release</li>
           <li className='text-lg text text-lightgrey font font-normal mb-3'>Popular</li>
        
    </ul>
     <ul>
           <li className='mb-6 text-xl text text-lightwhite font-semibold'>Support</li>
        <li className='text-lg text text-lightgrey font font-normal mb-3'>Contac Us</li>
         
    </ul>
     <ul>
 <li className='mb-6 text-xl text text-lightwhite font-semibold'>Subscriptions</li>
        <li className='text-lg text text-lightgrey font font-normal mb-3'>Plans</li>
         <li className='text-lg text text-lightgrey font font-normal mb-3'>Features</li>
         
    </ul>
     <ul>
          <li className='mb-6 text-xl text text-lightwhite font-semibold'>Connect With Us</li>
       <button className='rounded-lg p-4 bg-[#1A1A1A] border-[#262626] mr-3.5'><img src={facebook} alt="icon" /></button>
      <button  className='rounded-lg p-4 bg-[#1A1A1A] border-[#262626] mr-3.5'><img src={twitter} alt="icon" /></button>
       <button  className='rounded-lg p-4 bg-[#1A1A1A] border-[#262626] '><img src={init} alt="icon" /></button>
    </ul>
     </div>
    <div className='mt-34 border-t-2 pt-6 border-[#262626] bg-[#0F0F0F] flex items-center justify-between'>
        <div>
            <span  className='text-lg text text-lightgrey font font-normal mb-3'>@2023 streamvib, All Rights Reserved</span>
        </div>
        <div className='flex items-center'>
            <span  className='text-lg text text-lightgrey font font-normal mb-3 mx-5'>Terms of Use</span>
            <span  className='text-lg text text-lightgrey font font-normal border-[#262626] mb-3 px-5 border-x-2'>Privacy Policy</span>
            <span  className='text-lg text text-lightgrey font font-normal mx-5 mb-3'>Cookie Policy</span>
        </div>

   </div>
  </div>
  </>
  )
}

export default Footer