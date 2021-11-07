import React from 'react'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import SchoolIcon from '@mui/icons-material/School'
import Typography from '@mui/material/Typography'
import Paper from '@material-ui/core/Paper'
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

export default function  TimelineElement (data) {
  const {
    what,
    when,
    icon
  } = data.children
  const classes = useStyles()
  function getIconByName(name) {
    let _icon
    switch (name) {
      case 'study':
        _icon =  <SchoolIcon />
        break
      case 'work':
        _icon =  <LaptopMacIcon />
        break
      default:
        _icon = <FastfoodIcon />

    }
    return _icon
  }
  const _icon = getIconByName(icon)
  return(
    <TimelineItem>
      <TimelineOppositeContent
        className={classes.verticallyCenterContent}
        variant='h6'
        component='h1'
        color='textSecondary'
        >
        {when}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color='primary'>
          {_icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent  className={classes.verticallyCenterContent}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant='h6' component='h1' className={classes.centeredText}>
            {what}
          </Typography>
        </Paper>
        <TimelineConnector />
      </TimelineContent>
    </TimelineItem>
  )
}

