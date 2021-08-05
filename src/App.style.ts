/**
 * @author Samuel Weke
 */

import { makeStyles } from '@material-ui/core/styles'

export const useAppStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  container:{
    paddingTop: '2rem',
    paddingBottom: '5rem',
  }
}))
