import React from 'react'
import {AppBar,Typography,Toolbar,Button,Avatar} from '@material-ui/core';
import useStyles from './styles';
import blog from '../../images/blog.jpg';
import {Link} from 'react-router-dom';
const Navbar=()=> {
    const classes=useStyles();
    const user=null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography  className={classes.heading} variant="h2" align="center">
                    Mehmet Blogs
                </Typography>
                <img className={classes.image} src={blog} alt="blog" height="100"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user?(
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                    ):(
                        <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;