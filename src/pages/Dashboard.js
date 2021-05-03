import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import DashboardBody from "../compenents/Dashboard/DashboardBody"
import DashboardHeader from "../compenents/Dashboard/DashboardHeader"
import  DashboardFooter from "../compenents/Dashboard/DashboardFooter"
import Coordinator from "../compenents/Dashboard/Coordinator"

const useStyles=makeStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        maxWidth:900,
        width:"100%",
        height:"auto",
        justifyContent:"center",
        alignItems:"center",
        
    }
})

const Dashboard = ({loading,user}) => {
    const classes=useStyles();
    return (
        <Container className={classes.root}>
           <DashboardHeader loading={loading} user={user}/>
           <DashboardBody loading={loading}/>
           <DashboardFooter loading={loading}/> 
          
        </Container>
    )
}

export default Dashboard
