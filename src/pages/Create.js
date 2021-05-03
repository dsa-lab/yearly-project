import React,{useState} from 'react'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField"
import Radio from "@material-ui/core/Radio"
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import red from "@material-ui/core/colors/red"
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useHistory} from "react-router-dom"
const useStyles=makeStyles({
field:{
  margin:10,
  display:"block"
},input:{

}
})
const theme=createMuiTheme({
  palette:{
  
    secondary:{
      main:red[500]
    }
  }
})

export default function Create() {
  const history=useHistory()
  const [note,setNote]=useState("")
  const [detail,setDetail]=useState("")
  const classes=useStyles();
  const [noteError,setNoteErr]=useState(false)
  const [detailError,setDetailErr]=useState(false)
  const [category,setCategory]=useState("male")
  const submitHandler=(e)=>{
    e.preventDefault();
    setNoteErr(false);
    setDetailErr(false);
    if(detail == ""){
      setDetailErr(true);
    }
    if(note == ""){
      setNoteErr(true);
    }
    if(note && detail ){
      fetch("http://localhost:8000/posts",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({title:note,details:detail,category})}
      )
      .then(()=>history.push("/"));
    }
  }
  return (
  <Container style={{width:"80%"}}>
    <Typography  className={classes.field} variant="h3" guutebottom color="textSecondary">Create a new post</Typography>
<form onSubmit={submitHandler}>
  <TextField
  label="Post Title"
  variant="outlined"
  color="primary"
  fullWidth
  className={classes.field}
  value={note}
  onChange={(e)=>setNote(e.target.value)}
  error={noteError}
  />
  <TextField
  label="Post Content"
  variant="outlined"
  color="primary"
  fullWidth
  error={detailError}
  onChange={(e)=>setDetail(e.target.value)}
value={detail}

className={classes.field }multiline
rows={4}

/>
<label class="file">
  <input type="file" id="file" aria-label="File browser example"/>
  <span class="file-custom"></span>
</label>
<FormControl component="fieldset" className={classes.field}>
  <FormLabel component="legend">post categories</FormLabel>
  <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
    <FormControlLabel value="programming" control={<Radio/> }label="programming"/>
    <FormControlLabel value="money" control={<Radio/> }label="money"/>
    <FormControlLabel value="technology" control={<Radio/> }label="technology"/>
    <FormControlLabel value="university"  control={<Radio/> }label="university"/>
 
  </RadioGroup>

</FormControl>
  <Button className={classes.field}variant="contained" color="primary" type="submit">submit</Button>
 
</form>

</Container>
   
  )
}
