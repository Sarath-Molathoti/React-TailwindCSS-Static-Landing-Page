import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for </p>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-3' strings={["SASS", "ORG", "BTC"]} typeSpeed={120} backSpeed={120} loop />
                    
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 pt-4'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium py-3 mx-auto my-6 text-black text-xl'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero