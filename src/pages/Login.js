import { Container,Paper, Typography,InputLabel,FormControl,FormHelperText,Input, makeStyles, Button} from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles({
    root:{
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
     width:"60%",
     height:"100%",
     border:"2px solid red",
     padding:10
    },
    box:{
        display:"grid",
    },
    input:{
      margin:10,
      padding:5,
      width:300
    }
})
const Login = () => {
    const classes=useStyles();
    return (
        <Container className={classes.root}>
              
        <Paper className={classes.box}>
        <div className={classes.input}><Typography>Welcome To Algo Lab </Typography>
            </div>
        <FormControl>

  <div className={classes.input}>
  <InputLabel htmlFor="username"></InputLabel>
  <Input className={classes.input}  id="username" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
  </div>
  <div className={classes.input}>

  <InputLabel htmlFor="email"></InputLabel>
  <Input   className={classes.input}id="email" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
  </div>
  <div className={classes.input}>

  <InputLabel id="password" aria-describedby="my-helper-text" />
  <Input   className={classes.input} id="password" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
</div>
<Button variant="contained" color="primary">Sign UP</Button>
</FormControl>

        </Paper>
        </Container>
    )
}

export default Login
