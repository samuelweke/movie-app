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
      <figure className={classes.imgWrapper}>
        <img
          className={classes.img}
          src={`https://image.tmdb.org/t/p/w300${posterPath}`}
          alt={title}
        />
        <figcaption>
          <span className="icon-star"></span>
          <h4 className="rating">6.7 / 10</h4> <h4>Action</h4>
          <h4>Adventure</h4>
          <span className="button-green-download2-big">View Details</span>
        </figcaption>
      </figure>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.date} variant="subtitle1">
        {date.substring(0, 4)}
      </Typography>
    </div>
  )
}
