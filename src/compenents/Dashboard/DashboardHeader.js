import { Avatar, Container, makeStyles } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import UserInfo from "./UserInfo"
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles=makeStyles({
    
    root:{
        display:"grid",
        gridTemplateColumns:"1fr 2fr",

       margin:"40px auto",
  
        padding:10,
        paddingBottom:20
    },
    avatar:{
     width:100,
     height:100
       
    },
    avatarDiv:{
        borderRight:"1px solid #f1f1f1",
        // marginRight:50,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
})
const DashboardHeader = ({loading,user}) => {
 const classes=useStyles()
    return (
        <Container className={classes.root}>
            {loading ? (<div className={classes.avatarDiv}><Skeleton animation ="wave" variant="circle" className={classes.avatar}  /></div>):(<div className={classes.avatarDiv}>
           <Avatar src={user.img}className={classes.avatar}/>
           </div>) }
            
           <UserInfo loading={loading} username={user.username}/>
        </Container>
    )
}

export default DashboardHeader
