import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import CurrentBalance from './CurrentBalance';
import AddBalance from './AddBalance';
import DeductBalance from './DeductBalance';

const MoneyAccount = () => (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <CurrentBalance/>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <AddBalance/>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <DeductBalance/>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </>
  );

export default MoneyAccount
