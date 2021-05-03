import React from 'react'
import {Button, Container,makeStyles,StepIcon,SvgIcon,Typography} from "@material-ui/core/"
import { isSameSecond } from 'date-fns/esm'
import SettingsIcon from '@material-ui/icons/Settings';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles=makeStyles({
    root:{
       
    },
    profile:{
        display:"flex",
        alignItems:"center"
    },
    item:{
        margin:"15px auto"
    }
})
const UserInfo = ({loading,username}) => {
    const classes=useStyles()
    return (
        <Container className={classes.root}>
        
            {loading ? (<><div className={classes.profile}>
              <Skeleton animation="wave" style={{width:240,height:40}}className={classes.item}></Skeleton>
              <Skeleton animation="wave" style={{width:90,height:70}}className={classes.item}></Skeleton>
                {/* <SettingsIcon className={classes.item}/>
                 */}
                 <Skeleton variant="circle" style={{width:30,height:30}} ></Skeleton>
            </div>
            <div className={classes.profile}>
              <Skeleton animation="wave" style={{width:100,height:90}}className={classes.item}></Skeleton>
              <Skeleton animation="wave" style={{width:100,height:90}}className={classes.item}></Skeleton>
              <Skeleton animation="wave" style={{width:100,height:90}}className={classes.item}></Skeleton>

               {/* <p className={classes.item}> <Typography variant="h6" >10</Typography>Posts</p> */}
               {/* <p className={classes.item}> <Typography variant="h6">233</Typography>Followers</p>
               <p className={classes.item}> <Typography variant="h6">1289</Typography>Follwings</p> */}

            </div></>):(<><div className={classes.profile}>
              <Typography variant="h5" className={classes.item}>{username}</Typography>
                <Button variant="outlined" className={classes.item}>edit profile</Button>
                <SettingsIcon className={classes.item}/>
            </div>
            <div className={classes.profile}>
               <p className={classes.item}> <Typography variant="h6" >10</Typography>Posts</p>
               <p className={classes.item}> <Typography variant="h6">233</Typography>Followers</p>
               <p className={classes.item}> <Typography variant="h6">1289</Typography>Follwings</p>

            </div></>)}
        </Container>
    )
}

export default UserInfo
