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
    border: '5px solid blue',
    borderRadius: '5px',
    '&:hover': {
      '& img': {
        opacity: 0.2,
      },
      '& figcaption': {
        display: 'block',
      },
    },
  },
  img: {
    width: '100%',
    height: '100%',
    display: 'block',
  },
  movieDetailsWrapper: {
    position: 'absolute',
    top: 0,
    margin: 0,
    height: '100%',
    width: '100%',
    color: '#ffffff',
    display: 'none',
  },
  movieDetails: {
    height: '100%',
  },
  rating: {
    '& .MuiRating-iconEmpty': {
      color: '#fff',
    },
  },
  ratingText: {
    paddingBottom: '1rem',
  },
  viewDetailsBtn: {
    marginTop: '2rem',
  },
}))
