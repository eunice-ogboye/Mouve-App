'use client';

import React from 'react';

export default function Content(){
    return (
        <div>
            <div className='flex mx-4 md:px-10 lg:px-20 xl:px-40 py-10 bg-[#F4F4F4] space-x-4 gap-4'>
                <div>
                    <h1 className='text-2xl font-bold'>Our Coverage</h1>
                    <p>We currently provide seamless, reliable and secure delivery with our large network of riders in Lagos and Ibadan</p>
                
                </div>
                <img src="/imgs/locatin.svg" alt="" />
                <img src="/imgs/ogun.svg" alt="" />
                <img src="/imgs/ib.svg" alt="" />
            </div>

            <div className='flex mx-4 md:px-10 lg:px-20 xl:px-40 py-10 bg-[#F4F4F4] space-x-4 gap-4'>
                <img src="/imgs/phone.png" alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>Logistics Companies</h1>
                    <p>We currently provide seamless, reliable and secure delivery with our large network of riders in Lagos and Ibadan</p>
                </div>
            </div>

            <div className='flex mx-4 md:px-10 lg:px-20 xl:px-40 py-10 bg-[#F4F4F4] space-x-4 gap-4'>
             
                <div>
                    <h1 className='text-2xl font-bold'>Logistics Companies</h1>
                    <p>We currently provide seamless, reliable and secure delivery with our large network of riders in Lagos and Ibadan</p>
                </div>
                <img src="/imgs/focus.png" alt="" />
             </div>
        </div>
    );
};