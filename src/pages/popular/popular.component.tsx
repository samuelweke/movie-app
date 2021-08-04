import React from 'react'
import Grid from '@material-ui/core/Grid'
import { MovieCard } from '../../common/movie-card/movie-card.component'
import dummy from './dummy.json'
import { usePopularStyles } from './popular.style'

const Popular = () => {
  return (
    <div>
      <div style={{ margin: 10 }}>
        <Grid container spacing={1}>
          {dummy.results.map(movie => (
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <MovieCard
                title={movie.title}
                posterPath={movie.poster_path}
                date={movie.release_date}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Popular
