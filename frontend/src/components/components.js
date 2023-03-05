import React from 'react';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';

const styles = {
    paper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row nowrap",
        backgroundColor: "inherit",
        fontFace: "inherit",
    },
    text:{
        display: "flex",
        marginLeft: "10px",
    }
}

/*  Functional components with an icon followed by text:
    PROPS:
        icon: An icon (from '@mui/icons-material/') 
        text: The text to be displayed
        aligned: Creates 2 grids, by this way several components
            might be aligned
        iconGridSize: size of the icon grid (defaults at 2)
        textGridSize: size of the text grid (defaults at 10)
        iconStyles: overrides icon grid style
        style: will override container styles.
        size: smaller / small / medium / large / larger
        
*/
const IconText = (props) => {
    // Return
    var iconGridSize = props.iconGridSize ? props.iconGridSize : 2;
    var textGridSize = props.textGridSize ? props.textGridSize : 10;
    var icon = props.icon;
    var textSize, iconSize;
    switch(props.size) {
        case 'smaller':
            textSize = "caption";
            iconSize = 25;
            break;
        case 'small':
            textSize = "body2";
            iconSize = 30;
            break;   
        case 'medium':
            textSize = "subtitle1";
            iconSize = 35;
            break;
        case 'large':
            textSize = "h6";
            iconSize = 40;
            break;
        case 'larger':
            textSize = "h4";
            iconSize = 50;
            break;
        default:
            textSize = "h6";
            iconSize = 45;
    }
    icon = React.cloneElement(
        icon,
        {style:{fontSize: iconSize, marginRight: "5%"}}
    )
    var text = <Typography variant={textSize}>{props.text}</Typography>

    if (props.aligned) {
        icon = (
            <Grid xs={iconGridSize}>
                {icon}
            </Grid>
        )
        text = (
            <Grid xs={textGridSize} sx={styles.text}>
                {text}
            </Grid>
        )
    }
    
    
    
    return(
        <Paper elevation={0} sx={{...styles.paper, ...props.style}}>
            {icon}
            {text}
        </Paper>
        )
}

/*  Main block in the dashboard */
const MainBlock = (props) => {
    return <Paper styles={{backgroundColor: props.backgroundColor}}>{props.children}</Paper>
}

export {IconText, MainBlock}