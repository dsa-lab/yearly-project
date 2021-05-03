import { Avatar, Paper,Grid, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import React from 'react'

const Trandings = () => {
    return (
        <Paper elevation={0} style={{width:600,height:120,border:"1px solid #f1f1f1"}} >
           <Grid container spacing={3} justify="center" style={{padding:10}}>
<Grid item>
<Avatar src="./avatar.jpeg" style={{width:70,height:70,border:"3px solid #7d1c2b"}}/>
<Typography>Lukmanov</Typography>
</Grid>
<Grid item>
<Avatar src="./avatar.jpeg" style={{width:70,height:70,border:"3px solid #7d1c2b"}}/>
<Typography>Lukmanov</Typography>
</Grid>
<Grid item>
<Avatar src="./avatar.jpeg" style={{width:70,height:70,border:"3px solid #7d1c2b"}}/>
<Typography>Lukmanov</Typography>
</Grid>
<Grid item>
<Avatar src="./avatar.jpeg" style={{width:70,height:70,border:"3px solid #7d1c2b"}}/>
<Typography>Lukmanov</Typography>
</Grid>
<Grid item>
<Avatar src="./avatar.jpeg" style={{width:70,height:70,border:"3px solid #7d1c2b"}}/>
<Typography>Lukmanov</Typography>
</Grid>



           </Grid>
           
          
        </Paper>
    )
}

export default Trandings
