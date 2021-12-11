import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const theme = createTheme();

export default function Login({ setToken, setUser }) {

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    );

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://advancetitan.com/wp-content/uploads/2021/03/stonks.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Switch>
                        <Route path="/signup" exact >
                            <SignUp />
                        </Route>
                        <Route path="/" >
                            <SignIn setToken={setToken} setUser={setUser} />
                        </Route>
                    </Switch>
                </Grid>
                <code>{JSON.stringify(loginData)}</code>
            </ThemeProvider>
        </Router>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}