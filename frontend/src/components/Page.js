import React from 'react';
import CakeIcon from '@mui/icons-material/Cake'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';


function Header(){
    // const classes = useStyles();
    return(
        <Paper className="paper">
            <Grid container spacing={3}>
                <Grid xs={3}>
                    <div><img style={{height: "300px"}} src={ require('../static/images/photo_header.png') } /></div>
                    <div className="oneLine"><CakeIcon /><Typography variant="caption" component="caption" >31/08/1992</Typography></div>
                </Grid>    
                <Grid xs={6}>
                    <Typography variant="h2" component="h2" gutterBottom className="title">
                        ALMIR CÁCERES BERRAQUERO
                    </Typography>
                    <Typography variant="h4" component="h3" gutterBottom className="subtitle">
                        PROGRAMACIÓN Y DESARROLLO
                    </Typography>
                </Grid>
                <Grid item xs={3}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-center"
                    spacing={1}
                >
                <Grid xs={12} className="oneLine"><HomeIcon /><Typography variant="caption" component="caption">Barcelona</Typography></Grid>
                <Grid xs={12} className="oneLine"><PhoneIcon /><Typography variant="caption" component="caption">695544183</Typography></Grid>
                <Grid xs={12} className="oneLine"><MailIcon /><Typography variant="caption" component="caption">almir.cabe@gmail.com</Typography></Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default function PageGrid() {
    // const classes = useStyles();
  
    return (
      // <div className={classes.root}>
      <div>
          TEST
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Header></Header>
          </Grid>
          <Grid xs={9}>
            <Paper className="paper">xs</Paper>
          </Grid>
          <Grid xs={3}>
            <Paper className="paper">xs</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid xs>
            <Paper className="paper">xs</Paper>
          </Grid>
          <Grid xs={6}>
            <Paper className="paper">xs=6</Paper>
          </Grid>
          <Grid xs>
            <Paper className="paper">xs</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

