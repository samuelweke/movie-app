import Container from '@material-ui/core/Container'
import { useAppStyles } from './App.style'
import { Navbar } from './components/navbar/navbar.component'
import { Popular } from './pages/popular/popular.component'

export const App = () => {
  const classes = useAppStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <Container className={classes.container}>
        <Popular />
      </Container>
    </div>
  )
}
