import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  },
  verticallyCenterContent: {
    margin: 'auto 0'
  },
  centeredText: {
    textAlign: 'center'
  }
}))

export default function  HeadlineElement (data) {
  const {
    icon,
    description,
    size
  } = data.children
  const classes = useStyles()

  const _icon = getIconByName(icon)
  return(
    <div>
      <span>{icon}</span>
      <h3>{description}</h3>
    </div>
  )
}

