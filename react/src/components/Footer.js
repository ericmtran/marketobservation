import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
const Font = {
    color: 'white',
    fontSize: '25px'
}
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div>
      <Paper style={{background: 'black' }}className={classes.root} elevation={1}>
        <Typography  align="center" style={{color:'white'}}  variant="h5" component="h3">
        <Link to="/social/facebook"><button> <i style={Font} className="fa fa-facebook"></i></button></Link>
        <Link to="/social/medium"><button> <i style={Font} className="fa fa-medium"></i></button></Link>
        <Link to="/social/linkedin"><button> <i style={Font} className="fa fa-linkedin"></i></button></Link>
        <Link to="/social/twitter"><button> <i style={Font} className="fa fa-twitter"></i></button></Link>
        <Link to="/social/github"><button> <i style={Font} className="fa fa-github"></i></button></Link>
        </Typography>
        <Typography align="center" style={{color:'white'}} component="p">
          @Copyright eric 2019
        </Typography>
      </Paper>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);