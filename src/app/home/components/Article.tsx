import Image from 'next/image'
import React from 'react'

interface Article {
    image: any;
    title: string;
    date: string;
}

const Article = ({image, title, date}:Article) => {
  return (
    <article className='w-[330px] m-2 p-2 rounded-md'>
        <Image src={image} alt='' className='h-[200px] min-w-[300px] rounded-md' />
        <h4 className='mb-10 m-2'>{title}</h4>
        <p className='text-opacity-20'>{date}</p>
    </article>
  )
}

export default Article