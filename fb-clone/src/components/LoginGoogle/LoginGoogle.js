import { React, useState } from 'react'
import { useGoogleLogin } from 'react-google-login'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId = '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LoginGoogle() {

    const onSuccess = async (res) => {
        // console.log('Login Success: currentUser:', res);
        alert(
        `Logged in successfully \n welcome ${res.profileObj.name} \n See console for full profile object.`
        );
        refreshTokenSetup(res);
        const googleData = res.tokenObj;
        localStorage.setItem('loginData', JSON.stringify(googleData));
    };
    
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
        `Failed to login, please try again`
        );
    };
    
    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });
    
    return (
        <div>
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={signIn} className="button"
            >
                <Avatar sx={{ m: 1, bgcolor: 'white' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google_logo" className="icon"></img>
                </Avatar>
                <span className="buttonText">Sign in with Google</span>
            </Button>
        </div>
        
    );
}

export default LoginGoogle

