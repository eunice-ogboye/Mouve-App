import React from 'react';
import Image from 'next/image'; // Import Image component from next/image
import Nav from './layout/Nav';

const Header = () => {
    return (
      <div className="bg-[#F4F4F4] "> 
            <Nav />
          <header className="relative md:h-[500px] flex items-center justify-evenly">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imgs/herobg.svg')" }}>
            </div>
            <Nav />
           <div className="flex justify-between items-center h-full relative">
               
              <div className="flex flex-col  items-start p-10 space-y-4 w-1/2">
              <p className="text-3xl md:text-xl text-dark font-extrabold">Get easy access to the most <span className='text-[#9A0536]'>efficient delivery</span> services closest to your doorstep at a snap of finger.
                   </p>
                   <button className='bg-[#9A0536] text-white font-bold py-2 px-4 rounded'>Join the world of seamless logistics!</button>
              </div>

              <div>
              <Image src="/imgs/hero1.png" alt="Hero Image 1" width={200} height={200} />
              <Image src="/imgs/hero2.png" alt="Hero Image 1" width={200} height={200} />
              <Image src="/imgs/hero3.png" alt="Hero Image 1" width={200} height={200} />
              </div>
           </div>
       </header>
      </div>
    );
};

export default Header;
