import { makeStyles,Container,Grid, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Navigators from "./Navigators"
import Posts from "./Posts"
const POINTERMARGIN=170;
const useStyles=makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
  
  
    pointer:{
        width:"100%",
        height:"2px",
        backgroundColor:"#f1f1f1",
        marginBottom:20
    },
    root2: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width:theme.spacing(45),
        height:"500px"
      },
      innerPointer:{
          width:"10%",
          height:"100%",
          backgroundColor:"#222",
          marginLeft:POINTERMARGIN
      }
  

}));
const DashboardBody = ({loading}) => {
    const [margin,setMargin]=useState(0);
    const useStyles=makeStyles((theme)=>({
        root:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        },
      
      
        pointer:{
            width:"100%",
            height:"2px",
            backgroundColor:"#f1f1f1",
            marginBottom:20
        },
        root2: {
            flexGrow: 1,
          },
          paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            width:theme.spacing(45),
            height:"500px"
          },
          innerPointer:{
              width:"10%",
              height:"100%",
              backgroundColor:"#222",
              marginLeft:POINTERMARGIN+margin
          }
      
    
    }));
    const classes=useStyles();
    return (
        <Container className={classes.root}>
       <div className={classes.pointer}>
           
       <div className={classes.innerPointer} ></div>
       </div>
       <Navigators POINTERMARGIN={POINTERMARGIN} setMargin={setMargin} ></Navigators>
       <Container className="content">
           
       <div className={classes.root2}>
      <Grid container spacing={5}>
        {/* <Grid container item xs={12} spacing={9}> */}
          <Posts useStyles={useStyles} loading={loading} />
        {/* </Grid> */}
        
      </Grid>
    </div>
       </Container>
        </Container>
    )
}


export default DashboardBody
