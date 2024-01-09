'use client'

import { article } from '@/helpers/articleSource'
import React from 'react'
import Article from './Article'

const Articles = () => {
  return (
    <section className='md:p-28'>
        <h3 className='text-2xl font-bold'>Notable Articles</h3>
        <main className='flex overflow-x-scroll hide-scroll-bar'>
          {
            article.map((element, index) => {
              return <Article key={index} image={element.image} title={element.title} date={element.date}  />
            })
          }
        </main>
    </section>
  )
}

export default Articles