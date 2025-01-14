import React from 'react'
import laptop from '../assets/laptop.jpg'
const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={laptop} alt='/' className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, labore veritatis quo dignissimos neque consequuntur obcaecati, repellendus voluptatibus dolorum voluptatem expedita. Nisi exercitationem nostrum saepe repellat consectetur aliquid ut dignissimos!</p>
                    <button className='text-[#00df9a] w-[200px] rounded-md font-medium py-3 mx-auto my-6 md:mx-0 bg-black text-xl'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics