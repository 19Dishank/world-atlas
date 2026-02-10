import React from 'react';
import About from './About';

const Hero = () => {
    return (
        <div className='min-h-screen bg-zinc-950'>

            <div className='flex flex-col md:flex-row min-h-screen gap-5'>
                <div className='w-full md:w-1/2 flex justify-center items-center p-10 bg-zinc-950'>
                    <img
                        src="World-Atlas.png"
                        alt="World Atlas Map"
                        className='w-full max-w-md md:max-w-full h-auto object-contain'
                    />
                </div>
                <div className='px-10 md:px-20 w-full md:w-1/2 flex flex-col justify-center text-slate-100 py-20 md:py-0'>
                    <div className='text-4xl md:text-6xl font-bold pb-6'>
                        <span className='border-b-4 border-white'>World</span>
                        <span className='border-b-4 border-indigo-700'>Atlas</span>
                    </div>
                    <p className='text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed'>
                        Get a blueprint of all countries of the world with 200+ maps.
                        Explore the world atlas with political, satellite, and topographic maps.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Hero;