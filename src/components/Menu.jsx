import React from "react"
import { Link } from "react-router-dom"
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

function Menu () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button><Link to="/" />Accueil</Button>
        <Button><Link to="/about" />À propos</Button>
        <Button><Link to="/contact" />Contact</Button>
      </ButtonGroup>
    </div>

  )
}

export default Menu

