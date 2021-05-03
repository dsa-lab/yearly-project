import { Container,Grid,makeStyles,Paper } from '@material-ui/core';
import React from 'react';
import Trandings from "../compenents/MainPage/Trandings"
import SingleCard from "../compenents/MainPage/SingleCard"
const useStyles=makeStyles({
  container:{
    display:"grid",
    alignItems:"start",
    justifyContent:"center",
    gridTemplateColumns:"8fr 7fr ",
    "& > *":{
      margin:10
    }
  },
  sidebar:{
    margin:0
  },
  articles:{
   maxWidth:"100%",
   margin:0,
   padding:0
  }
})

export default function RecipeReviewCard() {
 const classes=useStyles()
  return (
    <Container className={classes.container}>
      <Container className={classes.articles} id="target">
        <Grid container spacing={2}>
          <Grid item>
            <Trandings/>
          </Grid>
          <Grid item>
            <SingleCard/>
          </Grid>
          <Grid item>
            <SingleCard/>
          </Grid>
        </Grid>
      </Container>
        
      <div className={classes.sidebar}>
          <Paper elevation={0} style={{width:400,height:500}}>

          </Paper>
          </div>
        
       
       
    </Container>
  );
}
