import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    header: {
        padding: theme.spacing(0.3, 0.3, 0.3, 0.3),
        marginBottom: theme.spacing(1),
        backgroundColor: '#EAEAEA',
        opacity: 0.5,
        color: 'black',
        fontWeight: 'bold',
        fontSize: '23px',
        textAlign: 'center',
        fontFamily: 'Pacifico',
        // position: 'fixed',
        width: '100%'
    },
    trellis: {
        opacity: 0.8,
        color: 'black',
        display: 'inline-block',
        '&:hover': {
            opacity: 1,
            cursor: 'pointer',
        }
    }
}))

export default function Header() {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <div className={classes.trellis}
            >Trellis</div>
        </div>
    )
}
