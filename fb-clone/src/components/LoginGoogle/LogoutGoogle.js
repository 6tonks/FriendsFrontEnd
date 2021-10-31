import React from 'react'
import { useGoogleLogout } from 'react-google-login'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LogoutGoogle() {
    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={signOut} className="button"
            >
            <Avatar sx={{ m: 1, bgcolor: 'white' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google_logo" className="icon"></img>
            </Avatar>
            <span className="buttonText">Sign out from Google</span>
        </Button>
    );
}

export default LogoutGoogle;
