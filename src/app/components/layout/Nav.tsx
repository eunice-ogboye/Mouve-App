import React from 'react'
import Image from "next/image";

function Nav() {
  return (
    <div className=" text-dark p-4">
        <div className="flex justify-between items-center">
            <Image src="/imgs/logo.svg" alt="Logo" width={100} height={100}/>
            <nav>
            <ul className="flex space-x-4">
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            </nav>
        </div>
    </div>
  )
}

export default Nav