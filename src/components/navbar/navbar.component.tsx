import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useNavbarStyles } from './navbar.style'

export const Navbar = () => {
  const classes = useNavbarStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Movies Finder
        </Typography>
        <Button color="inherit">Popular</Button>
        <Button color="inherit">Top Rated</Button>
        <Button color="inherit">Upcoming</Button>
      </Toolbar>
    </AppBar>
  )
}
