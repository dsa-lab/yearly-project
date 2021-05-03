import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles({
    coord:{
    width:"100%",
    height:3,
    backgroundColor:"#f1f1f1",
    position:"relative",
    margin:10
    },
    pointer:{
    position:"absolute",
    top:"400px",
    left:"400px",
    width:100,
    backgroundColor:"#333",
    height:"50px"
}
})

const Coordinator = ({left}) => {
    const classes=useStyles(left)
    return (
        <div className={classes.coord}>
            <div className={classes.pointer}>
                </div>
        </div>
    )
}

export default Coordinator
