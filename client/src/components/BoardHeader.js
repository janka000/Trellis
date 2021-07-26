import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    width: '1405px',
    overflow: 'hidden',
    opacity: 0.8,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    /* textShadow: '2px 2px #000000', */
    /* padding: theme.spacing(0.7, 10, 0.7, 10), */
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(4.5, 0.7, 0.7, 1),
    fontFamily: 'sans-serif',
    backgroundColor: 'hsla(0,0%,100%,1)',
    borderRadius: 4,
    fontSize: '20px',
    /* marginTop: theme.spacing(4.5), */
    '&:hover': {
      opacity: 1,
      backgroundColor: 'hsla(0,100%,0%,.3)',
      borderRadius: 4,
      color: 'white',
      // opacity: 0.5
    },
  },
}))
export default function BoardHeader({ title, showEditable }) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.title} onClick={showEditable}>
        {title}
      </div>
    </div>
  )
}
