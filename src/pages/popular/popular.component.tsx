import React from 'react'
import { MovieCard } from '../../common/movie-card/movie-card.component'
import { usePopularStyles } from './popular.style'

const Popular = () => {
  return (
    <div>
      <div style={{ margin: 10 }}>
        <MovieCard
          title="Title"
          posterPath="/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg"
          date="Jul 28, 2021"
        />
      </div>
    </div>
  )
}

export default Popular
