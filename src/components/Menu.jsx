import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const LinkStyle = {
  color: "white",
  textDecoration: "none"
}

function Menu() {

  const classes = useStyles();

  return (
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
      <Button>
        <Link style={LinkStyle} to="/">Les canards</Link>
      </Button>
      <Button>
        <Link style={LinkStyle} to="/about">Qui sommes-nous ?</Link>
      </Button>
      <Button>
        <Link style={LinkStyle} to="/contact">Contact</Link>
      </Button>
    </ButtonGroup>
  )
}

export default Menu
