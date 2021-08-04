import React from 'react'
import Typography from '@material-ui/core/Typography'
import { MovieCardProps } from '../../types'
import { useMovieCardStyles } from './movie-card.style'

export const MovieCard = ({
  title = '',
  date = '',
  posterPath = '',
}: MovieCardProps) => {
  const classes = useMovieCardStyles()

  return (
    <div className={classes.root}>
      <div className={classes.imgWrapper}>
        <img
          className={classes.img}
          src={`https://image.tmdb.org/t/p/w185${posterPath}`}
          alt={title}
        />
      </div>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.date} variant="subtitle1">
        {date.substring(0, 4)}
      </Typography>
    </div>
  )
}
