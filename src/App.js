import { Fragment } from 'react'
import Menu from "./components/Menu"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Container>
    </Fragment>
  )
}

export default App