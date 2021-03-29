import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {Fragment} from "react";

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">

        <Router>

          <h1>Hello world!</h1>
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


export default App;
