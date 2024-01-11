import Image from 'next/image'
import React from 'react'

interface Article {
    image: any;
    title: string;
    date: string;
}

const Article = ({image, title, date}:Article) => {
  return (
    <article className='w-[330px] md:p-3 m-2 rounded-md border border-white hover:border-[#236cf449] hover:cursor-pointer'>
        <Image src={image} alt='' className='h-[200px] min-w-[300px] rounded-md' />
        <h4 className='mb-10 m-2'>{title}</h4>
        <p className='text-opacity-20'>{date}</p>
    </article>
  )
}

export default Article