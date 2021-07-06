import React,{useState} from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcond from '@material-ui/icons/PhoneLockedOutlined';
import Input from './Input';
const Auth=()=> {
    const classes=useStyles();
    const [showPassword,setShowPassword]=useState(false);
    const isSignup=false;

    const handleSubmit=()=>{

    }
    const handleChange=()=>{

    }
    const handleShowPassword=()=>{
        setShowPassword((prevShowPass)=>!prevShowPass);
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcond/>
                </Avatar>
                <Typography variant="h5">
                    {
                        isSignup?"SignUp":"SignIn"
                    }
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} >
                        {
                            isSignup&&(
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                            </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && (
                                <Input name="confirmPassword" label="Repeat Password" handleShowPassword={handleShowPassword} type="password"/>
                            )
                        }
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}
export default Auth;
