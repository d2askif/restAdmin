import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '32px 0 48px 0'
  }
}));
function Title(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h2' component='h2'>
        Dashboard
      </Typography>
    </div>
  );
}

Title.propTypes = {};

export default Title;
