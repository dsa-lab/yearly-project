import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { NavigationSharp } from '@material-ui/icons'
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import TvIcon from '@material-ui/icons/Tv';
import React from 'react'
const useStyles=makeStyles({
    root:{
    marginBottom:20
    },
    item:{
    cursor:"pointer"
    },
    notClickable:{
    pointerEvents:"none"
    }
})
const Navigators = ({setMargin}) => {
    const classes=useStyles();
    const items=[
        {
            path:"/",
            content:"Posts",
            icon:<FeaturedPlayListIcon/>
        },
        {
            path:"/",
            content:"IGTV",
            icon:<TvIcon/>
        },
        {
            path:"/",
            content:"Saved",
            icon:<TurnedInNotIcon/>
        },
        {
            path:"/",
            content:"Tagged",
            icon:<LocalOfferIcon/>
        },
    ]
    const clickHandler=(e)=>{
       console.log(e.target.textContent);
       switch(e.target.textContent.trim().toLowerCase()){
           case "posts":
               setMargin(0);
               break;
           case "saved":
            setMargin(250)
            // e.target.style.borderTop="2px solid #444"
               break;
               case "igtv":
                   setMargin(130)
                   break;
               case "tagged":
                   setMargin(370);
                   break;    
                   
       }
    //    if(e.target.textContent.trim().toLowerCase()=="posts"){
    //     e.target.textContent="Hello" 
    //    }
    }
    return (
        <Container>
         <Grid container spacing={5} className={classes.root} justify="center">
             {items.map((nav)=>{
                 return (
                     <Grid item className={classes.item}  onClick={clickHandler} >
                         <Grid container spacing={2} className={classes.notClickable}> <Grid item>{nav.icon}</Grid>
                         
                         <Grid item className={classes.notClickable}><Typography className={classes.notClickable}>{nav.content}</Typography><Grid/></Grid>
                         </Grid>
                         </Grid>
                 );
             })} 
             </Grid>
        </Container>
    )
}

export default Navigators
