import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import { MovieCardProps } from '../../types'
import { useMovieCardStyles } from './movie-card.style'

export const MovieCard = ({
  title = '',
  date = '',
  posterPath = '',
}: MovieCardProps) => {
  const classes = useMovieCardStyles()

  return (
    <div>
      <figure className={classes.imgWrapper}>
        <img
          className={classes.img}
          src={`https://image.tmdb.org/t/p/w300${posterPath}`}
          alt={title}
        />
        <figcaption className={classes.movieDetailsWrapper}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.movieDetails}
          >
            <Rating
              className={classes.rating}
              name="simple-controlled"
              value={5 / 2}
              precision={0.1}
              disabled
            />
            <Typography className={classes.ratingText} variant="h4" component="p">
              7.8 / 10
            </Typography>
            {['Action', 'Adventure'].map(genre => (
              <Typography variant="h4" component="p">
                {genre}
              </Typography>
            ))}

            <Button
              className={classes.viewDetailsBtn}
              variant="contained"
              color="primary"
            >
              View Details
            </Button>
          </Grid>
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
