import { AppBar, Toolbar,Avatar, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
const useStyles=makeStyles({
  root:{
 width:"84%",
 borderBottom:"1px solid rgb(180, 180, 180)"

  },
  input:{
    width:200,
    height:40,
    outline:0,
    padding:4,
    margin:5,
    border:"1px solid rgb(180, 180, 180)"
  },
  toolbar:{
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    width:"80%",
    alignItems:"center"
  },
  navs:{
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr 1fr",
    listStyle:"none",


  },
 
})
const Appbar = () => {
  const classes=useStyles()
  return (
     <AppBar  className={classes.root} color="" elevation={0}>
       <Toolbar style={{display:"flex",justifyContent:"center"}} >
         <div className={classes.toolbar}>

         <Typography >VisuAlgo</Typography>
         <input className={classes.input}/>
         <ul className={classes.navs} >
<li><HomeOutlinedIcon/></li>
<li><SendOutlinedIcon/></li>
<li><ExploreOutlinedIcon/></li>
<li><FavoriteBorderOutlinedIcon/></li>
         </ul>
         </div>
       </Toolbar>
     </AppBar>
  )
}

export default Appbar
