import { SubscribeImg } from '@/constants/svg'
import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
  return (
    <main className='flex items-center justify-center m-5 md:m-10'>
        <article className='md:w-[50%]'>
            <h2 className="text-3xl font-extrabold mb-[20px] text-[#060640]">Subscribe to our newsletter</h2>
            <h4 className='mb-[20px]'>Businesses generally promote their brand, products, and services by identifying audience. No wonder that promotion strategy is one of the most important processes in marketing.</h4>
            <form>
                <input type="text" className='p-3 mr-2 bg-white outline-none rounded-md' placeholder='Enter Email Address'/>
                <button className="py-3 px-6 border bg-[#060640] rounded-lg text-white font-bold">Subscribe</button>
            </form>
        </article>
        <Image src={SubscribeImg} alt="" className='hidden md:block w-[30%]' />
    </main>
  )
}

export default Subscribe