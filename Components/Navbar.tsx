import React from 'react'
import Link from 'next/link';

export default function Navbar() {





  return (
    <div className='flex flex-col bg-[#232528] flex-1 items-center text-center p-5 gap-4 py-15 '>
        <div className='py-5 flex flex-col gap-5'>
            <h1 className='text-white font-bold text-5xl'><span className='text-[#FFA400]'>Neural</span>Meal</h1>
            <p className=' text-[20px] text-[#f1f1f1]'>Genereer je persoonlijke voedingplan om jouw droomlichaam te krijgen!</p>
        </div>
        <div className='flex gap-3 items-center '>
         <Link href="/afvallen"><button className="bg-[#FFA400] px-10  relative bottom-[-50px] py-2 rounded-lg flex flex-col items-center justify-center shadow-md"><h1 className='font-bold'>Afvallen</h1> <img className='w-[50px]' src="https://i.ibb.co/gPNv9z9/weight-loss-svgrepo-com-removebg-preview.png"></img></button></Link>
        <Link href="/afvallen"><button onClick={isClicked} className="bg-[#FFA400] px-10 relative bottom-[-50px]  py-2 rounded-lg flex flex-col items-center justify-center"><h1 className='font-bold'>Aankomen</h1><img className='w-[50px]' src="https://i.ibb.co/Dwqs6N5/muscle-svgrepo-com-1.png"></img></button></Link>
        </div>
    </div>
  )
}
