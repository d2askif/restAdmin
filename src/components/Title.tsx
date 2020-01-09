import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '32px 0 48px 0'
  }
}));

interface Props {
  title?: string;
}
function Title(props: Props) {
  const { title } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h2' component='h2'>
        {title}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  title: 'title'
};

export default Title;
