import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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
    <Card className={classes.root}>
      <div className={classes.imgWrapper}>
        <img src={`https://image.tmdb.org/t/p/w185${posterPath}`} alt={title} />
      </div>

      <CardContent>
        <Typography variant="h5" color="textSecondary" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {date}
        </Typography>
      </CardContent>
    </Card>
  )
}
