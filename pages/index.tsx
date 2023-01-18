import type { NextPage } from 'next'
import Navbar from '../Components/Navbar'
import Link from 'next/link'
import Food from '../public/food.svg'

const Home: NextPage = () => {
  return (
    <div className='w-[85%] m-auto p-5'>
       <div className='flex flex-1 justify-center'>
           <img src="https://i.ibb.co/RYVtpxz/undraw-Tasting-re-3k5a-removebg-preview.png"></img>
       </div>
       <div className='bg-white flex flex-1 flex-col p-5 shadow-xl gap-2'>
           <h1 className='text-2xl font-extrabold'>Hoe werkt het?</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla aspernatur dolor provident! Molestiae qui, sed aliquid quidem laudantium eaque.</p>
           <button className="bg-[#FFA400] font-bold py-2">Nu proberen!</button>
       </div>
       
    </div>


  )
}

export default Home
