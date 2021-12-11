import React, {useState, useEffect} from 'react';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';


function CurrentBalance() {

    const userID = localStorage.getItem('user_id');

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        var url = new URL(' https://d2kjnw8vmxc1wq.cloudfront.net/api/money/' + userID)

        const data = await fetch(url);

        const items = await data.json();
        setItems(items['money_account']);
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
                  Money Amount
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="h4"
                >
                  $ {items['money_amount']}
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: '#2196f3',
                    height: 56,
                    width: 56
                  }}
                >
                  <MoneyIcon />
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

export default CurrentBalance;