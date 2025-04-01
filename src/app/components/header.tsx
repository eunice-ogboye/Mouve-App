import React from 'react';
import Image from 'next/image'; // Import Image component from next/image
import Nav from './layout/Nav';

const Header = () => {
    return (
      <div className='bg-[#F4F4F4]'> 
            <Nav />
          <header className="relative md:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/hero.png')" }}>
            </div>
           <div className="flex">
               
              <div>
              <p className="text-lg md:text-xl text-dark">Get easy access to the most <span className='text-[#9A0536]'>efficient delivery</span> services closest to your doorstep at a snap of finger.
                   </p>
              </div>

              <div>
                <img src="/img/hero1.png" alt="" />
                <img src="/img/hero2.png" alt="" />
                <img src="/img/hero3.png" alt="" />
              </div>
           </div>
       </header>
      </div>
    );
};

export default Header;
