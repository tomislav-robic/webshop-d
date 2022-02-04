import React from 'react';
import './Login.css';
import {TextField} from '@material-ui/core'

function Login() {
    return (
        <div className="Login">
            <div className="DivBlock">
                <div>
                    <h2>I already have an account</h2>
                    <h4>Sign in with your email and password</h4>
                    <TextField label="email" placeholder='Enter email'></TextField>
                </div>
                <div>
                    <h2>I do not have account</h2>
                    <h4>Sign up with your email and password</h4>
                    <TextField label="Display Name" placeholder='Enter display name'></TextField>
                </div>
            </div>
        </div>
    )
}

export default Login;