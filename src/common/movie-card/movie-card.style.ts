/**
 * @author Samuel Weke
 */

import { makeStyles } from '@material-ui/core/styles'

export const useMovieCardStyles = makeStyles(theme => ({
  root: {
    width: '11.25rem',
  },
  title: {
    fontSize: '1rem',
  },
  date: {
    fontSize: '0.875rem',
  },
  media: {
    height: '100',
    paddingTop: '56.25%', // 16:9
  },
  imgWrapper: {
    width: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
}))
