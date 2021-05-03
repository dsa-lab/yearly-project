import React from 'react'
import { Container,Paper, Typography } from '@material-ui/core';

const DashboardFooter = () => {
    return (
       <Container>
           <Paper style={{width:"100%",height:50,marginTop:40}} elevation={0}>
             <Typography align="center" variant="body2">  © copyright 2021 VisuAlgo</Typography> 
           </Paper>
       </Container>
    )
}

export default DashboardFooter
