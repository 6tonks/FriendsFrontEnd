import React from 'react';
import './Login.css';
import { Button } from '@mui/material';

function Login() {

    const signIn = () => {
        console.log('test');
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://advancetitan.com/wp-content/uploads/2021/03/stonks.png"
                    alt=""
                />
                <h1>STONKS!</h1>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}


export default Login;