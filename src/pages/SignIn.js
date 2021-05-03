import { Container,Paper, Typography,InputLabel,FormControl,FormHelperText,Input, makeStyles, Button, TextField, Avatar} from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const useStyles=makeStyles({
    root:{
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
     width:"700px",
     height:"100%",
     backgroundColor:"#f1f1f1",
     padding:20,
     borderRadius:9
     
    },
    box:{
        display:"grid",
        width:"100%"
    },
    form:{
    width:"100%",
    display:"flex",
     alignItems:"center",
     justifyContent:"center",
     flexDirection:"column",
     "& > *":{
    margin:10
     },
     padding:10

    },
    title:{
        display:"grid",
        gridTemplateColumns:"1fr 11fr",
        "& > *":{
            margin:10
        } ,
        alignItems:"center"       

    }
    
})
const SignIn = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState('');

    const [usernameErr,setUsernameErr]=useState(false);
    const [passwordErr,setPasswordError]=useState(false);
    const classes=useStyles();

    const submitHandler =(e)=>{
     e.preventDefault();
     console.log(username)
     console.log(password)
     console.log(email)
    }
    return (
        <Container className={classes.root}>
              
        <Paper className={classes.box}>
            <div className={classes.title}>
                <Avatar src="/avatar.jpeg"/>
                    
              
        <Typography align="center" >Welcome To Algo Lab /(Sign In) </Typography>
        </div>
            
        <FormControl>

    <form className={classes.form} onSubmit={submitHandler}>

  <TextField  fullWidth 
  id="standard-basic" label="Username"
  onChange={(e)=>setUsername(e.target.value)}
  value={username}
   variant="outlined"error={usernameErr} />
 
  <TextField  fullWidth id="standard-basic"
   label="Password" variant="outlined"
  onChange={(e)=>setPassword(e.target.value)}
   type="password"
   value={password}
   error={passwordErr} />
<Button variant="contained" type="submit" fullWidth color="primary">Sign In</Button>
    </form>


</FormControl>

        </Paper>
        </Container>
    )
}

export default SignIn
