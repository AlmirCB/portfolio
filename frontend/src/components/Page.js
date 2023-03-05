import React from 'react';
import CakeIcon from '@mui/icons-material/Cake'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';
import { withStyles } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';
import '../static/fonts/bitter/bitter-bold-webfont.woff2';
import '../static/fonts/bitter/bitter-bolditalic-webfont.woff2';
import '../static/fonts/bitter/bitter-italic-webfont.woff2';
import '../static/fonts/bitter/bitter-regular-webfont.woff2';
import {IconText} from './components'


const theme = createTheme({
  typography: {
    fontFamily: 'bitterregular, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('bitterregular'), local('bitteritalic'), local('bitterbold'), local('bitterbold_italic') format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  palette: {
    background: {
      main: '#F7F5F6'
    }
  }
});

theme.typography.h1.fontSize = '5rem';
theme.typography.h1.color = 'black';
theme.typography.h2.fontSize = '3rem';

const styles = {
    root: {
      flexGrow: 1,
    },
    header:{
      padding: "20px",
    },
    grayBackground: {
      backgroundColor: theme.palette.background.main,
    },

    paper: {
        // padding: theme.spacing(2),
        padding: '6px',
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        color: "blue",
    },
    title: {
        // color: theme.palette.text.primary,

        color: "blue"
    },
    oneLine: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row nowrap",
    },
    HeaderIconsRightTable:{
      color: "red"
    }
}

// TODO: Añadir el icono y link de Github y Linkedin en vez del teléfono y la casa.
function Header(){
    // const classes = useStyles();
    return(
        <Paper className="paper" sx={{...styles.paper, ...styles.grayBackground}}>
            <Grid container spacing={3} direction="row" justifyContent="space-between" alignItems="center" sx={styles.header}>
                <Grid xs={2}>
                    <div><img style={{height: "300px", position:"relative"}} src={ require('../static/images/photo_header.png') } /></div>
                    <IconText text="31/08/1992" icon={<CakeIcon />} size="medium" style={{margin: "3%"}}/>
                </Grid>    
                <Grid xs={7}>
                    <Typography variant="h1" component="h1" gutterBottom className="title">
                        Almir Cáceres Berraquero
                    </Typography>
                    <Typography variant="h4" component="h3" gutterBottom className="subtitle">
                        PROGRAMACIÓN Y DESARROLLO
                    </Typography>
                </Grid>
                <Grid item xs={2}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="space-aroundr"
                    spacing={1}
                >
                  <IconText text="almir.cabe@gmail.com" icon={<MailIcon />} aligned size="large" style={{marginBottom:"10%"}}/>
                  <IconText text="695544183" icon={<PhoneIcon />} aligned size="large" style={{marginBottom:"10%"}}/>
                  <IconText text="Barcelona" icon={<HomeIcon />} aligned size="large" style={{marginBottom:"10%"}}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

// export default function PageGrid() {
//     // const classes = useStyles();
  
//     return (
//       // <div className={classes.root}>
//       <div>
//         <Grid container spacing={3}>
//           <Grid xs={12}>
//             <Header></Header>
//           </Grid>
//           <Grid xs={9}>
//             <Paper className="paper" sx={styles.paper}>xs</Paper>
//           </Grid>
//           <Grid xs={3}>
//             <Paper className="paper" sx={styles.paper}>xs</Paper>
//           </Grid>
//         </Grid>
//         <Grid container spacing={3}>
//           <Grid xs>
//             <Paper className="paper" sx={styles.paper}>xs</Paper>
//           </Grid>
//           <Grid xs={6}>
//             <Paper className="paper" sx={styles.paper}>xs=6</Paper>
//           </Grid>
//           <Grid xs>
//             <Paper className="paper" sx={styles.paper}>xs</Paper>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }

export default function PageGrid(){
  return(
    <ThemeProvider theme={theme}>
      <Header></Header>
    </ThemeProvider>
  )
}