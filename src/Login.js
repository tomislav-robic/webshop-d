import React from 'react';
import './Login.css';
import {TextField} from '@material-ui/core'
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <div className="Login">
            <div className="DivBlock">
                <div>
                    <h2>I already have an account</h2>
                    <h4>Sign in with your email and password</h4>
                    <div>
                        <div className="Form">
                            <TextField label="email" placeholder='Enter email'></TextField> 
                            <TextField label="password" placeholder='Enter password'></TextField>
                        </div>
                    </div>

                    <div className="DivBlock">
                        <div >
                            <Button variant="dark">SIGN IN</Button>
                        </div>
                        <div >
                            <Button variant="primary">SIGN IN WITH GOOGLE</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>I do not have account</h2>
                    <h4>Sign up with your email and password</h4>
                    <div>
                        <div className="Form">
                            <TextField label="Display Name" placeholder='Enter display name'></TextField>
                            <TextField label="Email" placeholder='Enter email'></TextField>
                            <TextField label="Password" placeholder='Enter password' type="password"></TextField>
                            <TextField label="Confirm Password" placeholder='Enter password' type="password"></TextField>
                        </div>
                        <div className="signUp">
                            <Button variant="dark">SIGN UP</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;