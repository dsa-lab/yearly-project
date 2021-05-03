import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Appbar from "./Appbar"
import Drawer from "./Drawer"
import Footer from "./Footer"
const drawerWidth = 240;
const useStyles=makeStyles((theme)=>({
    root:{
        display:"flex",
        flexDirection:"column"
    },
    page:{
        width:"100%",
        marginLeft:240,
        margin:20 
    },
   appbar:theme.mixins.toolbar
    
}))
const Layout = ({children,user}) => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
        <Appbar/>
        <Drawer user={user}/>
     
            <Container className={classes.page}>
                <div className={classes.appbar}></div>
        {children}
            </Container>

      
        <Footer/>
        </div>
    )
}

export default Layout
