/**
 * @author Samuel Weke
 */

import { makeStyles } from '@material-ui/core/styles'

export const useMovieCardStyles = makeStyles(theme => ({
  title: {
    fontSize: '1rem',
  },
  date: {
    fontSize: '0.875rem',
  },
  imgWrapper: {
    width: '100%',
    position: 'relative',
    '&:hover': {
      '& img': {
        opacity: 0.2,
      },
    },
  },
  img: {
    width: '100%',
    height: '100%',
    border: '4px solid blue',
    borderRadius: '10px',
  },
  movieDetailsWrapper: {
    position: 'absolute',
    top: 0,
    margin: 0,
    height: '100%',
    width: '100%',
    color: '#ffffff',
  },
  movieDetails: {
    height: '100%',
  },
  rating: {
    '& .MuiRating-iconEmpty': {
      color: '#fff',
    },
  },
}))
