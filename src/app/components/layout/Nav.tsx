import React from 'react'
import Image from "next/image";

function Nav() {
  return (
    <div className=" text-dark p-4 bg-transparent md:px-10 lg:px-20 xl:px-40">
        <div className="flex justify-between items-center ">
            <Image src="/imgs/logo.svg" alt="Logo" width={100} height={100}/>
            <nav className="flex items-center space-x-4">
            <ul className="flex flex-row space-x-8 font-bold">
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <button className='bg-[#9A0536] text-white font-bold py-2 px-4 rounded'>Create New Account</button>
            </nav>
        </div>
    </div>
  )
}

export default Nav