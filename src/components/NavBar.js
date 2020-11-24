import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },


}));


const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        FoodMaps!
                    </Typography>
                    <Button color="inherit" to='/' component={Link}>
                        Event Feed
                    </Button>
                    <Button color="inherit" to='/Create' component={Link}>
                        Create an Event
                    </Button>
                    <Button color="inherit" to="/Saved" component={Link}>
                        Saved Events
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );

}
