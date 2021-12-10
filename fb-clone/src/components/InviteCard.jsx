import React, { useState } from 'react';
import {Grid} from '@mui/material';
// import { makeStyles, createTheme, ThemeProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { green, red } from '@mui/material/colors';

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    borderRadius: "10px",
    border: "1px solid #e8e8e8"
  }
});

const buttonsTheme = createTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const InviteCard = (props) => {
    const classes = useStyles();

    const [addDecline, setAddDecline]=useState(null);

    const [message, setMessage]=useState("");
    
    const cancel = () => {
      const url = new URL("https://z4sr5g47u6.execute-api.us-east-1.amazonaws.com/api/friends/" + localStorage.getItem('user_id') + "/cancel")
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friend_id: props.id.toString() })
      };
      fetch(url, requestOptions).then(
        async function(data) {
          console.log(data.status)
          if (data.status >= 200 && data.status < 300) {
            setAddDecline(false);
            setMessage("Invitation Cancelled");
          } else {
            setAddDecline(false);
            setMessage("There is an error in processing the request, please try again!");
          }
        }
      );
    }

    return (
      <Grid item xs={12}>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={props.avatar} aria-label="recipe" className={classes.avatar}>
            {props.name.substring(0,1)}
          </Avatar>
        }
        action={
          addDecline===null && <ThemeProvider theme={buttonsTheme}>
          <ButtonGroup aria-label="settings">
            <Button onClick={cancel} variant="outlined" color='secondary'><ClearIcon/></Button>
          </ButtonGroup>
          </ThemeProvider>
        }
        title={addDecline===null ? props.name : message}
        // subheader={addDecline===null && "Requested on " + props.date}
      />
        {addDecline===null && <CardContent>
          <Typography className={classes.pos} variant="body2" component="p">
            {props.text}
          </Typography>
        </CardContent>}
      </Card>
      </Grid>
    );  
};


export default InviteCard;