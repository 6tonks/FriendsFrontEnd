import React from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LogoutGoogle from '../LoginGoogle/LogoutGoogle'
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'

const theme = createTheme();

function Logout({ setToken }) {

    const handleLogout = async (event) => {
        event.preventDefault();
        // localStorage.removeItem('loginData');
        setToken=null;
        window.location.reload(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid onClick={ handleLogout } >
                <Link to="" className="hyperlink__style">
                    <LogoutGoogle />
                </Link>
            </Grid>
        </ThemeProvider>
    )
}

Logout.propTypes = {

}

export default Logout

