import { Heart, Home } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <DesktopSidebar />
    <MobileSidebar />

    </>
  )
}

export default Sidebar


const DesktopSidebar = () => {
  return (
    <div className='p-3 md:p-3 border-r min-h-screen w-24 md:w-64 hidden sm:block bg-slate-800'>
      <div className='flex flex-col gap-20 sticky top-10 left-0'>
        <div className='w-full'>
          <img src="./food.svg" alt="" width={110} className='hidden md:block'/>
          <img src="/food2.svg" alt="" width={90} className='block md:hidden'/>
        </div>
        <ul className='flex flex-col items-center md:items-start gap-8'>
          <Link className='flex gap-1' to={"/"}>
          <Home size={"24"}/>
          <span className='font-bold hidden md:block'>Home</span>
          </Link>
          <Link className='flex gap-1' to={"/favourites"}>
          <Heart size={"24"}/>
          <span className='font-bold hidden md:block'>Favourites</span>
          </Link>
        </ul>
        <ul></ul>
        <ul></ul>
      </div>

    </div>
  )
}

const MobileSidebar = () =>{
  return (
    <div className='flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 z-10 p-2 sm:hidden bg-slate-800 '>
    <Link to={"/"}>
				<Home size={"24"} className='cursor-pointer' />
			</Link>
			<Link to={"/favourites"}>
				<Heart size={"24"} className='cursor-pointer' />
			</Link>

  </div>

  )
}


