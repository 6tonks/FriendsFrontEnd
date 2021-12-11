import React, {useState, useEffect} from 'react';
import { Avatar, Box, Card, CardContent, Grid, Typography, TextField, InputAdornment, SvgIcon } from '@mui/material';
import Button from '@mui/material/Button';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AddIcon from '@mui/icons-material/Add';

function AddBalance() {
    const userID = localStorage.getItem('user_id');

    const [moneyAmount, setMoneyAmount] = useState([]);
    const [items, setItems] = useState([]);

    const fetchItems = async() => {
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            method: "addition",
            money_amount: moneyAmount
          })
      };
      
      var url = new URL(' https://d2kjnw8vmxc1wq.cloudfront.net/api/money/' + userID)

      const data = await fetch(url, requestOptions);

      const items = await data.json();
      console.log(items);
      window.location.reload(false);
    };

    const handleChange = (event) => {
        setMoneyAmount(event.target.value)
    };

    const handleSubmit = (event) => {
      fetchItems();
    };
    
    return (
        <Card
          sx={{ height: '100%' }}
          
        >
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: 'space-between' }}
            >
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  Deposit Money
                </Typography>
                <Box component="form" noValidate sx={{ maxWidth: 500 }}>
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon
                            fontSize="small"
                            color="action"
                          >
                            <LocalAtmIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    onChange={handleChange}
                    placeholder="Deposit Amount"
                    variant="outlined"
                    name="money_amount"
                    value={moneyAmount}
                  />
                  <Button
                      onClick={handleSubmit}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                      Add Money
                  </Button>
                </Box>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: 'green',
                    height: 56,
                    width: 56
                  }}
                >
                  <AddIcon />
                </Avatar>
              </Grid>
            </Grid>
            <Box
              sx={{
                pt: 2,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography
                color="textSecondary"
                variant="caption"
              >
                Last updated at {items['last_updated']} UTC
              </Typography>
            </Box>
          </CardContent>
        </Card>
    );
}

export default AddBalance;
