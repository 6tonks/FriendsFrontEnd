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

const RequestCard = (props) => {
    const classes = useStyles();

    const [addDecline, setAddDecline]=useState(null);

    const [message, setMessage]=useState("");

    const accept = () =>{
      setAddDecline(true);
      setMessage("Request Accepted");
    }
    
    const decline = () => {
      setAddDecline(false);
      setMessage("Request Declined");
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
            { props.show_acc && <Button onClick={accept} variant="outlined" color='primary'><CheckIcon/></Button>}
            <Button onClick={decline} variant="outlined" color='secondary'><ClearIcon/></Button>
          </ButtonGroup>
          </ThemeProvider>
        }
        title={addDecline===null ? props.name : message}
        subheader={addDecline===null && "Requested on " + props.date}
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


export default RequestCard;