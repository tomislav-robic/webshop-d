import React, { useState } from 'react';
import './Login.css';
import {TextField} from '@material-ui/core'
import Button from 'react-bootstrap/Button';
import {signInWithGoogle, auth} from '../../firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

function Login()  {

        const [registerEmail, setRegisterEmail] = useState("");
        const [registerPassword, setRegisterPassword] = useState("");
        const [loginEmail, setLoginEmail] = useState("");
        const [loginPassword, setLoginPassword] = useState("");

        const register = async () => {
            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    registerEmail,
                    registerPassword
                );
                console.log(user);
            } catch (error) {
                console.log(error.message);
            }
            
        };

        const login = async () => {
            try {
                const user = await signInWithEmailAndPassword(
                    auth,
                    loginEmail,
                    loginPassword
                );
                console.log(user);
            } catch (error) {
                console.log(error.message);
            }
        };

        return (
            <div className="Login">
                <div className="DivBlock">
                    <div>
                        <h2>I already have an account</h2>
                        <h4>Sign in with your email and password</h4>
                        <div>
                            <div className="Form">
                                <TextField label="email" placeholder='Enter email' onChange={(event) => {setLoginEmail(event.target.value)}}></TextField> 
                                <TextField label="password" placeholder='Enter password' type="password" onChange={(event) => {setLoginPassword(event.target.value)}}></TextField>
                            </div>
                        </div>
    
                        <div className="DivBlock">
                            <div >
                                <Button variant="dark" onClick={login}>SIGN IN</Button>
                            </div>
                            <div >
                                <Button variant="primary" onClick = {signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>I do not have account</h2>
                        <h4>Sign up with your email and password</h4>
                        <div>
                            <div className="Form">
                                <TextField label="Display Name" placeholder='Enter display name'></TextField>
                                <TextField label="Email" placeholder='Enter email' onChange={(event) => {setRegisterEmail(event.target.value)}}></TextField>
                                <TextField label="Password" placeholder='Enter password' type="password" onChange={(event) => {setRegisterPassword(event.target.value)}}></TextField>
                                <TextField label="Confirm Password" placeholder='Enter password' type="password"></TextField>
                            </div>
                            <div className="signUp">
                                <Button variant="dark" onClick={register}>SIGN UP</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default Login;