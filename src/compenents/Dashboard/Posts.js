import { makeStyles,Container,Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton"
const useStyles2 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:20
    },
    paper: {
      height: 90,
      width: 80,
      margin:10
    },
    paper1: {
      height: 50,
      width: 330,
      margin:3
    },
   
  }));
function Posts({useStyles,loading}) {
    const classes=useStyles();
    const classes2=useStyles2();
    
    const items=[
        "photo1",
        "photo2",
        "photo3",
        "photo3",
        "photo3",
        "photo3",
   
       
    ]
    return (
      <React.Fragment>
        <Grid item style={{marginRight:110}}xs={4} >
         {loading ? ( <Paper className={classes.paper}>
            <Grid container justify="center" className={classes2.root} spacing={2}>
             {items.map((item)=>{
                 return (<Skeleton   className={classes2.paper}></Skeleton>);
             })}
            </Grid>
          </Paper>):( <Paper className={classes.paper}>
            <Grid container justify="center" className={classes2.root} spacing={2}>
             {items.map((item)=>{
                 return (<Paper  elevation={1} className={classes2.paper}></Paper>);
             })}
            </Grid>
          </Paper>)} 
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}> <Typography>
                  <Grid container spacing={3}>
                    {loading ?(items.map(item=>{
                          return (
                              <Grid item >
                                  <Skeleton  className={classes2.paper1}>
                                     
                                  </Skeleton>
                                  </Grid>
                          );

                      })):( items.map(item=>{
                        return (
                            <Grid item >
                                <Paper elevation={1} className={classes2.paper1}>
                                   
                                </Paper>
                                </Grid>
                        );

                    }))}
                     

                  </Grid>
              </Typography></Paper>
        </Grid>
       
      </React.Fragment>
    );
  }
  export default Posts;