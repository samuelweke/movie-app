/**
 * @author Samuel Weke
 */

import { makeStyles } from '@material-ui/core/styles'

export const useMovieCardStyles = makeStyles(theme => ({
  root: {
    maxWidth: '16rem',
  },
  media: {
    height: '100',
    paddingTop: '56.25%', // 16:9
  },
  imgWrapper: {
    width: '100%',
    height: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}))
